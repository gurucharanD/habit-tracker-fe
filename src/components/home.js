import React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import SideNav from './layout/sidenav';
import Banner from './layout/banner';
import { Outlet } from 'react-router-dom';
import styles from './home.module.css';

const Home = () => {
    return (
        <div className={styles.App}>
            <Header></Header>
            <div className={styles.body}>
                < SideNav></SideNav >
                <div>
                    <Banner></Banner>
                    {/* <HabitsList></HabitsList> */}
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home
