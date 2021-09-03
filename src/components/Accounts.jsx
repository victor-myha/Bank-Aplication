import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAccountsTC, requestAccounts } from '../redux/AccountsReducer';
import AccountInfo from './AccountInfo';
import './styles/Accounts.css'
import AccountsList from './AccountsList';
import { Col, Row } from 'react-bootstrap';

const Accounts = (props) => {
  const dispatch = useDispatch();
  const currency = useSelector(state => state.AccountsReducer.currency)
  const [selectedAccount, setAccountItem] = useState(null);

  useEffect(() => {
    dispatch(getAccountsTC()) 
  }, [])

  return (<div className='AccountsWrapper'>

    <div className="d-flex ">
    <Row className='w-100'>
      <Col md={6} className="mb-2">
      <div className='w-100'>
        <div className='accountsTitle'>Your accounts</div>
          <AccountsList selectedAccount={selectedAccount} setAccountItem={setAccountItem}/>
        
        <section className='footerWrapper'>
          <div className='footerContent'>
              <div className='d-flex align-items-center'>
                <div className='cardRequestImg'>
                  <img src={require('../img/CardRequest.svg').default} alt=""/>
                </div>
                
                <div>
                  <div>Request a card</div>
                  <div className='my-muted-text'>Get a debit card for free</div>
                </div>
              </div>
              <div className='rightArrow'>
                <img src={require('../img/RightArrow.png').default} alt=""/>
              </div>
          </div>

          <div className='footerContent'>
              <div className='d-flex align-items-center'>
                <div className='cardRequestImg'>
                  <img src={require('../img/CardRequest.svg').default} alt="" />
                </div>
                
                <div>
                  <div>Request a card</div>
                  <div className='my-muted-text'>Get a debit card for free</div>
                </div>
              </div>
              <div className='rightArrow'>
                <img src={require('../img/RightArrow.png').default} alt="" />
              </div>
          </div>
        </section>

      </div>
      </Col>
      
      <Col md={6} className="mb-2">
      <div className=" AccountsInfoLayer">
        {
          selectedAccount === null
          ? <div className='SendMoneyInfo'/>
          : <AccountInfo selectedAccount={selectedAccount} />
        }
      </div>
      </Col>
    </Row>
      
      
    </div>




  </div>)
}

export default Accounts;