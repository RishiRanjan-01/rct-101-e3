import React, { useContext } from "react";
import styles from './Navbar.module.css'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {

  const { isAuth, login, logout } = useContext(AuthContext);

  const {len} = useContext(CartContext)


  const  navigate = useNavigate();

  const handleLogin = ()=>{
    if(isAuth){
     logout();
    }else{
      navigate("/login")
    }
    
  }
  return (
    <div data-cy="navbar" className={styles.navbar}>
      <Link data-cy="navbar-home-link" to='/'>Home</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}{`Cart : ${len}`}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleLogin}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
