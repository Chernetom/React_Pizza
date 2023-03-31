import {configureStore} from "@reduxjs/toolkit";
import filterReducer from "./filter/filterSlice";
import cartReducer from "./cart/cartSlice";
import pizzaReducer from "./pizza/pizzaSlice";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer,
        pizza: pizzaReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
