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
                                                ? <img src={require('../img'+ nav.link +'Active'+ '.png').default} />
                                                : <img src={require('../img'+ nav.link +'.png').default} />
                                            }
                                            
                                             {nav.title}
                                        </NavLink>
                                    </Nav.Item>
                                )
                            })
                        }
                    </div>
                    {/* <Nav.Item className='navItem'>
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
                    </Nav.Item> */}
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