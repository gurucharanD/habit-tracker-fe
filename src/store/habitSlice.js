import { createSlice } from "@reduxjs/toolkit";
const habitSlice = createSlice({
    name: 'habit',
    initialState: {
        habits: [
            // {
            //     id: 1,
            //     title: 'core training',
            //     currentCount: 2
            // },
            // {
            //     id: 2,
            //     title: 'meditation',
            //     currentCount: 3
            // },
            // {
            //     id: 3,
            //     title: 'Running',
            //     currentCount: 2
            // },
        ]
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



export const { addHabit, deletHabit, checkIn, replace } = habitSlice.actions;
export const getHabits = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await fetch('https://habit-tracker-db-13080-default-rtdb.firebaseio.com/habits.json');
            const data = await res.json();
            console.log(data)
            return data;
        }
        try {
            const habits = await fetchHandler();
            dispatch(replace(habits));
        } catch (e) { }
    }
}
export default habitSlice;