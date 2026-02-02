import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pages/pagesReducer";
import productReducer from "./products/productReducer";

export const store = configureStore({
    reducer:{
        pages: pageReducer,
        products : productReducer
    },
    devTools: true,
});