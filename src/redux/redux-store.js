import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
import AccountsReducer from './AccountsReducer';

let reducers = combineReducers({
    AccountsReducer: AccountsReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;


export default store;

