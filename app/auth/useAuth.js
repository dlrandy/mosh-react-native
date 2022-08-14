import { useContext } from "react";
import jwtDecode from 'jwt-decode';
 

import AuthContext from "./context";
import authStorage from "./storage";

const useAuth = () => {
   const {user, setUser} = useContext(AuthContext);
   const login = async(authToken) => {
    setUser(jwtDecode(authToken));
    await authStorage.storeToken(authToken);
   }
   const logOut = async() => {
    setUser(null);
    await authStorage.removeToken();
   }
   return {login, logOut, user,};
}

export default useAuth;