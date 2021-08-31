import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';
import logo from '../img/logo.png';
import navHomeSelected from '../img/navHomeSelected.png';
import navHome from '../img/navHome.png';
import navSendMoney from '../img/navSendMoney.svg';
import navTopUp from '../img/navTopUp.svg';
import navAccounts from '../img/navAccounts.svg';
import dote from '../img/dote.png';
import profile from '../img/profile.png';
import { useState } from 'react';

const Navbar = (props) => {
    // return(<div className={NavbarWrapper}>
    //     <NavLink to={`/home`}>Home</NavLink>
    //     <NavLink to={`/sendMoney`}>Send Money</NavLink>
    //     <NavLink to={`/topUp`}>Top Up</NavLink>
    //     <NavLink to={`/accounts`}>Accounts</NavLink>
    // </div>)
    return (
        <div className='NavbarWrapper'>
            <div>
                <div className='logoWrapper'><img src={logo} /></div>
                <Nav className="col-md-12 d-none d-md-block  sidebar navPanel"
                    activeKey="/home"
                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
                    <div className="sidebar-sticky"></div>
                    <Nav.Item className='navItem'>
                        <NavLink activeClassName='Active' to={`/home`}><img src={navHomeSelected}/> Home</NavLink>
                    </Nav.Item>
                    <Nav.Item className='navItem'>
                        <NavLink activeClassName='Active' to={`/sendMoney`}><img src={navSendMoney}/> Send Money</NavLink>
                    </Nav.Item>
                    <Nav.Item className='navItem'>
                        <NavLink activeClassName='Active' to={`/topUp`}><img src={navTopUp}/> Top Up</NavLink>
                    </Nav.Item>
                    <Nav.Item className='navItem'>
                        <NavLink activeClassName='Active'  to={`/accounts`}><img src={navAccounts}/> Accounts</NavLink>
                    </Nav.Item>
                </Nav>
            </div>
            <div className="d-flex navProfileWrap">
                <div className='profileImg'><img width="100%" height="100%" src={profile}/></div>
                <div>Profile</div>
            </div>
        </div>
    )
}

export default Navbar;