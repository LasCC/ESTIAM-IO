import React, { createContext, useState } from "react";
import jwtdecode from "jwt-decode";
import http from "../services/httpService";
import { withRouter } from "react-router-dom";

export const LoginContext = createContext();

const LoginProvider = props => {
  const [loginState, setLoginState] = useState({
    name: "Michel",
    lastname: "Platini",
    email: "",
    numero_dossier: "",
    token: "",
    isLogged: false,
    loginError: false,
    login_server_error: false
  });
  const handleLogin = async data => {
    console.log("login request ....", data);
    if (data.email === "admin" && data.password === "admin") {
      setLoginState({
        name: "Michel",
        lastname: "Platini",
        email: "",
        numero_dossier: "",
        token: "",
        isLogged: true,
        loginError: false
      });
      return props.history.push("/dashboard");
    } else {
      console.log("login failed bad credentials");
      setLoginState({
        name: "Michel",
        lastname: "Platini",
        email: "",
        numero_dossier: "",
        token: "",
        isLogged: false,
        loginError: true
      });
    }
    // Test LOGIN
    /* http
       .post("http://localhost:8080/auth/login", data)
      .then(res => {
        const token = res.data.token
        try{
          const tokendata = jwtdecode(token) 
        }catch(ex){
          console.log(ex)
          throw ex
        }
        localStorage.seItem("token", token); 
        setLoginState({name : tokendata.name,lastname : tokendata.lastname,email : tokendata.email,numero_dossier : tokendata.candidatureID,isLogged : true, loginError : false})
        if(tokendata.firstlogged) props.history.push("/renseignement");
        return props.history.push("/dashboard");
       })
       
    */
  };

  const checkAuth = () => {
    console.log("checking...");

    const token = localStorage.getItem("token");
    // in prod
    // if (!token || !loginState.isLogged) {
    //   return false
    // }

    return loginState.isLogged;

    // try {
    //   const { exp } = jwtdecode(token);

    //   const now = new Date().getTime() / 1000;
    //   const dateExp = new Date(exp * 1000);
    //   const dateNow = new Date(now * 1000);

    //   const dayRelativeDifference =
    //     dateExp.getHours() * 60 +
    //     dateExp.getMinutes() -
    //     dateNow.getHours() * 60 -
    //     dateNow.getMinutes();
    //   console.log("isexp", exp < now, dayRelativeDifference, "mn");
    //   if (exp < now) {
    //     console.log("expired !");
    //     return false;
    //   }
    // } catch (e) {
    //   console.log(e);
    //   return false;
    // }
    // setLoginState({...loginState,isLogged : true})

    // return true;
  };
  const handleLogout = () => {
    console.log("logged out .....");
    localStorage.removeItem("token");
    setLoginState({
      name: "",
      lastname: "",
      email: "",
      numero_dossier: "",
      token: "",
      isLogged: false,
      loginError: false
    });
    window.location.replace("/");
  };
  return (
    <LoginContext.Provider
      value={{
        loginState,
        handleLogin,
        checkAuth,
        handleLogout
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default withRouter(LoginProvider);
/*
 --> JWT shoould have : 
  name , lastname , dossier_number , step   


*/
