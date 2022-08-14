import client from './client';

const register = async (token) =>{
    return client.post('/expoPushTokens', {token})
}

const expoPushTokens = {
    register,
};
export default expoPushTokens;
