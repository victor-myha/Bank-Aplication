import React, { useEffect, useMemo } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';
import profile from '../img/profile.png';
import { useState } from 'react';

const Navbar = (props) => {
    const [selected, setSelected] = useState({})

    const [navData, setNavData] = useState([
        { title: 'Home', link: '/home' },
        { title: 'Send Money', link: '/sendMoney' },
        { title: 'Top Up', link: '/topUp' },
        { title: 'Accounts', link: '/accounts' }
    ]);

    return (
        <div className='NavbarWrapper'>
            <div>
                <div className='logoWrapper'><NavLink to='/home'><img src={require('../img/logo.png').default} /></NavLink></div>
                <Nav className="col-md-12 d-none d-md-block  sidebar navPanel" activeKey="/home" >
                    <div className="sidebar-sticky"></div>
                    <div>
                        {
                            navData.map((nav, index) => {
                                return  (<div onClick={() => setSelected(nav)}>
                                    <Nav.Item className='navItem' >
                                        <NavLink to={nav.link}> {
                                            selected === nav
                                            ? <div className='d-flex'>
                                                <div><img width='5px' height='5px' src={require('../img/dote.png').default} /></div>
                                                <div><img src={require('../img' + nav.link + 'Active' + '.png').default} /></div>
                                                <div className='Active'>{nav.title}</div>
                                            </div>
                                            : <div className='d-flex'>
                                                <div><img src={require('../img' + nav.link + '.png').default} /></div>
                                                <div className='Disabled'>{nav.title}</div>
                                            </div>
                                        }
                                        </NavLink>
                                    </Nav.Item>
                                </div>)
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