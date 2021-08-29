import { getAccounts } from "../api/api";

let initialState = {
  accounts: [
    {
      title: 'Euro (EUR)',
      currency: 'eur',
      balance: 133.2
    }
  ]
}
const AccountsReducer = (state = initialState,action) => {

  switch (action.type) {
    case 'GET-ACCOUNTS': {
      return {...state, accounts: action.accountsData}
  }

  default:
    return state;
  }
}

//AC
const getAccountsAC = (accountsData) => ({type: 'GET-ACCOUNTS', accountsData})

//Thunks
export const getAccountsTC = () => {
  return async (dispatch) => {
    let accountsData = await getAccounts();
    console.log('Reducer', accountsData);
    
    dispatch(getAccountsAC(accountsData))
  }
}

export default AccountsReducer;