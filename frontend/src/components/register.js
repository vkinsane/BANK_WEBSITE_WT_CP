import React, { useState } from "react";
import "../assets/fonts/material-icon/css/material-design-iconic-font.min.css";
import signup from "../assets/img/signup-image.jpg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Register() {
  const notifySuccess = () => toast.success("Registered Successfully");
  const notifyError = () => toast.error("Error Occured!!!");
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile_number: "",
  });
  const inputsHandler = ({ target }) => {
    setInputs({ ...inputs, [target.name]: target.value });
    console.log(inputs);
  };

  const submitForm = (event) => {
    event.preventDefault();
    axios({
      url: "https://banking-website-backend.herokuapp.com/user/adduser",
      method: "POST",
      data: inputs,
    })
      .then((res) => {
        console.log(res);
        notifySuccess();
        localStorage.setItem("userIn", true);
        localStorage.setItem("account_number", res.data.account_number);
        localStorage.setItem("userData", JSON.stringify(res.data));
        setTimeout(() => {
          window.location.href = window.location.origin + "/dashboard";
        }, 1000);
      })
      .catch((res) => {
        notifyError();
        console.log(res);
      });
  };

  return (
    <div>
      {/* <!-- Sign up form --> */}
      <div className="modal" style={{ height: "100vh" }}>
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
        <section className="signup">
          <div className="container1">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title heading">Register</h2>
                <form className="register-form" id="register-form">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      onChange={inputsHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      onChange={inputsHandler}
                      required
                    />
                  </div>
                  <div className="form-group dropdown">
                    <label htmlFor="email">
                      <i className="bi bi-envelope-fill"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      onChange={inputsHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass">
                      <i className="zmdi zmdi-phone"></i>
                    </label>
                    <input
                      type="number"
                      name="mobile_number"
                      id="mobile_number"
                      placeholder="mobile Number"
                      onChange={inputsHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={inputsHandler}
                      required
                    />
                  </div>

                  {/* <div className="form-group">
                    <input
                      type="checkbox"
                      name="agree-term"
                      id="agree-term"
                      className="agree-term"
                    />
                    <label htmlFor="agree-term" className="label-agree-term">
                      <span>
                        <span></span>
                      </span>
                      I agree all statements in
                      <a href="/#" className="term-service">
                        Terms of service
                      </a>
                    </label>
                  </div> */}
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                      onClick={submitForm}
                      value="Register"
                    />
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                  <img src={signup} alt="" />
                </figure>
                <a href="#signin" className="signup-image-link">
                  I am already a member
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Register;
