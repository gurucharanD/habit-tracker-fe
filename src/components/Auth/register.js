import { useState } from "react";
import styles from './register.module.css';
import { Button } from "@mui/material";

const Register = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email)
        console.log(password)
    }

    return (
        <div className={styles.body}>
            <div className={styles.auth_form_container}>
                <h2>Register</h2>
                <form onSubmit={handleSubmit} className={styles.register_form}>
                    <label htmlFor="username">username</label>
                    <input type="text" placeholder="enter your username" id="username" name="username" onChange={(e) => setUsername(e.target.value)} ></input>
                    <label htmlFor="email">email</label>
                    <input type="email" placeholder="enter your email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} ></input>
                    <label htmlFor="password">password</label>
                    <input type="password" placeholder="enter your password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
                    <br></br>
                    <Button variant="contained">Register</Button>
                </form>
                <button onClick={() => { props.toggleForm("login") }} className={styles.link_btn}>Already have an account ? Login here</button>

            </div>
        </div>
    );
}

export default Register;