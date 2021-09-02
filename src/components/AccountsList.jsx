import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {withRouter} from "react-router-dom";
import './styles/Accounts.css';

const AccountsList = (props) => {
    const accountsData = useSelector(state => state.AccountsReducer.accounts)
    const currency = [ 
      {meaning:'eur', symbols: '€'},
      {meaning:'gbp', symbols: '£'},
      {meaning:'usd', symbols: '$'},
      {meaning:'krw', symbols: '₩'} 
  ]

  function CurrencyToSign (item) {
    return currency.map((c)=>{
      return item.currency === c.meaning
        ? <div>{c.symbols } {item.balance}</div>
        : null
    })
  } 
    return accountsData.map((item, index) => {
        return <div className='accountsList'>
          {
            props.selectedAccount === item
              ? <section id='selected' className="d-flex align-items-center mb-4">
                  <div className="dote"><img src={require(`../img/dote.png`).default} /></div>
                  
                  <div className="CardBody AccountCard selected" >
                    <div className='d-flex align-items-center AccountItemTitle'>
                        <img src={require(`../img/${item.currency}.png`).default} />
                        {item.title}
                    </div>
                    {CurrencyToSign(item)}
                  </div>
              </section>

              : <section className='mb-4'>
                  <div>
                    <div className="CardBody AccountCard align-items-center" onClick={() => {props.match.path === '/home' ? props.setAccountItem(item) : props.showSendMoneyInfo(true) }}>
                      <div className='d-flex align-items-center'>
                        <img src={require('../img/'+ item.currency + '.png').default} />
                        {item.title}
                      </div>
                      <div className="currency">
                        {CurrencyToSign(item)}
                      </div>
                    </div>
                  </div>
              </section>
          }
        </div>
    })
}

export default withRouter(AccountsList);