import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/Navbar.module.css'

const Navbar = (props) => {
    return(<div className={styles.NavbarWrapper}>
        <NavLink to={`/home`}>Home</NavLink>
        <NavLink to={`/sendMoney`}>Send Money</NavLink>
        <NavLink to={`/topUp`}>Top Up</NavLink>
        <NavLink to={`/accounts`}>Accounts</NavLink>
    </div>)
}

export default Navbar;