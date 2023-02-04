import {configureStore} from "@reduxjs/toolkit";
import sortReducer from "./slices/sortSlice";

export const store = configureStore({
    reducer: {
        sort: sortReducer
    }
});

