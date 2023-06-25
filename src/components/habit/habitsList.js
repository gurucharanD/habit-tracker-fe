import React from "react";
import Habit from "./habit";
import Accordion from 'react-bootstrap/Accordion';
import styles from './habitsList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Notification from "../layout/Notification";
import { setNotification } from '../../store/uiSlice';
import { getHabits } from '../../store/habitSlice';

let INITIAL_RENDER = true;

const HabitsList = () => {

    const dispatch = useDispatch();

    // thunk pattern to fetch habits
    useEffect(() => {
        dispatch(
            setNotification({
                open: true,
                message: "fetching data",
                type: "warning"
            })
        );
        dispatch(getHabits());
        dispatch(
            setNotification({
                open: true,
                message: "data fetched  from database",
                type: "success"
            })
        );
    }, [dispatch]);

    const habits = useSelector(state => state.habit.habits);
    console.log(habits);
    const notification = useSelector(state => state.ui.notification);

    // useeffect pattern to update habits
    useEffect(() => {
        if (INITIAL_RENDER) {
            INITIAL_RENDER = false;
            console.log("INITIAL_RENDER use effect");
            return;
        }
        console.log("running use effect");
        const sendRequest = async () => {
            dispatch(
                setNotification({
                    open: true,
                    message: "fetching data",
                    type: "warning"
                })
            );
            const res = await fetch('https://habit-tracker-db-13080-default-rtdb.firebaseio.com/habits.json', {
                method: "PUT",
                body: JSON.stringify(habits)
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
                dispatch(
                    setNotification({
                        open: true,
                        message: "data fetched  from database",
                        type: "success"
                    })
                );
            }
        }
        sendRequest()
    }, [habits]);

    return (
        <div className={styles.body}>
            {notification && <Notification type={notification.type} message={notification.message} />}
            <Accordion>
                {
                    habits.map((habit) => {
                        return (
                            <Accordion.Item eventKey={habit.id} key={habit.id}>
                                <Accordion.Header>{habit.title} &nbsp;&nbsp;&nbsp;&nbsp;{habit.currentCount}<FontAwesomeIcon icon={faFire} /></Accordion.Header>
                                <Accordion.Body>
                                    <Habit key={habit.id} id={habit.id} title={habit.title} currentCount={habit.currentCount}></Habit>
                                </Accordion.Body>
                            </Accordion.Item>
                        );
                    })
                }
            </Accordion>
        </div>
    );
}

export default HabitsList;