import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/AccountsInfo.module.css'

const AccountInfo = (props) => {
    console.log('Account Info',props.accountItem)
    return(<div className={styles.AccountsInfoWrapper}>
        
        { props.accountItem && 
           props.accountItem.title
        }

        <NavLink to='/sendMoney'><button>Send Money</button></NavLink>
    </div>)
}

export default AccountInfo;