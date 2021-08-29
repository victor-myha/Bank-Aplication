import './components/styles/App.css';
import Accounts from './components/Accounts';
import AccountInfo from './components/AccountInfo';
import Navbar from './components/Navbar';
import { Redirect, Route } from 'react-router-dom';
import SendMoney from './components/SendMoney';

const  App = () => {
  return (
    <div>
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
