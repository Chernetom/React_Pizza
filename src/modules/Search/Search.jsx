import s from './Search.module.scss'

const Search = ({searchValue, setSearchValue}) => {
    return (
        <div className={s.root}>
            <input className={s.input} value={searchValue} onChange={(event) => setSearchValue(event.target.value)} placeholder={"Поиск пиццы"}/>
        </div>
    )
}

export default Search;