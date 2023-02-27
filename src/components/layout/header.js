import React from "react";
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";


const Header = () => {

    const navigate = useNavigate();
    const navigateToProfile = () => {
        navigate("/home/profile")
    };
    const logOut = () => {
        navigate("/")
    };

    return (
        <div className={styles.layout}>
            <FontAwesomeIcon icon={faBars} />
            <h4>Habit Tracker</h4>
            <div className={styles.profileArea}>
                <FontAwesomeIcon icon={faUser} className={styles.icon} onClick={navigateToProfile} />
                <FontAwesomeIcon icon={faSignOut} className={styles.icon} onClick={logOut} />
            </div>
        </div>
    )
};

export default Header;