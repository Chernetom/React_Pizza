import Categories from "../modules/Categories";
import Sort from "../modules/Sort";
import Skeleton from "../modules/PizzaBlock/Skeleton";
import PizzaBlock from "../modules/PizzaBlock/PizzaBlock";
import {useContext, useEffect, useState} from "react";
import Paginator from "../modules/Paginator/Paginator";
import {SearchContext} from "../App";
import {useSelector} from "react-redux";
import axios from 'axios';
import qs from "qs";

const Home = () => {
    const {categoryId, sortName } = useSelector(state => state.filter);

    const {searchValue} = useContext(SearchContext);
    const [items,setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage,setCurrentPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sortBy = sortName.sortProperty.replace('-','');
        const order = sortName.sortProperty.includes('-') ? 'asc' : 'desc';
        const search = searchValue ? `search=${searchValue}` : '';

        axios
            .get(`https://63d67d25dc3c55baf43711e8.mockapi.io/items?page=${currentPage}&limit=4&${category}&${search}&sortBy=${sortBy}&order=${order}`)
            .then(response => {
                setItems(response.data);
                setIsLoading(false);
            })

            window.scrollTo(0, 0);
    },[categoryId, sortName, searchValue, currentPage]);


    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                    : items.map(p => <PizzaBlock key={p.id} {...p}  />)}
            </div>
            <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}

export default Home;