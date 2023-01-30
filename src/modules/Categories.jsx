
const Categories = ({value, onClickCategory}) => {
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
                {categories.map((c,i) => <li key={c} onClick={() => onClickCategory(i)} className={value === i ? "active" : ''}>{c}</li>)}
            </ul>
        </div>
    )
}

export default Categories;