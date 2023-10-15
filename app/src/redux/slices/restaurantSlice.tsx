import { createSlice } from "@reduxjs/toolkit"

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

export const selectRestaurant = (state: any) => state.restaurant.restaurant;

export default restaurantSlice.reducer