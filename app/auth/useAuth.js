import { useContext } from "react";
import JWT from 'expo-jwt';
 

import AuthContext from "./context";
import authStorage from "./storage";

const useAuth = () => {
   const {user, setUser} = useContext(AuthContext);
   const login = (authToken) => {
    setUser(JWT.decode(authToken, 'jwtPrivateKey'));
    authStorage.storeToken(authToken);
   }
   const logOut = () => {
    setUser(null);
    authStorage.removeToken();
   }
   return {login, logOut, user,};
}

export default useAuth;