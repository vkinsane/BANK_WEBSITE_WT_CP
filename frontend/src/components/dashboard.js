import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Dashboard() {
  var key = 0;
  const notifyTransferSuccess = () =>
    toast.success("Money Transferred Successfully");

  // var userData = {
  //   balance: null,
  //   account_number: null,
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   pin: null,
  //   mobile_number: null,
  //   transactions: [],
  // };
  const [disp, setDisp] = useState(true);
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${Date.now()} times`;
    axios
      .get(
        `https://banking-website-backend.herokuapp.com/user/get/${localStorage.getItem(
          "account_number"
        )}`
      )
      .then((res) => {
        // console.log(res.data);
        // userData = res.data;
        // console.log(userData);
        localStorage.setItem("userData", JSON.stringify(res.data));
        setDisp(true);
      });
  });
  const [inputs, setInputs] = useState({
    sender_acc_no: localStorage.getItem("account_number"),
    receiver_acc_no: null,
    amount: null,
    sender_pin: null,
  });
  const inputsHandler = ({ target }) => {
    setInputs({ ...inputs, [target.name]: target.value });
    console.log(inputs);
  };
  const submitForm = (event) => {
    event.preventDefault();
    setDisp(false);

    if (
      inputs.sender_acc_no != null &&
      inputs.receiver_acc_no != null &&
      inputs.amount != null &&
      inputs.sender_pin != null
    ) {
      axios({
        url: "https://banking-website-backend.herokuapp.com/user/transact",
        method: "PUT",
        data: inputs,
      })
        .then((res) => {
          notifyTransferSuccess();
          console.log(res);
          setDisp(true);
        })
        .catch((res) => {
          // notifyError();
          console.log(res);
        });
    } else {
      alert("Please fill all fields!!!");
    }
  };

  return (
    <div className="">
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
      {/* ======= Navbar Section ======= */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown pr-5 py-0 ">
              <a
                className="nav-link nav-text"
                href="/dashboard#balance-section"
                role="button"
              >
                Account
              </a>
            </li>
            <li className="nav-item dropdown pr-5 py-0 ">
              <a
                className="nav-link nav-text"
                href="/dashboard#transactions-section"
                role="button"
              >
                Transactions
              </a>
            </li>
            <li className="nav-item dropdown pr-5 py-0 ">
              <a
                className="nav-link nav-text"
                href="/dashboard#fund_transfer-section"
                role="button"
              >
                Fund Transfer
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main id="main">
        {/* Dashboard Main Section */}
        <div className="container-fluid">
          <div id="balance-section" className="balance-section">
            <div
              className="row flex-column px-5 py-4 my-4 mx-auto w-75 shadow"
              style={{ borderRadius: "9px" }}
            >
              <div className="row mt-3 justify-content-between text-secondary">
                <div className="col">
                  <h5>Main account</h5>
                </div>
                <div className="col text-right">
                  <h5>Available funds</h5>
                </div>
              </div>
              <div className="row mt-3 justify-content-between">
                <div className="col">
                  {/* <h4>HPVC Bank Account account</h4> */}
                  <h4>
                    {disp &&
                      JSON.parse(localStorage.getItem("userData")).firstName +
                        " " +
                        JSON.parse(localStorage.getItem("userData")).lastName}
                  </h4>
                  <p className="text-secondary">
                    A/C No. :
                    {disp &&
                      JSON.parse(localStorage.getItem("userData"))
                        .account_number}
                  </p>
                </div>
                <div className="col text-right">
                  <h3>
                    <b>
                      ₹&nbsp;
                      {disp &&
                        JSON.parse(localStorage.getItem("userData")).balance}
                    </b>
                  </h3>
                  {/* <p onClick={checkPassword}>
                    Pin :{" "}
                    {correctPassword
                      ? JSON.parse(localStorage.getItem("userData")).pin
                      : "******"}
                  </p> */}
                  <p>
                    Pin :{" "}
                    {disp && JSON.parse(localStorage.getItem("userData")).pin}
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div>
                  <a
                    href="#fund_transfer-section"
                    className="text-decoration-none"
                  >
                    <button className="btn btn-block btn-outline-primary w-25">
                      Transfer Money
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="transactions-section" className="transactions-section my-4">
            <div
              className="row flex-column px-5 py-4 my-4 mx-auto w-75 shadow"
              style={{ borderRadius: "9px", fontSize: "15px" }}
            >
              <div className="row justify-content-between">
                <h3>Transactions</h3>
              </div>
              <div
                className="row mt-3 justify-content-between"
                style={{ fontSize: "23px", borderBottom: "1px solid black" }}
              >
                <div className="col text-left">Date</div>
                <div className="col text-center">Status</div>
                <div className="col text-right">Amount</div>
              </div>
              {disp &&
                JSON.parse(localStorage.getItem("userData"))[
                  "transactions"
                ].map((element) => {
                  var fulldate = new Date(element.date);
                  var date =
                    fulldate.getDate() +
                    "-" +
                    (fulldate.getMonth() + 1) +
                    "-" +
                    fulldate.getFullYear();
                  return (
                    <React.Fragment key={++key}>
                      <div className="row justify-content-between my-2">
                        <div className="col text-left font-weight-bold">
                          {date}
                        </div>
                        <div className="col text-center">
                          {element.credited === true ? (
                            <>
                              <div className="text-success">Credited</div>
                            </>
                          ) : (
                            <>
                              <div className="text-danger">Debited</div>
                            </>
                          )}
                        </div>
                        <div className="col text-right">₹ {element.amount}</div>
                      </div>
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
          <div id="fund_transfer-section" className="fund_transfer-section">
            <div
              className="row flex-column px-5 py-4 my-4 mx-auto w-75 shadow"
              style={{ borderRadius: "9px" }}
            >
              <div className="row justify-content-between">
                <h3>Transfer Money</h3>
              </div>
              <div className="form-section mt-3">
                <div
                  className="mx-auto p-2 rounded border border-dark"
                  style={{ width: "550px" }}
                >
                  <div className="row rounded justify-content-between">
                    <div className="ml-3 mt-1 py-2 col-5">
                      Beneficiary A/C Number
                    </div>
                    <div className="col-6 py-1">
                      <input
                        className="px-3"
                        name="receiver_acc_no"
                        type="number"
                        style={{ width: "100%" }}
                        onChange={inputsHandler}
                        required
                      />
                    </div>
                  </div>
                  <div className="row rounded justify-content-between">
                    <div className="ml-3 mt-1 py-2 col-5">Beneficiary Name</div>
                    <div className="col-6 py-1">
                      <input
                        className="px-3"
                        name="beneficiary_name"
                        type="text"
                        style={{ width: "100%" }}
                        onChange={inputsHandler}
                        required
                      />
                    </div>
                  </div>
                  <div className="row rounded justify-content-between">
                    <div className="ml-3 mt-1 py-2 col-5">Payment Amount</div>
                    <div className="col-6 py-1">
                      <input
                        className="px-3"
                        name="amount"
                        type="number"
                        style={{ width: "100%" }}
                        onChange={inputsHandler}
                        required
                      />
                    </div>
                  </div>
                  <div className="row rounded justify-content-between">
                    <div className="ml-3 mt-1 py-2 col-5">Debit Account</div>
                    <div className="col-6 py-1">
                      <input
                        className="px-3"
                        style={{ width: "100%" }}
                        placeholder="Savings Account"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row rounded justify-content-between">
                    <div className="ml-3 mt-1 py-2 col-5">Pin</div>
                    <div className="col-6 py-1">
                      <input
                        className="px-3"
                        type="password"
                        name="sender_pin"
                        style={{ width: "100%" }}
                        onChange={inputsHandler}
                        required
                      />
                    </div>
                  </div>
                  {/* </div> */}
                  {/* <div className="row"><div>Beneficiary A/C Number</div></div> */}
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <button className="btn btn-primary col-3" onClick={submitForm}>
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Links */}
        <div className="container-fluid mt-5 mb-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h2 className="heading-1 text-black text-center">
                  Other Links
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-md-4 col-lg-2 col-6">
                <div className="link-card">
                  <figure>
                    <a href="/">
                      <img
                        src="https://www.idbibank.in/assets/images/grp-com.svg"
                        alt=""
                      />
                      <figcaption>Group Companies</figcaption>
                    </a>
                  </figure>
                </div>
              </div>
              <div className="col-md-2 col-md-4 col-lg-2 col-6">
                <div className="link-card">
                  <figure>
                    <a href="/">
                      <img
                        src="https://www.idbibank.in/assets/images/careers.svg"
                        alt=""
                      />
                      <figcaption>Careers</figcaption>
                    </a>
                  </figure>
                </div>
              </div>
              <div className="col-md-2 col-md-4 col-lg-2 col-6">
                <div className="link-card">
                  <figure>
                    <a href="/">
                      <br />
                      <img
                        src="https://www.idbibank.in/assets/images/services-char.svg"
                        alt=""
                      />
                      <figcaption>Service Charges &amp; Fees</figcaption>
                    </a>
                  </figure>
                </div>
              </div>
              <div className="col-md-2 col-md-4 col-lg-2 col-6">
                <div className="link-card">
                  <figure>
                    <a href="/">
                      <img
                        src="https://www.idbibank.in/assets/images/faq.svg"
                        alt=""
                      />
                      <figcaption>FAQs</figcaption>
                    </a>
                  </figure>
                </div>
              </div>
              <div className="col-md-2 col-md-4 col-lg-2 col-6">
                <div className="link-card">
                  <figure>
                    <a href="/">
                      <img
                        src="https://www.idbibank.in/assets/images/rbi.svg"
                        alt=""
                      />
                      <figcaption>RBI Advisory</figcaption>
                    </a>
                  </figure>
                </div>
              </div>
              <div className="col-md-2 col-md-4 col-lg-2 col-6">
                <div className="link-card">
                  <figure>
                    <a href="https://apps.idbibank.in/retired-portal/login.aspx">
                      <br />
                      <img
                        src="https://www.idbibank.in/assets/images/rep.svg"
                        alt=""
                      />
                      <figcaption>Retired Employees Portal</figcaption>
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
