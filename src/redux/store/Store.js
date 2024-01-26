import { configureStore } from "@reduxjs/toolkit";
//import cart from "../slices/cartSlice";
//import dishes from "../slices/dishesSlice";
import cartSlice from "../slices/cartSlice";
import dishesSlice from "../slices/dishesSlice";

export const store = configureStore({
    reducer: {
        dishes: dishesSlice,
        cart: cartSlice, 
    },
})
