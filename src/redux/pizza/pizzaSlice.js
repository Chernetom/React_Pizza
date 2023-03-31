import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
    const {currentPage, category, search, sortBy, order} = params;
    const response = await axios.get(`https://63d67d25dc3c55baf43711e8.mockapi.io/items?page=${currentPage}&limit=4&${category}&${search}&sortBy=${sortBy}&order=${order}`);
    return response.data;
})

const initialState = {
    items: [],
    status: 'loading'
}

const pizzaSlice = createSlice({
    name:'pizza',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        }
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.status = 'loading';
            state.items = [];
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        },
        [fetchPizzas.rejected]: (state) => {
            state.status = 'error';
            state.items = [];
        },

    }
})
export const {setItems} = pizzaSlice.actions;

export default pizzaSlice.reducer;