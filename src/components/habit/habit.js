import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './habit.module.css'
import Calendar from 'react-calendar'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Button } from "@mui/material";

const Habit = (props) => {
    const [date, onDateChange] = useState(new Date());

    return (

        <div className={styles.habit}>
            {/* <div className={styles.title}><h3>{props.title}</h3></div>
            <div className={styles.count}>
                <h3>{props.currentCount}</h3>
            </div>
            <div className={styles.icons}>
                <FontAwesomeIcon icon={faFire} />
                <FontAwesomeIcon icon={faTrash} />
            </div> */}
            <div className={styles.calendar}>
                <Calendar onChange={onDateChange} value={date} />
                <Button variant="contained">Check In</Button>
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>
    );

};

export default Habit;

