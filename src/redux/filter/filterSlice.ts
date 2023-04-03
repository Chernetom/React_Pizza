import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type Sort = {
    name: string,
    sortProperty: 'rating' | '-rating' | 'price' | '-price' | 'title' | '-title'
}

interface FilterSliceState {
    searchValue: string,
    categoryId: number,
    sortName: Sort
}

const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    sortName: {
        name: 'популярности up',
        sortProperty: 'rating'
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue: (state, action:PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        setCategoryId: (state, action:PayloadAction<number>) => {
            state.categoryId = action.payload;
        },
        setSortName: (state, action:PayloadAction<Sort>) => {
            state.sortName = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCategoryId, setSortName, setSearchValue } = filterSlice.actions

export default filterSlice.reducer