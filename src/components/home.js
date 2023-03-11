import React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import SideNav from './layout/sidenav';
import Banner from './layout/banner';
import { Outlet } from 'react-router-dom';
import styles from './home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import AddHabit from './habit/addHabit';
import { toggle } from '../store/uiSlice';

const Home = () => {

    const sideNavToggle = useSelector(state => state.toggle.display);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const showAddHabitComp = useSelector(state => state.ui.display);
    const dispatch = useDispatch();
    const hideAddHabitComp = () => {
        dispatch(toggle());
    }

    return (
        <>
            {!isLoggedIn && <><p>Login to the app first!</p></>}
            {isLoggedIn &&
                <div className={styles.App}>
                    <Header></Header>
                    <div className={styles.body}>
                        {sideNavToggle && < SideNav></SideNav >}
                        <div>
                            <Banner></Banner>
                            {showAddHabitComp && <AddHabit onClose={hideAddHabitComp} />}
                            <Outlet></Outlet>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            }

        </>

    );
}

export default Home
