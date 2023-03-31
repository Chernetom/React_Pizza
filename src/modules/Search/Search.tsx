import s from './Search.module.scss'
import debounce from 'lodash.debounce'
import {useCallback, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../redux/filter/filterSlice";

const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 250),
        [],
    );

    const onChangeInput = (event: any) => {
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