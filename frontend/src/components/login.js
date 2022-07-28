import React, { useState } from "react";
import "../assets/css/form_style.css";
import "../assets/fonts/material-icon/css/material-design-iconic-font.min.css";
import login_img from "../assets/img/signin-image.jpg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Login() {
  const notifySuccess = () => toast.success("Logged In Successfully");
  const notifyError = () => toast.error("Error Occured!!!");

  const [inputs, setInputs] = useState({
    account_number: "",
    password: "",
  });

  const inputsHandler = ({ target }) => {
    setInputs({ ...inputs, [target.name]: target.value });
    console.log(inputs);
  };

  const submitForm = (event) => {
    event.preventDefault();
    axios({
      url: "https://banking-website-backend.herokuapp.com/user/login",
      method: "POST",
      data: inputs,
    })
      .then((res) => {
        console.log(res);
        notifySuccess();
        localStorage.setItem("userIn", true);
        localStorage.setItem("account_number", inputs.account_number);
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
      {/* <!-- Sing in  Form --> */}
      <div className="modal" style={{ height: "110vh" }}>
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
        <section className="sign-in" id="signin">
          <div className="container1">
            <div className="signin-content">
              <div className="signin-image">
                <figure>
                  <img src={login_img} alt="" />
                </figure>
                <a href="/" className="signup-image-link">
                  Create an account
                </a>
              </div>

              <div className="signin-form">
                <h2 className="form-title heading">Sign In</h2>
                <form method="POST" className="register-form" id="login-form">
                  <div className="form-group">
                    <label htmlFor="your_name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="number"
                      name="account_number"
                      id="account_number"
                      placeholder="Account Number"
                      onChange={inputsHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="your_pass">
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
                      name="remember-me"
                      id="remember-me"
                      className="agree-term"
                    />
                    <label htmlFor="remember-me" className="label-agree-term">
                      <span>
                        <span></span>
                      </span>
                      Remember me
                    </label>
                  </div> */}
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      onClick={submitForm}
                      value="Log in"
                    />
                  </div>
                </form>
                <div className="social-login">
                  <span className="social-label">Or login with</span>
                  <ul className="socials">
                    <li>
                      <a href="/">
                        <i className="display-flex-center zmdi zmdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="display-flex-center zmdi zmdi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="display-flex-center zmdi zmdi-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
