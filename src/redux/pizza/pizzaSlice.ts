import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

type FetchPizzaArgs = {
    currentPage: number,
    category: string,
    search: string,
    sortBy: string,
    order: string
}

export const fetchPizzas = createAsyncThunk<PizzaItem[],FetchPizzaArgs>('pizza/fetchPizzasStatus', async (params) => {
    const {currentPage, category, search, sortBy, order} = params;
    const response = await axios.get<PizzaItem[]>(`https://63d67d25dc3c55baf43711e8.mockapi.io/items?page=${currentPage}&limit=4&${category}&${search}&sortBy=${sortBy}&order=${order}`);
    return response.data;
})

type PizzaItem = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    sizes: number[],
    types: number[]
}
export enum Status {
    Loading = 'loading',
    Success = 'success',
    Error = 'error'
}

interface PizzaSliceState {
    items: PizzaItem[],
    status: Status
}

const initialState: PizzaSliceState = {
    items: [],
    status: Status.Loading
}

const pizzaSlice = createSlice({
    name:'pizza',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<PizzaItem[]>) => {
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = Status.Loading;
            state.items = [];
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.Success;
        });
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = Status.Error;
            state.items = [];
        });
    }
})
export const {setItems} = pizzaSlice.actions;

export default pizzaSlice.reducer;