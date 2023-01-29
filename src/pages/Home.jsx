import Categories from "../modules/Categories";
import Sort from "../modules/Sort";
import Skeleton from "../modules/PizzaBlock/Skeleton";
import PizzaBlock from "../modules/PizzaBlock/PizzaBlock";
import {useEffect, useState} from "react";

const Home = () => {
    const [items,setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://63d67d25dc3c55baf43711e8.mockapi.io/items")
            .then(response => {
                return response.json();
            })
            .then(json => {
                setItems(json);
                setIsLoading(false);
            })
    },[]);


    return (
        <>
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
        </>
    )
}

export default Home;