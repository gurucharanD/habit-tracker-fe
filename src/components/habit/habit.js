import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './habit.module.css'
// import Calendar from 'react-calendar'
// import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { checkIn, deletHabit } from "../../store/habitSlice";


const Habit = (props) => {
    // const [date, onDateChange] = useState(new Date());
    const dispatch = useDispatch();

    const handleCheckin = (id) => {
        dispatch(checkIn(id));
    };

    const handleDelete = (id) => {
        dispatch(deletHabit(id));
    };

    return (
        <div className={styles.habit}>
            <div className={styles.calendar}>
                {/* <Calendar onChange={onDateChange} value={date} /> */}
                <Button variant="contained" onClick={() => { handleCheckin(props.id) }}>Check In</Button>
                <FontAwesomeIcon icon={faTrash} onClick={() => { handleDelete(props.id) }} />
            </div>
        </div>
    );

};

export default Habit;

