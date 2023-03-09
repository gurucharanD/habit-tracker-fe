import React, { useState } from "react";
import styles from './addHabit.module.css';
import Modal from "../UI/Modal";
import { Alert } from '@mui/material';
import { addHabit } from '../../store/habitSlice';
import { useDispatch } from "react-redux";
import { Button } from '@mui/material'

const AddHabit = (props) => {
    const [name, setName] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);
    const dispatch = useDispatch();

    // const nameRef = useRef();
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (name.trim() === '') {
            setIsNameValid(false);
            return;
        }
        // setName(nameRef.current.value);
        setIsNameValid(true);
        dispatch(addHabit({
            title: name,
            currentCount: 0,
            id: Math.random()
        }))
    }
    const nameInputChangeHandler = (event) => {
        event.preventDefault();
        setName(event.target.value);
        setIsNameValid(true);
    }
    return (
        <Modal onClose={props.onClose}>
            <form onSubmit={handleFormSubmit}>
                <div className={styles.input}>
                    <label htmlFor="name">Title:</label>
                    <input type="text" onChange={nameInputChangeHandler}></input>
                    {!isNameValid && <Alert severity="error">"Name cannot be empty</Alert>}
                </div>
                <Button variant="contained" type="submit">ADD</Button>
            </form>
        </Modal>
    );
};
export default AddHabit;
