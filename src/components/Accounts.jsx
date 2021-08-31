import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAccountsTC, requestAccounts } from '../redux/AccountsReducer';
import AccountInfo from './AccountInfo';
import './styles/Accounts.css'

const Accounts = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccountsTC())
  }, [])
  const [accountItem, setAccountItem] = useState({});
  const accountsData = useSelector(state => state.AccountsReducer.accounts)

  return (<div className='AccountsWrapper'>
    <div className='accountsTitle'>Your accounts</div>

    <div className="d-flex">
      <div className='accountsList'>
        {
          accountsData.map((item, index) => {
            return <div className='AccountCard' key={item.uniqueId} onClick={() => setAccountItem(item)}>
              <div className="CardBody">
                <div className="title">{item.title}</div>
                <div className="currency">
                  {`${item.currency} ${item.balance}`}
                </div>
              </div>
            </div>
          })
        }
        <div className='accountsFooter'>
          <Card >
            <Card.Body>€ £ $ ₩ Request a card</Card.Body>
          </Card>
        </div>
      </div>
      <div className="accountLayer">
        {
          accountItem &&
          <AccountInfo accountItem={accountItem} />
        }
      </div>
    </div>




  </div>)
}

export default Accounts;