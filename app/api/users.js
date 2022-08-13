import client from './client';

const register = userInfo => client.post('/users', userInfo);

const usersApi = {register}; 
export default usersApi;
