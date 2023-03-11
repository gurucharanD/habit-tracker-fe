import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        notification: null,
        display: false
    },
    reducers: {
        setNotification(state, action) {
            state.notification = {
                open: action.payload.open,
                message: action.payload.message,
                type: action.payload.type
            }
        },
        toggle(state) {
            state.display = !state.display
        }
    }
});

export const { setNotification, toggle } = uiSlice.actions;
export default uiSlice;


