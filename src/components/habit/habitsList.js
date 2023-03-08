import React from "react";
import Habit from "./habit";
import Accordion from 'react-bootstrap/Accordion';
import styles from './habitsList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

const HabitsList = () => {
    const habits = useSelector(state => state.habit.habits);
    return (
        <div className={styles.body}>
            <Accordion>
                {
                    habits.map((habit) => {
                        return (
                            <Accordion.Item eventKey={habit.id}>
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