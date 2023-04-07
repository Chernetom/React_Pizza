import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {getCartFromLS} from "../../utils/getCartFromLS";
import {culcTotalPrice} from "../../utils/culcTotalPrice";

export type CartItem = {
    id: string,
    title: string,
    type: string,
    price: number,
    count: number,
    imageUrl: string,
    size: number,
}

interface CartSliceState {
    totalPrice: number,
    items: CartItem[],
}
const {items, totalPrice} = getCartFromLS();

const initialState: CartSliceState = {
    totalPrice,
    items,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = culcTotalPrice(state.items);
        },
        minusItem: (state, action: PayloadAction<string>) => {
            const findItem = state.items.find((obj) => obj.id === action.payload);
            if (findItem && findItem.count > 1) {
                findItem.count--;
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0)
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(obj => obj.id !== action.payload);
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0)

        },
        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions

export default cartSlice.reducer