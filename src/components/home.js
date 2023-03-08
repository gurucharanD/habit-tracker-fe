import React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import SideNav from './layout/sidenav';
import Banner from './layout/banner';
import { Outlet } from 'react-router-dom';
import styles from './home.module.css';
import { useSelector } from 'react-redux';

const Home = () => {

    const toggle = useSelector(state => state.toggle.display);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    console.log(isLoggedIn)
    return (
        <>
            {/* {isLoggedIn && */}
            <div className={styles.App}>
                <Header></Header>
                <div className={styles.body}>
                    {toggle && < SideNav></SideNav >}
                    <div>
                        <Banner></Banner>
                        <Outlet></Outlet>
                    </div>
                </div>
                <Footer></Footer>
            </div>
            {/* } */}

        </>

    );
}

export default Home
