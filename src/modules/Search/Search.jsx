import s from './Search.module.scss'
import debounce from 'lodash.debounce'
import {useCallback, useContext, useRef, useState} from "react";
import {SearchContext} from "../../App";

const Search = () => {
    const [value, setValue] = useState('');
    const {setSearchValue} = useContext(SearchContext);
    const inputRef = useRef();

    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str);
        }, 250),
        [],
    );

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    return (
        <div className={s.root}>
            <input className={s.input} ref={inputRef} value={value} onChange={onChangeInput} placeholder={"Поиск пиццы"}/>
        </div>
    )
}

export default Search;