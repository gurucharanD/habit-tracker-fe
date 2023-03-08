import { createSlice } from "@reduxjs/toolkit";
const habitSlice = createSlice({
    name: 'habit',
    initialState: {
        habits: [
            {
                id: 1,
                title: 'core training',
                currentCount: 2
            },
            {
                id: 2,
                title: 'meditation',
                currentCount: 3
            },
            {
                id: 3,
                title: 'Running',
                currentCount: 2
            },
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
        }
    }
});

export const { addHabit, deletHabit, checkIn } = habitSlice.actions;
export default habitSlice;