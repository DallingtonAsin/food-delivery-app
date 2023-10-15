import { createSlice } from "@reduxjs/toolkit"

const initialState: any = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {

        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]
        },

        removeFromCart: (state, action) => {
            let newCart = [...state.items]
            let itemIdex = state.items.findIndex((item: any) => item.id === action.payload.id)
            if (itemIdex >= 0) {
                newCart.slice(itemIdex, 1)
            } else {
                console.log("Cannot remove item that is not in cart")
            }
            state.items = newCart
        },

        emptyCart: (state, action) => {
            state.items = []
        },
    }
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = (state: any) => state.cart.items;

export const selectCartItemsById = (state: any, id: any) => state.cart.items.filter((item: any) => item.id == id);

export const selectCartTotal = (state: any) => state.cart.items.reduce((total: number, item: any) => total = total + item.price, 0);


export default cartSlice.reducer