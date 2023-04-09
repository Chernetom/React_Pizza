import React from "react";
import {Categories, Sort, Skeleton, PizzaBlock, Paginator} from "../modules";
import { useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {fetchPizzas} from "../redux/pizza/pizzaSlice";
import {selectPizzaData} from "../redux/pizza/pizzaSelectors";
import {selectFilter} from "../redux/filter/filterSelectors";
import {useAppDispatch} from "../redux/store";

const Home: React.FC = () => {
    const dispatch = useAppDispatch();

    const {items, status} = useSelector(selectPizzaData);
    const {categoryId, sortName, searchValue } = useSelector(selectFilter);

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
                        : items.map((p: any) => <PizzaBlock key={p.id} {...p}  />)
                }

            </div>
            <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}

export default Home;