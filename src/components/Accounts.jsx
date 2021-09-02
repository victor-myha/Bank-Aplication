import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAccountsTC, requestAccounts } from '../redux/AccountsReducer';
import AccountInfo from './AccountInfo';
import './styles/Accounts.css'
import dote from '../img/dote.png'
import AccountsList from './AccountsList';

const Accounts = (props) => {
  const dispatch = useDispatch();
  // const accountsData = useSelector(state => state.AccountsReducer.accounts)
  const [selectedAccount, setAccountItem] = useState(null);
  useEffect(() => {
    dispatch(getAccountsTC())
  }, [])

  return (<div className='AccountsWrapper'>
    

    <div className="d-flex ">
      <div className='myHalf'>
        <div className='accountsTitle'>Your accounts</div>
          <AccountsList selectedAccount={selectedAccount} setAccountItem={setAccountItem}/>
        
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
      <div className="myHalf AccountsInfoLayer">
        {
          selectedAccount === null
          ? <div className='SendMoneyInfo'></div>
          : <AccountInfo selectedAccount={selectedAccount} />
        }
      </div>
    </div>




  </div>)
}

export default Accounts;