import React, { createContext, useState } from "react";
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  const login = (data)=>{
    // console.log("data",data)
    axios.post('https://reqres.in/api/login',{
      email:data.email,
      password:data.password,
    }).then((res)=>{
      setIsAuth(true)
      navigate("/")

    })
  }

  const logout = () =>{
    setIsAuth(false);
  }
  
  return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>;
};
