import s from './Search.module.scss'
import {useContext} from "react";
import {SearchContext} from "../../App";

const Search = () => {
    const {searchValue, setSearchValue} = useContext(SearchContext);

    return (
        <div className={s.root}>
            <input className={s.input} value={searchValue} onChange={(event) => setSearchValue(event.target.value)} placeholder={"Поиск пиццы"}/>
        </div>
    )
}

export default Search;