import React from 'react';
import Accounts from './components/Accounts';
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

      <Route path="/topUp" render={(routeProps) => {
        return (
          <div className="appLayout">
            <div className="navbarLayout">
              <Navbar />
            </div>
            <div>
                Top Up Page
            </div>
          </div>
        )
      }}/>

      <Route path="/accounts" render={(routeProps) => {
        return (
          <div className="appLayout">
            <div className="navbarLayout">
              <Navbar />
            </div>
              <div>
                  Accounts
              </div>
          </div>
        )
      }}/>
      
    </div>
  );
}

export default App;
