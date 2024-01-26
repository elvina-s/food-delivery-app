import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = {
                id: uuid(),
                dishId: action.payload.dish.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.dish.price
            }
            state.cartItems.push(newItem)
        },
        deleteFromCart: (state, action) => {
            state.cartItems = state.cartItems
            .filter((cartItem) => cartItem.id !== action.payload.cartItemId) 
        },
    },
})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;