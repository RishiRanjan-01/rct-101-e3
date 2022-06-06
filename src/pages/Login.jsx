import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [info, setInfo] = useState();
  const [logincreds, setLogincreds] = useState({});

  const { isAuth, login, logout } = useContext(AuthContext);
  
  const handleChange = (e) =>{
    const {name, value} = e.target
    setInfo({...info,[name]:value})
  }
  // console.log(info)
  const handleSubmit = (e) =>{
    e.preventDefault();
    // setLogincreds({...info})
    login(info);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-cy="login-email" name='email' placeholder="Enter Email" onChange={handleChange} />
        <br/>
        <br/>
        <input data-cy="login-password" name='password' placeholder="Enter password" onChange={handleChange} />
        <br/>
        <br/>
        <button data-cy="login-submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
