import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";

const initialState: any = {
    restaurant: null
}

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: initialState,
    reducers: {

        setRestaurant: (state, action) => {
            state.restaurant = action.payload
        }
    }
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: RootState) => state.restaurant.restaurant;

export default restaurantSlice.reducer