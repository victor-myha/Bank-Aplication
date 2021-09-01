import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './styles/AccountsInfo.css'

const AccountInfo = (props) => {

    return (<div className='AccountsInfoWrapper'>
        <div className="infoContainer">
            <p className='infoTitle text-muted '>Balance</p>

            <div className="d-flex justify-content-between align-items-center">
                <p className='info-currency'>{props.selectedAccount.currency}{props.selectedAccount.balance}</p>
                <NavLink to='/topUp'><Button variant="outline-danger" className='topUpBtn'><img className='me-2' src={require('../img/topUpActive.svg').default} width='28px' />Top Up</Button></NavLink>
            </div>

            <p className='infoTitle text-muted '>Quick Transaction</p>

            <div className="transactionTo d-flex justify-content-between">
                <div>
                    <NavLink to='/sendMoney'><Button variant="outline-danger" className='sendMoneyBtn d-flex flex-column align-items-center'><img className='mb-3' src={require('../img/sendMoney.svg').default} width='28px' />Send <br /> Money</Button></NavLink>
                </div>
                <div>
                    <Button variant="outline-danger" className='peopleBtn d-flex flex-column align-items-center'><img className='mb-3' src={require('../img/leo.svg').default} width='70px' />Leo W.</Button>
                </div>
                <div>
                    <Button variant="outline-danger" className='peopleBtn d-flex flex-column align-items-center'><img className='mb-3' src={require('../img/monica.svg').default} width='70px' />Monica L.</Button>
                </div>
            </div>

            <div>
                <Card style={{ width: '18rem' }} className='infoCard mt-4'>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </div>

        {/* <NavLink to='/sendMoney'><Button variant="outline-danger">Send Money</Button></NavLink> */}
    </div>)
}

export default AccountInfo;