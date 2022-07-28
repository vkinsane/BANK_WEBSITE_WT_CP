import React, { useState } from "react";
import logo from "../assets/img/logo1.png";
import Login from "./login";
import Register from "./register";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header(props) {
  const notifyLogout = () => toast.info("Logged Out Successfully");

  const [login, setLogin] = useState(false);
  const [reg, setReg] = useState(false);
  var authBtnDisplay = !localStorage.getItem("userIn");
  const logoutHandler = () => {
    notifyLogout();
    localStorage.removeItem("userIn");
    localStorage.removeItem("userData");
    localStorage.removeItem("account_number");
    setTimeout(() => {
      window.location.href = window.location.origin;
    }, 1000);
  };
  return (
    <>
      {/* Header */}
      {(login || reg) && (
        <div
          style={{ position: "absolute", zIndex: 10 }}
          className="h-100 w-25"
          onClick={() => {
            setLogin(false);
            setReg(false);
          }}
        ></div>
      )}
      {(login || reg) && (
        <div
          style={{ position: "absolute", right: 0, zIndex: 10 }}
          className="h-100 w-25"
          onClick={() => {
            setLogin(false);
            setReg(false);
          }}
        ></div>
      )}
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
      <header id="header" className="d-flex align-items-center py-3">
        <div className="container d-flex align-items-center justify-content-between ">
          <img className="logo" src={logo} alt="logo" />
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html"><img alt="" src="assets/img/logo.png" alt="" className="img-fluid"></a>*/}

          <nav id="navbar" className="navbar navbar-expand-lg navbar">
            <ul>
              <li>
                <a className="nav-link scrollto" href="/">
                  <b>Personal</b>
                </a>
              </li>
              {/* <li>
                <a className="nav-link scrollto" href="/corporate">
                  <b>Corporate</b>
                </a>
              </li> */}
              {/* <li>
                <a className="nav-link scrollto" href="/agri">
                  <b>AGRI</b>
                </a>
              </li> */}
              <li>
                <a className="nav-link scrollto" href="#contact">
                  <b>Contact</b>
                </a>
              </li>
              {authBtnDisplay && (
                <>
                  <li>
                    <a
                      className="nav-link scrollto"
                      href="#login"
                      onClick={() => {
                        setLogin(true);
                      }}
                    >
                      <b>Login</b>
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link scrollto"
                      href="#register"
                      onClick={() => {
                        setReg(true);
                      }}
                    >
                      <b>Register</b>
                    </a>
                  </li>
                </>
              )}{" "}
              {!authBtnDisplay && (
                <>
                  <li>
                    <a className="nav-link scrollto" href="/dashboard">
                      <b>Dashboard</b>
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link scrollto"
                      href="#login"
                      onClick={logoutHandler}
                    >
                      <button className="btn btn-outline-dark py-1">
                        Logout
                        <i
                          className="bi bi-box-arrow-right h-100"
                          style={{ fontSize: "unset" }}
                        ></i>
                      </button>
                    </a>
                  </li>
                </>
              )}
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </header>

      {login && <Login />}

      {reg && <Register />}
    </>
  );
}

export default Header;
