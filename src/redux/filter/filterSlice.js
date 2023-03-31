import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        setCategoryId: (state, action) => {
            state.categoryId = action.payload;
        },
        setSortName: (state, action) => {
            state.sortName = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCategoryId, setSortName, setSearchValue } = filterSlice.actions

export default filterSlice.reducer