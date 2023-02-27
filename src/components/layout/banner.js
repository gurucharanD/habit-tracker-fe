import React from "react";
import styles from './banner.module.css';
import { Button } from "@mui/material";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <h3>Cuurent Habits</h3>
            <Button variant="outlined">+</Button>
        </div>
    )
}

export default Banner;