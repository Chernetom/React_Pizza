import Categories from "../modules/Categories";
import Sort from "../modules/Sort";
import Skeleton from "../modules/PizzaBlock/Skeleton";
import PizzaBlock from "../modules/PizzaBlock/PizzaBlock";
import {useEffect, useState} from "react";

const Home = () => {
    const [items,setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId,setCategoryId] = useState(0);
    const [sortName, setSortName] = useState({
        name: 'популярности up',
        sortProperty: 'rating'
    });

    useEffect(() => {
        setIsLoading(true);
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sortBy = sortName.sortProperty.replace('-','');
        const order = sortName.sortProperty.includes('-') ? 'asc' : 'desc';

        fetch(`https://63d67d25dc3c55baf43711e8.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
            .then(response => {
                return response.json();
            })
            .then(json => {
                setItems(json);
                setIsLoading(false);
            });
            window.scrollTo(0, 0);
    },[categoryId, sortName]);


    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
                <Sort value={sortName} onClickSort={(name) => setSortName(name)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                    : items.map(p => <PizzaBlock key={p.id} {...p}  />)}
            </div>
        </div>
    )
}

export default Home;