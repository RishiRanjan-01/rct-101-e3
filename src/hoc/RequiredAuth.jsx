import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {

  // const navigate = useNavigate();

  const {isAuth } = useContext(AuthContext);
    

  if(isAuth){
    return children;
  }else{
    // <Navigate to='/login'/>
   return <Navigate to='/login'/>
  }
  
};

export default RequiredAuth;
