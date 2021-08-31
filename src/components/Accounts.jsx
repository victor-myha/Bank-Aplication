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
import dote from '../img/dote.png'

const Accounts = (props) => {
  const dispatch = useDispatch();
  const accountsData = useSelector(state => state.AccountsReducer.accounts)

  useEffect(() => {
    dispatch(getAccountsTC())
  }, [])

  const [selectedAccount, setAccountItem] = useState({});

  return (<div className='AccountsWrapper'>
    <div className='accountsTitle'>Your accounts</div>

    <div className="d-flex">
      <div className='accountsList'>
      {/* <div className={selectedAccount === item ? 'selected' : 'AccountCard'} key={item.uniqueId} onClick={() => setAccountItem(item)}> */}
        {
          accountsData.map((item, index) => {
            return <div>
              {
                selectedAccount === item
                  ? <section id='selected' className="d-flex align-items-center mb-2">
                      <div><img src={dote}/></div>
                      
                      <div className="CardBody selected" >
                        <div className="title">{item.title}</div>
                        <div className="currency">
                          {`${item.currency} ${item.balance}`}
                        </div>
                      </div>
                  </section>

                  : <section className='mb-2'>
                      <div>
                        <div className="CardBody AccountCard" onClick={() => setAccountItem(item)}>
                          <div className="title">{item.title}</div>
                          <div className="currency">
                            {`${item.currency} ${item.balance}`}
                          </div>
                        </div>
                      </div>
                  </section>
              }
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
          selectedAccount &&
          <AccountInfo selectedAccount={selectedAccount} />
        }
      </div>
    </div>




  </div>)
}

export default Accounts;