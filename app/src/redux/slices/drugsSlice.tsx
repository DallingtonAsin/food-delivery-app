import { createSlice } from "@reduxjs/toolkit"
import { Drug } from "../../interfaces";
import { RootState } from "../store";

interface CartState {
    cart: Drug[];
}

const initialState: CartState = {
    cart: []
}

const drugSlice = createSlice({
    name: 'drugs',
    initialState: initialState,
    reducers: {

        addDrugToCart: (state, action) => {
            const itemPresent = state.cart.find((item: Drug) => item.id === action.payload.id);
            if (itemPresent) {
                itemPresent.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },

        removeDrugFromCart: (state, action) => {
            const newCart = state.cart.filter((item: Drug) => item.id !== action.payload.id);
            state.cart = newCart;
        },

        incrementQuantity: (state, action) => {
            const itemPresent = state.cart.find((item: Drug) => item.id === action.payload.id);
            if (itemPresent) {
                itemPresent.quantity++;
            }
        },

        decrementQuantity: (state, action) => {
            const itemPresent = state.cart.find((item: Drug) => item.id === action.payload.id);
            if (itemPresent) {
                if (itemPresent.quantity == 1) {
                    const newCart = state.cart.filter((item: Drug) => item.id !== action.payload.id);
                    state.cart = newCart;
                } else {
                    itemPresent.quantity--;
                }
            }
        }
    }
});

export const { addDrugToCart, removeDrugFromCart, incrementQuantity, decrementQuantity } = drugSlice.actions;

export const selectCart = (state: RootState) => state.drugs.cart;

export default drugSlice.reducer;
