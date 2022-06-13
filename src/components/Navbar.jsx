import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutapi } from "../Store/Auth/auth.actions";

const Navbar = () => {
  const isAuthenticated = true;
  const dispatch =  useDispatch()
  const {isauth} =  useSelector((state)=>state.auth)
  // const navigate = useNavigate();
  const handleLoginClick = () => {
    dispatch(logoutapi())
   
    // // login screen
    // if (isAuthenticated) {
    //   navigate("/login");
    //   // he wants to logout
    // } else {
    //   // he wants to login
    //   navigate("/login");
    // }
  };
  return (
    <div
      data-cy="navbar"
      style={{
        padding: "10px",
        display: "flex",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link data-cy="navbar-home-link" to="/">
          Logo
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
          {isauth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
