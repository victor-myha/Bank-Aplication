import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAccountsTC } from '../redux/AccountsReducer';
import AccountsList from './AccountsList';
import './styles/SendMoney.css'

const SendMoney = (props) => {
    const [isShowing, showSendMoneyInfo] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAccountsTC())
    }, [])

    return (<div className='SendMoneyWrapper d-flex'>
        <div className='w50'>
            <div className='sendMoneyTitle'>Send Money</div>
            <AccountsList showSendMoneyInfo={showSendMoneyInfo} />
        </div>

        <div className='w50 d-flex justify-content-center align-items-center'>
            <div className='sendMoneyTitle'>
                {
                    isShowing && <div className='d-flex align-items-center'>
                        <img className='me-2' width='14px' height='16px' src={require('../img/sendMoneyActive.png').default} alt="" />
                        <div>Send Money</div>
                    </div>
                }
            </div>
            
        </div>
    </div>)
}

export default SendMoney;