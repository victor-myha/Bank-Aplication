import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';
import logo from '../img/logo.png';
import dote from '../img/dote.png';
import profile from '../img/profile.png';
import { useState } from 'react';

const Navbar = (props) => {
    const [navData, setData] = useState(
        [
            { title: 'Home', link:'/home', active: false },
            { title: 'Send Money',link:'/sendMoney', active: false },
            { title: 'Top Up',link:'/topUp', active: false },
            { title: 'Accounts',link:'/accounts', active: false }
        ]);

    const setActiveId = (id) =>{
        const navCopyData = [...navData];
        navCopyData.map((n)=>n.active=false);
        navCopyData[id].active = true;
        setData(navCopyData)
    }
    return (
        <div className='NavbarWrapper'>
            <div>
                <div className='logoWrapper'><img src={logo} /></div>
                <Nav className="col-md-12 d-none d-md-block  sidebar navPanel" activeKey="/home" onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
                    <div className="sidebar-sticky"></div>
                    <div>
                        {
                            navData.map((nav,index) => {
                                return (
                                    <Nav.Item className='navItem' onClick={()=>setActiveId(index)}>
                                        <NavLink  to={nav.link}>
                                            {
                                                nav.active === true 
                                                ? <div className='d-flex'>
                                                    <div><img src={require('../img/dote.png').default} /></div>
                                                    <div><img src={require('../img'+ nav.link +'Active'+ '.png').default} /></div>
                                                    <div className='Active'>{nav.title}</div>
                                                </div>
                                                : <div className='d-flex'>
                                                    <img src={require('../img'+ nav.link +'.png').default} />
                                                    <div className='Disabled'>{nav.title}</div>
                                                </div>
                                            }
                                            
                                             
                                        </NavLink>
                                    </Nav.Item>
                                )
                            })
                        }
                    </div>
                </Nav>
            </div>
            <div className="d-flex navProfileWrap">
                <div className='profileImg'><img width="100%" height="100%" src={profile} /></div>
                <div>Profile</div>
            </div>
        </div>
    )
}

export default Navbar;