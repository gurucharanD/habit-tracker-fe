import { createSlice } from "@reduxjs/toolkit";
const addHabitSlice = createSlice({
    name: 'addHabit',
    initialState: {
        display: false
    },
    reducers: {
        toggle(state) {
            state.display = !state.display
        }
    }
});

export const { toggle } = addHabitSlice.actions;
export default addHabitSlice;
