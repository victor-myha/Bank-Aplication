import React from 'react';
import { Button} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './styles/AccountsInfo.css';

const AccountInfo = (props) => {
    const currency = useSelector(state => state.AccountsReducer.currency)
    return (<div className='AccountsInfoWrapper'>
        <div className="infoContainer"> 
            <p className='infoTitle text-muted '>Balance</p>

            <div className="d-flex justify-content-between align-items-center">
                <p className='info-currency'>
                    {
                        currency.map((c)=>{
                            return <div>
                                {props.selectedAccount.currency === c.meaning
                                ? <div>{c.symbols } {props.selectedAccount.balance}</div>
                                : null}
                            </div>
                        })
                    }
                    
                </p>
                <NavLink to='/topUp'><Button variant="outline-danger" className='topUpBtn'><img className='me-2' src={require('../img/topUpActive.svg').default} width='28px' />Top Up</Button></NavLink>
            </div>

            <p className='mt-3 mb-4 text-muted '>Quick Transaction</p>

            <div className="transactionTo d-flex justify-content-between">
                <div>
                    <NavLink to='/sendMoney' className='sendMoneyLink'>
                        <Button variant="outline-danger" className='sendMoneyBtn d-flex flex-column align-items-center'>
                            <img className='mb-3' src={require('../img/sendMoney.svg').default} width='28px' />
                            {`Send \n Money`}
                        </Button>
                    </NavLink>
                </div>
                <div>
                    <Button variant="outline-danger" className='peopleBtn d-flex flex-column align-items-center'><img className='mb-3' src={require('../img/leo.svg').default} width='70px' />Leo W.</Button>
                </div>
                <div>
                    <Button variant="outline-danger" className='peopleBtn d-flex flex-column align-items-center'><img className='mb-3' src={require('../img/monica.svg').default} width='70px' />Monica L.</Button>
                </div>
            </div>

            <div className='infoCard mt-4'>
                <div className="cardBody">
                    <div className='d-flex mt-3 justify-content-between align-items-center'>
                        <div className='text-muted acType'>
                            <input className='me-2' type="checkbox" checked/>
                            Accounts Type                            
                        </div>
                        <div className='blackText'>
                            Personal
                        </div>
                    </div>
                   
                    <hr  />
                    
                    <div className='d-flex mt-3 mb-3 justify-content-between align-items-center'>
                        <div className='text-muted acType'>
                        <img className='me-2' src={require('../img/coins.svg').default} />
                            Currency                            
                        </div>
                        <div className='blackText'>
                            Euro EUR
                        </div>
                    </div>
                </div>
            </div>
            <div className='infoCard mt-4'>
                <div className="cardBody">
                    <div className='d-flex mt-3 justify-content-between align-items-center'>
                        <div className='text-muted acType'>
                        <img className='me-2' src={require('../img/piggy.svg').default} />
                            Passive Saving                            
                        </div>
                        <div className='blackText'>
                            Enabled 20%
                        </div>
                    </div>
                   
                    <hr  />
                    
                    <div className='d-flex mt-3 mb-3 justify-content-between align-items-center'>
                        <div className='text-muted acType'>
                            Share Account                            
                        </div>
                        <div>
                        <img className='me-2' src={require('../img/p1.svg').default} />
                        <img className='me-2' src={require('../img/p2.svg').default} />
                        <img className='me-2' src={require('../img/p3.svg').default} />
                        <img className='me-2' src={require('../img/p+2.svg').default} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <NavLink to='/sendMoney'><Button variant="outline-danger">Send Money</Button></NavLink> */}
    </div>)
}

export default AccountInfo;