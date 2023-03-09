import React from "react";
import styles from './banner.module.css';
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggle } from '../../store/addHabitSlice';

const Banner = () => {

    const dispatch = useDispatch();
    const toggleAddHabit = () => {
        dispatch(toggle());
    }
    return (
        <div className={styles.banner}>
            <h3>Cuurent Habits</h3>
            <Button variant="outlined" onClick={toggleAddHabit}>+</Button>
        </div>
    )
}

export default Banner;