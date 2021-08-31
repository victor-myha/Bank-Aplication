import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './styles/AccountsInfo.module.css'

const AccountInfo = (props) => {
    console.log('Account Info',props.selectedAccount)
    return(<div className={styles.AccountsInfoWrapper}>
        
        { props.selectedAccount && 
           props.selectedAccount.title
        }
        <NavLink to='/sendMoney'><Button variant="outline-danger">Send Money</Button></NavLink>
    </div>)
}

export default AccountInfo;