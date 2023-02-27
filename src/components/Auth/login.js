import { Fragment, useState } from "react";
import styles from './login.module.css';
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email)
        console.log(password)
    }

    const loginUser = (event) => {
        navigate("/home")
    }

    return (
        <div className={styles.body}>
            <div className={styles.auth_form_container}>
                <h2>Login</h2>

                <form onSubmit={handleSubmit} className={styles.login_form}>
                    <label htmlFor="email">email</label>
                    <input type="email" placeholder="enter your email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} ></input>
                    <label htmlFor="password">password</label>
                    <input type="password" placeholder="enter your password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
                    <br></br>
                    <Button variant="contained" onClick={loginUser}>Login</Button>
                </form>
                <button onClick={() => { props.toggleForm("register") }} className={styles.link_btn}>Don't have an account? Register here.</button>
            </div>
        </div>

    );

}

export default Login;