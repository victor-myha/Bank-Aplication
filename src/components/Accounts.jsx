import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAccountsTC,requestAccounts } from '../redux/AccountsReducer';
import AccountInfo from './AccountInfo';
import styles from './styles/Accounts.module.css'

const Accounts = (props) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAccountsTC())
  },[])
  const [accountItem, setAccountItem] = useState({});
  const accountsData = useSelector(state=>state.AccountsReducer.accounts)
 
    return(<div className={styles.AccountsWrapper}>
        {
          accountsData.map((item,index)=>{
            return <div className={styles.AccountCard} key={item.uniqueId} onClick={()=>setAccountItem(item)}>
              {item.title}
            </div>
          })
        }
        <div className="accountLayer">
        {
          accountItem &&
          <AccountInfo accountItem={accountItem}/>
        }
        </div>
        
    </div>)
}

export default Accounts;