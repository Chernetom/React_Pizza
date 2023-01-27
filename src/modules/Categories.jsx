import React, {useState} from "react";

const Categories = () => {
    const [index,setIndex] = useState(0);
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
                {categories.map((c,i) => <li onClick={() => setIndex(i)} className={index === i ? "active" : ''}>{c}</li>)}
            </ul>
        </div>
    )
}

export default Categories;