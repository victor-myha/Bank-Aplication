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
import eur from '../img/eur.png'
import dote from '../img/dote.png'
import gbp from '../img/gbp.png'
import usd from '../img/usd.png'
import krw from '../img/krw.png'

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
      <div>
        {
          accountsData.map((item, index) => {
            return <div className='accountsList'>
              {
                selectedAccount === item
                  ? <section id='selected' className="d-flex align-items-center mb-4">
                      <div className="dote"><img src={dote}/></div>
                      
                      <div className="CardBody AccountCard selected" >
                        <div className='d-flex align-items-center AccountItemTitle'>
                            <img src={require('../img/'+ item.currency + '.png').default} />
                            {item.title}
                          </div>
                        <div >
                          {`${item.currency} ${item.balance}`}
                        </div>
                      </div>
                  </section>

                  : <section className='mb-4'>
                      <div>
                        <div className="CardBody AccountCard align-items-center" onClick={() => setAccountItem(item)}>
                          <div className='d-flex align-items-center'>
                            <img src={require('../img/'+ item.currency + '.png').default} />
                            {item.title}
                          </div>
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
        <section className='footerWrapper'>
          <div className='footerContent'>
              <div className='d-flex align-items-center'>
                <div className='cardRequestImg'><img src={require('../img/CardRequest.svg').default} alt="" /></div>
                
                <div>
                  <h4>Request a card</h4>
                  <h6 className='text-muted'>Get a debit card for free</h6>
                </div>
              </div>
              <div className='rightArrow'><img src={require('../img/RightArrow.png').default} alt="" /></div>
          </div>

          <div className='footerContent'>
              <div className='d-flex align-items-center'>
                <div className='cardRequestImg'><img src={require('../img/CardRequest.svg').default} alt="" /></div>
                
                <div>
                  <h4>Request a card</h4>
                  <h6 className='text-muted'>Get a debit card for free</h6>
                </div>
              </div>
              <div className='rightArrow'><img src={require('../img/RightArrow.png').default} alt="" /></div>
          </div>
        </section>

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