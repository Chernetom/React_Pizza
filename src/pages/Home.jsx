import Categories from "../modules/Categories";
import Sort from "../modules/Sort";
import Skeleton from "../modules/PizzaBlock/Skeleton";
import PizzaBlock from "../modules/PizzaBlock/PizzaBlock";
import {useContext, useEffect, useState} from "react";
import Paginator from "../modules/Paginator/Paginator";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {fetchPizzas} from "../redux/slices/pizzaSlice";

const Home = () => {
    const dispatch = useDispatch();

    const {items, status} = useSelector(state => state.pizza);
    const {categoryId, sortName } = useSelector(state => state.filter);

    const {searchValue} = useContext(SearchContext);
    const [currentPage,setCurrentPage] = useState(1);

    useEffect(() => {
        const getPizzas = async () => {
            const category = categoryId > 0 ? `category=${categoryId}` : '';
            const sortBy = sortName.sortProperty.replace('-','');
            const order = sortName.sortProperty.includes('-') ? 'asc' : 'desc';
            const search = searchValue ? `search=${searchValue}` : '';

            dispatch(
                fetchPizzas({
                    currentPage,
                    category,
                    search,
                    sortBy,
                    order
                })
            );

            window.scrollTo(0, 0);
        }
        getPizzas();
    },[categoryId, sortName, searchValue, currentPage]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {status === 'error'
                    ? <div>Произошла ошибка </div>
                    :   status === 'loading'
                        ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
                        : items.map(p => <PizzaBlock key={p.id} {...p}  />)
                }

            </div>
            <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}

export default Home;