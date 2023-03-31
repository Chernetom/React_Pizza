import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/filter/filterSlice";
import {selectCategories} from "../redux/filter/filterSelectors";

const Categories: React.FC = () => {
    const categoryId = useSelector(selectCategories);
    const dispatch = useDispatch();

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ];

    return (
        <div className="categories">
            <ul>
                {categories.map((c,i) => <li key={c} onClick={() => dispatch(setCategoryId(i))} className={categoryId === i ? "active" : ''}>{c}</li>)}
            </ul>
        </div>
    )
}

export default Categories;