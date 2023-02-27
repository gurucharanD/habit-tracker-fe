import React from "react";
import Habit from "./habit";
import Accordion from 'react-bootstrap/Accordion';
import styles from './habitsList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

const habits = [
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
];
const HabitsList = () => {
    return (
        <div className={styles.body}>
            <Accordion>
                {
                    habits.map((habit) => {
                        return (
                            <Accordion.Item eventKey={habit.id}>
                                <Accordion.Header>{habit.title} &nbsp;&nbsp;&nbsp;&nbsp;{habit.currentCount}<FontAwesomeIcon icon={faFire} /></Accordion.Header>
                                <Accordion.Body>
                                    <Habit key={habit.id} title={habit.title} currentCount={habit.currentCount}></Habit>
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