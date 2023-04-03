import {configureStore} from "@reduxjs/toolkit";
import filterReducer from "./filter/filterSlice";
import cartReducer from "./cart/cartSlice";
import pizzaReducer from "./pizza/pizzaSlice";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer,
        pizza: pizzaReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
