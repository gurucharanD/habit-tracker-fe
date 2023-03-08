import { useState } from "react";
import styles from './login.module.css';
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from '../../store/authSlice';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login());
        navigate("/home");
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
                    <Button variant="contained" type="submit">Login</Button>
                </form>
                <button onClick={() => { props.toggleForm("register") }} className={styles.link_btn}>Don't have an account? Register here.</button>
            </div>
        </div>

    );

}

export default Login;