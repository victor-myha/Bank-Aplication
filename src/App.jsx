import React from 'react';
import Accounts from './components/Accounts';
import AccountInfo from './components/AccountInfo';
import Navbar from './components/Navbar';
import { Redirect, Route } from 'react-router-dom';
import SendMoney from './components/SendMoney';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/App.css';

const  App = () => {
  return (
    <div>
      <div className="figureCircle"/>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>

     <Route exact path="/home" render={(routeProps) => {
        return (
          <div className="appLayout">
            <div className="navbarLayout">
              <Navbar />
            </div>
            <div className="accountsLayout">
              <Accounts />
            </div>
            <div className="AccountInfoLayout">
              {/* <AccountInfo /> */}
            </div>
          </div>
        )
      }}/>

      <Route path="/sendMoney" render={(routeProps) => {
        return (
          <div className="appLayout">
            <div className="navbarLayout">
              <Navbar />
            </div>
            <SendMoney/>
          </div>
        )
      }}/>
      
    </div>
  );
}

export default App;
