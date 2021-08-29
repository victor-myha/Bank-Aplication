import * as axios from 'axios';

const instance = axios.create({
    headers: {
        "x-api-key": " ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59"
    }
});

export const getAccounts = () => {
    return instance.get(`https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data`)
    .then(response =>{
        return response.data.body.accounts ;
    });
    }
