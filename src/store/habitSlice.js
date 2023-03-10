import { createSlice } from "@reduxjs/toolkit";
import { setNotification } from "./uiSlice";

const habitSlice = createSlice({
    name: 'habit',
    initialState: {
        habits: []
    },
    reducers: {
        addHabit(state, action) {
            const newHabit = action.payload;
            newHabit.id = Math.random();
            state.habits.push(newHabit);
        },
        deletHabit(state, action) {
            const id = action.payload;
            state.habits = state.habits.filter(habit => habit.id != id);
        },
        checkIn(state, action) {
            const id = action.payload;
            state.habits.map(habit => {
                if (habit.id == id) {
                    habit.currentCount += 1;
                    return;
                }
            });
        },
        replace(state, action) {
            state.habits = action.payload;
        }
    }
});



export const { addHabit, deletHabit, replace } = habitSlice.actions;
export const getHabits = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await fetch('https://habit-tracker-db-13080-default-rtdb.firebaseio.com/habits.json');
            const data = await res.json();
            console.log(data)
            return Object.values(data);
        }
        try {
            const habits = await fetchHandler();
            dispatch(replace(habits));
        } catch (e) { }
    }
};

export const saveHabit = (habit) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const res = await fetch('https://habit-tracker-db-13080-default-rtdb.firebaseio.com/habits.json', {
                method: "POST",
                body: JSON.stringify(habit)
            })
            const data = await res.json();
            if (data.error) {
                dispatch(
                    setNotification({
                        open: true,
                        message: "error fetching data",
                        type: "error"
                    })
                );
            } else {
                dispatch(getHabits());
            }
        }
        sendRequest()
    }
};

export const checkIn = (id, count) => {
    return (dispatch) => {
        const sendRequest = async () => {
            const res = await fetch(`https://habit-tracker-db-13080-default-rtdb.firebaseio.com/habits.json/habits/${id}`, {
                method: "PUT",
                body: JSON.stringify({
                    fields: {
                        currentCount: {
                            stringValue: count,
                        },
                    },
                })
            })
            const data = await res.json();
            if (data.error) {
                dispatch(
                    setNotification({
                        open: true,
                        message: "error fetching data",
                        type: "error"
                    })
                );
            } else {
                dispatch(getHabits());
            }
        }
        sendRequest()
    }
}
export default habitSlice;


