import React from "react";
import banner1 from "../assets/img/Banner-1.jpg";
import banner2 from "../assets/img/Banner-2.jpg";
import banner3 from "../assets/img/digital-bank.jpg";
import dropdownbox_accounts from "../assets/img/dropdownbox/accounts.png";
import dropdownbox_cards from "../assets/img/dropdownbox/cards.png";
import dropdownbox_loans from "../assets/img/dropdownbox/loans.jpg";
import dropdownbox_investment from "../assets/img/dropdownbox/insurance.png";
import dropdownbox_services from "../assets/img/dropdownbox/services.png";
import dropdownbox_offers from "../assets/img/dropdownbox/offers.png";
import banner5 from "../assets/img/Banner-3.png";
import homeloan from "../assets/img/homeloan.png";
import interest from "../assets/img/interest.png";
import goldloans from "../assets/img/tax.png";
import savings from "../assets/img/salary.png";

function Personal() {
  return (
    <div className="Home">
      {/* ======= Hero Section ======= */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown pr-5 py-0 ">
              <a
                className="nav-link dropdown-toggle nav-text"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                Accounts
              </a>
              <div
                className="mx-auto dropdown-menu dropdownbox"
                aria-labelledby="navbarDropdown"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="container py-5">
                        <table style={{ color: "white" }}>
                          <tbody>
                            <tr>
                              <td>Saving Account</td>
                            </tr>
                            <tr>
                              <td>Salary Account</td>
                            </tr>
                            <tr>
                              <td>Kutumb Family Banking</td>
                            </tr>
                            <tr>
                              <td>Flexi Current Account</td>
                            </tr>
                            <tr>
                              <td>Fixed Deposit Account</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="col-md-6 text-center">
                      <a href="/#">
                        <img
                          alt=""
                          src={dropdownbox_accounts}
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    {/* /.col-md-4  */}
                  </div>
                </div>
                {/*  /.container  */}
              </div>
            </li>
            <li className="nav-item dropdown pr-5 py-0">
              <a
                className="nav-link dropdown-toggle nav-text"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                Cards
              </a>
              <div
                className="mx-auto dropdown-menu dropdownbox"
                aria-labelledby="navbarDropdown"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="container py-5">
                        <table style={{ color: "white" }}>
                          <tbody>
                            <tr>
                              <td>Saving Account</td>
                            </tr>
                            <tr>
                              <td>Salary Account</td>
                            </tr>
                            <tr>
                              <td>Kutumb Family Banking</td>
                            </tr>
                            <tr>
                              <td>Flexi Current Account</td>
                            </tr>
                            <tr>
                              <td>Fixed Deposit Account</td>
                            </tr>

                            <tr>
                              <td>Credit Cards</td>
                            </tr>
                            <tr>
                              <td>Debit Cards</td>
                            </tr>
                            <tr>
                              <td>Prepaid Cards</td>
                            </tr>
                            <tr>
                              <td>Cash at POS Facility</td>
                            </tr>
                            <tr>
                              <td>Debit Card Green PIN Generation</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="col-md-6 text-center">
                      <a href="/#">
                        <img
                          alt=""
                          src={dropdownbox_cards}
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    {/* /.col-md-4  */}
                  </div>
                </div>
                {/*  /.container  */}
              </div>
            </li>
            <li className="nav-item dropdown pr-5 py-0">
              <a
                className="nav-link dropdown-toggle nav-text"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                Loans
              </a>
              <div
                className="mx-auto dropdown-menu dropdownbox"
                aria-labelledby="navbarDropdown"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="container py-5">
                        <table style={{ color: "white" }}>
                          <tbody>
                            <tr>
                              <td>Saving Account</td>
                            </tr>
                            <tr>
                              <td>Salary Account</td>
                            </tr>
                            <tr>
                              <td>Kutumb Family Banking</td>
                            </tr>
                            <tr>
                              <td>Flexi Current Account</td>
                            </tr>
                            <tr>
                              <td>Fixed Deposit Account</td>
                            </tr>

                            <tr>
                              <td>Home Loan</td>
                            </tr>
                            <tr>
                              <td>Auto Loan</td>
                            </tr>
                            <tr>
                              <td>Education Loan</td>
                            </tr>
                            <tr>
                              <td>Personal Loan</td>
                            </tr>
                            <tr>
                              <td>Loan Against Property and its variants</td>
                            </tr>
                            <tr>
                              <td>Loan Against Securities</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="col-md-6 text-center">
                      <a href="/#">
                        <img
                          alt=""
                          src={dropdownbox_loans}
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    {/* /.col-md-4  */}
                  </div>
                </div>
                {/*  /.container  */}
              </div>
            </li>

            <li className="nav-item dropdown pr-5 py-0">
              <a
                className="nav-link dropdown-toggle nav-text"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                Investment
              </a>
              <div
                className="mx-auto dropdown-menu dropdownbox"
                aria-labelledby="navbarDropdown"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="container py-5">
                        <table style={{ color: "white" }}>
                          <tbody>
                            <tr>
                              <td>Saving Account</td>
                            </tr>
                            <tr>
                              <td>Salary Account</td>
                            </tr>
                            <tr>
                              <td>Kutumb Family Banking</td>
                            </tr>
                            <tr>
                              <td>Flexi Current Account</td>
                            </tr>
                            <tr>
                              <td>Fixed Deposit Account</td>
                            </tr>

                            <tr>
                              <td>Advisory</td>
                            </tr>
                            <tr>
                              <td>Capital Market</td>
                            </tr>
                            <tr>
                              <td>Capital Gain Account Scheme</td>
                            </tr>
                            <tr>
                              <td>Pradhanmantri Social Security Scheme</td>
                            </tr>
                            <tr>
                              <td>Public Provident Fund</td>
                            </tr>
                            <tr>
                              <td>HPVC Samridhi Portal</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="col-md-6 text-center">
                      <a href="/#">
                        <img
                          alt=""
                          src={dropdownbox_investment}
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    {/* /.col-md-4  */}
                  </div>
                </div>
                {/*  /.container  */}
              </div>
            </li>

            <li className="nav-item dropdown pr-5 py-0">
              <a
                className="nav-link dropdown-toggle nav-text"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                Services
              </a>
              <div
                className="mx-auto dropdown-menu dropdownbox"
                aria-labelledby="navbarDropdown"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="container py-5">
                        <table style={{ color: "white" }}>
                          <tbody>
                            <tr>
                              <td>Saving Account</td>
                            </tr>
                            <tr>
                              <td>Salary Account</td>
                            </tr>
                            <tr>
                              <td>Kutumb Family Banking</td>
                            </tr>
                            <tr>
                              <td>Flexi Current Account</td>
                            </tr>
                            <tr>
                              <td>Fixed Deposit Account</td>
                            </tr>

                            <tr>
                              <td>Phone Banking</td>
                            </tr>
                            <tr>
                              <td>Mobile Banking</td>
                            </tr>
                            <tr>
                              <td>Internet Banking</td>
                            </tr>
                            <tr>
                              <td>Account Alerts</td>
                            </tr>
                            <tr>
                              <td>PayMate</td>
                            </tr>
                            <tr>
                              <td>Abhay - Card Control App</td>
                            </tr>
                            <tr>
                              <td>Toll Free (Missed Call) Banking</td>
                            </tr>
                            <tr>
                              <td>Positive Pay System</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="col-md-6 text-center">
                      <a href="/#">
                        <img
                          alt=""
                          src={dropdownbox_services}
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    {/* /.col-md-4  */}
                  </div>
                </div>
                {/*  /.container  */}
              </div>
            </li>

            <li className="nav-item dropdown pr-5 py-0">
              <a
                className="nav-link dropdown-toggle nav-text"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                Offers
              </a>
              <div
                className="mx-auto dropdown-menu dropdownbox"
                aria-labelledby="navbarDropdown"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="container py-5">
                        <table style={{ color: "white" }}>
                          <tbody>
                            <tr>
                              <td>Saving Account</td>
                            </tr>
                            <tr>
                              <td>Salary Account</td>
                            </tr>
                            <tr>
                              <td>Kutumb Family Banking</td>
                            </tr>
                            <tr>
                              <td>Flexi Current Account</td>
                            </tr>
                            <tr>
                              <td>Fixed Deposit Account</td>
                            </tr>

                            <tr>
                              <td>Credit Card Offers</td>
                            </tr>
                            <tr>
                              <td>Debit Card Offers</td>
                            </tr>
                            <tr>
                              <td>Prepaid Card Offers</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="col-md-6 text-center">
                      <a href="/#">
                        <img
                          alt=""
                          src={dropdownbox_offers}
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    {/* /.col-md-4  */}
                  </div>
                </div>
                {/*  /.container  */}
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <section id="hero" className="d-flex align-items-center py-0 my-0">
        <div
          id="carouselExampleIndicators"
          className="carousel slide h-100"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item h-100 active">
              <img
                className="d-block w-100 display-image "
                src={banner5}
                alt="First slide"
              />
              <div className="carousel-caption py-0 d-md-block ">
                {/* <h5 className="">Experience the Extraordinary</h5> */}
              </div>
            </div>
            <div className="carousel-item h-100">
              <img
                className="d-block w-100 display-image "
                src={banner2}
                alt="Second slide"
              />
              <div className="carousel-caption py-0 d-none d-md-block ">
                {/* <h5 className="">Second</h5> */}
              </div>
            </div>
            <div className="carousel-item h-100">
              <img
                className="d-block w-100 display-image "
                src={banner1}
                alt="Third slide"
              />
              <div className="carousel-caption py-0 d-none d-md-block">
                {/* <h5 className="">Third</h5> */}
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </a>
        </div>
      </section>
      {/* End Hero */}

      <main id="main">
        {/* ======= Clients Section ======= */}
        <section className="clients mt-5">
          <div className="row">
            <div className="col-lg-3">
              <h2>What's New &nbsp; &nbsp; &nbsp; &nbsp;|</h2>
            </div>
            <div className="col-lg-9 my-auto overflow-hidden">
              {/* <marquee behavior="" direction=""> */}
              <div className="marquee-box">
                Engagement of Legal Advisor for Strategic disinvestment and
                transfer of management control in HPVC Bank Limited &nbsp;
                &nbsp; &nbsp; &nbsp; Engagement of Transaction Advisor for
                Strategic Disinvestment and transfer of management control in
                HPVC Bank Limited &nbsp; &nbsp; &nbsp; &nbsp; Urgent attention
                members of HPVC Bank - Transfer of shares to Investor Education
                &amp; Protection Fund Authority (IEPFA) &nbsp; &nbsp; &nbsp;
                &nbsp; Draft Scheme for setting off accumulated losses of the
                Bank against Securities Premium Account and other documents
                &nbsp; &nbsp; &nbsp; &nbsp;
              </div>
              {/* </marquee> */}
            </div>
          </div>
        </section>
        {/* End Clients Section */}

        {/* ======= Services Section ======= */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Services</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 service-card">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="icon">
                    <img
                      alt=""
                      src={savings}
                      style={{ height: "100%", width: "auto" }}
                    />
                  </div>
                  <h4 className="title">
                    <a href="/#">Savings Account</a>
                  </h4>
                  <ul className="description">
                    <li>Features & Benefits</li>
                    <li>FAQs</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-light mt-3 border border-primary mx-auto"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 service-card">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="icon">
                    <img
                      alt=""
                      src={homeloan}
                      style={{ height: "100%", width: "auto" }}
                    />
                  </div>
                  <h4 className="title">
                    <a href="/#">Home Loan</a>
                  </h4>
                  <ul className="description">
                    <li>Features & Benefits</li>
                    <li>EMI Calculator</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-light mt-3 border border-primary"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 service-card">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="icon">
                    <img
                      alt=""
                      src={interest}
                      style={{ height: "100%", width: "auto" }}
                    />
                  </div>
                  <h4 className="title">
                    <a href="/#">Interest Rates</a>
                  </h4>
                  <ul className="description">
                    <li>Features & Benefits</li>
                    <li>Service Charges</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-light mt-3 border border-primary"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 service-card">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="icon">
                    <img
                      alt=""
                      src={goldloans}
                      style={{ height: "100%", width: "auto" }}
                    />
                  </div>
                  <h4 className="title">
                    <a href="/#">Gold Loan</a>
                  </h4>
                  <ul className="description">
                    <li>Features & Benefits</li>
                    <li>Charges & Rates</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-light mt-3 border border-primary"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Services Section */}

        {/* ======= Digital Banking Services Section ======= */}
        <section id="counts" className="counts">
          <div className="section-title" data-aos="fade-up">
            <h2>Digital banking Services</h2>
          </div>

          <div className="row dbs-className" data-aos="fade-up">
            <div className="d-flex flex-row">
              <div className="col-6 my-auto">
                <div className="  w-75 mx-auto">
                  <div>
                    <div>
                      <div className="row justify-content-between">
                        <div className="minicards p-2 text-center d-flex shadow mx-2">
                          <div className="my-auto">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="29.098"
                                height="29.774"
                                viewBox="0 0 29.098 29.774"
                              >
                                <defs>
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "\n                    .netbank {\n                      fill: #00836c;\n                    }\n                  ",
                                    }}
                                  />
                                </defs>
                                <g transform="translate(-7 -6)">
                                  <g transform="translate(7 6)">
                                    <path
                                      className="netbank"
                                      d="M9.368,6A2.378,2.378,0,0,0,7,8.368V23.256a2.378,2.378,0,0,0,2.368,2.368h8.353l-1.829,3.035a.677.677,0,0,0,.582,1.026h10.15a.677.677,0,0,0,.582-1.026l-1.829-3.035h8.353A2.378,2.378,0,0,0,36.1,23.256a.677.677,0,1,0-1.353,0,1,1,0,0,1-1.015,1.015H9.368a1,1,0,0,1-1.015-1.015V8.368A1,1,0,0,1,9.368,7.353H33.729a1,1,0,0,1,1.015,1.015v12.18a.677.677,0,1,0,1.353,0V8.368A2.378,2.378,0,0,0,33.729,6ZM21.475,8.358a.677.677,0,0,0-.6.687v1.438A3.033,3.033,0,0,0,18.5,13.444a2.591,2.591,0,0,0,1.015,2.072,8,8,0,0,0,1.755.909,8.153,8.153,0,0,1,1.48.74,1.065,1.065,0,0,1,.486,1.015,1.626,1.626,0,0,1-1.692,1.692,1.7,1.7,0,0,1-1.713-1.195.678.678,0,1,0-1.311.349,3,3,0,0,0,2.347,2.136v1.417a.677.677,0,1,0,1.353,0V21.162a3.054,3.054,0,0,0,2.368-2.982A2.613,2.613,0,0,0,23.579,16.1a8,8,0,0,0-1.755-.909,8.153,8.153,0,0,1-1.48-.74,1.048,1.048,0,0,1-.486-1,1.626,1.626,0,0,1,1.692-1.692,1.688,1.688,0,0,1,1.713,1.184.678.678,0,1,0,1.311-.349,2.976,2.976,0,0,0-2.347-2.115V9.045a.677.677,0,0,0-.751-.687ZM19.307,25.624H23.79l1.639,2.707H17.668Zm-7.972,5.414a.677.677,0,0,0-.539.37L9.1,34.791a.677.677,0,0,0,.6.983H33.391a.677.677,0,0,0,.6-.983L32.3,31.408a.677.677,0,0,0-.6-.37H11.335Zm.476,1.353H31.287l1.015,2.03H10.8Z"
                                      transform="translate(-7 -6)"
                                    />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div>Internet Banking</div>
                          </div>
                        </div>
                        <div className="minicards p-2 text-center d-flex shadow mx-2">
                          <div className="my-auto">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30.986"
                                height="31.152"
                                viewBox="0 0 30.986 31.152"
                              >
                                <defs>
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "\n                    .whatsapp {\n                      fill: #00836c;\n                      stroke: #fff;\n                    }\n                  ",
                                    }}
                                  />
                                </defs>
                                <g transform="translate(0.712 0.676)">
                                  <path
                                    className="whatsapp"
                                    d="M20.281,16.221l-.011.093c-2.728-1.36-3.013-1.541-3.366-1.012-.244.366-.956,1.2-1.171,1.442s-.433.261-.8.093a10.069,10.069,0,0,1-2.981-1.842,11.255,11.255,0,0,1-2.059-2.568c-.363-.628.4-.717,1.089-2.027a.682.682,0,0,0-.031-.65c-.093-.186-.834-2.01-1.144-2.737s-.6-.633-.834-.633a1.846,1.846,0,0,0-1.7.427c-2,2.2-1.5,4.471.216,6.885,3.367,4.407,5.161,5.218,8.441,6.344a5.133,5.133,0,0,0,2.332.15,3.818,3.818,0,0,0,2.5-1.769,3.071,3.071,0,0,0,.223-1.768c-.092-.167-.335-.261-.707-.428Z"
                                    transform="translate(1.438 1.528)"
                                  />
                                  <path
                                    className="whatsapp"
                                    d="M25.457,4.279C15.918-4.942.132,1.746.125,14.754A14.683,14.683,0,0,0,2.1,22.129L0,29.774l7.859-2.049A14.85,14.85,0,0,0,29.774,14.762,14.632,14.632,0,0,0,25.438,4.327ZM27.3,14.721A12.352,12.352,0,0,1,8.672,25.271l-.447-.265-4.652,1.21L4.82,21.693l-.3-.465A12.3,12.3,0,0,1,23.686,6.049,12.143,12.143,0,0,1,27.3,14.721Z"
                                    transform="translate(0 0)"
                                  />
                                </g>
                              </svg>
                            </div>
                            <div>Mobile Banking</div>
                          </div>
                        </div>
                        <div className="minicards p-2 text-center d-flex shadow mx-2">
                          <div className="my-auto">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17.658"
                                height="30.274"
                                viewBox="0 0 17.658 30.274"
                              >
                                <defs>
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "\n                    .mobile {\n                      fill: none;\n                      stroke: #00836c;\n                      stroke-width: 1px;\n                    }\n                  ",
                                    }}
                                  />
                                </defs>
                                <g transform="translate(-14.75 -2.25)">
                                  <path
                                    className="mobile"
                                    d="M30.644,2.5H16.514A1.514,1.514,0,0,0,15,4.014V30.76a1.514,1.514,0,0,0,1.514,1.514h14.13a1.514,1.514,0,0,0,1.514-1.514V4.014A1.514,1.514,0,0,0,30.644,2.5Zm.5,28.26a.5.5,0,0,1-.5.5H16.514a.5.5,0,0,1-.5-.5V4.014a.5.5,0,0,1,.5-.5h14.13a.5.5,0,0,1,.5.5Z"
                                  />
                                  <path
                                    className="mobile"
                                    d="M31.551,7.5H26.5a.5.5,0,0,0,0,1.009h5.047a.5.5,0,1,0,0-1.009Z"
                                    transform="translate(-5.449 -2.477)"
                                  />
                                  <path
                                    className="mobile"
                                    d="M30.514,50.5a1.514,1.514,0,1,0,1.514,1.514A1.514,1.514,0,0,0,30.514,50.5Zm0,2.019a.5.5,0,1,1,.5-.5A.5.5,0,0,1,30.514,52.519Z"
                                    transform="translate(-6.935 -23.777)"
                                  />
                                </g>
                              </svg>
                            </div>
                            <div>Whatsapp Banking</div>
                          </div>
                        </div>
                        <div className="minicards p-2 text-center d-flex shadow mx-2">
                          <div className="my-auto">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="31.447"
                                height="29.774"
                                viewBox="0 0 31.447 29.774"
                              >
                                <defs>
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "\n                    .video {\n                      fill: #00836c;\n                    }\n                  ",
                                    }}
                                  />
                                </defs>
                                <g transform="translate(-1.775 -2.837)">
                                  <g transform="translate(2.025 3.087)">
                                    <path
                                      className="clock"
                                      d="M17.421,21.3a1.153,1.153,0,0,1-1.153,1.153H3.178a1.153,1.153,0,0,1,0-2.306h13.09A1.153,1.153,0,0,1,17.421,21.3Zm-1.153,3.459H6.637a1.153,1.153,0,1,0,0,2.306h9.631a1.153,1.153,0,1,0,0-2.306Zm0,4.612H10.1a1.153,1.153,0,0,0,0,2.306h6.172a1.153,1.153,0,0,0,0-2.306Zm6.111-8.378,4.637-4.632a1.153,1.153,0,1,0-1.63-1.63l-4.635,4.628a1.153,1.153,0,1,0,1.63,1.63Zm.338-13.449V5.393h1.091a1.153,1.153,0,1,0,0-2.306H19.322a1.153,1.153,0,0,0,0,2.306h1.091V7.542A12.642,12.642,0,0,0,13.2,10.625L11.681,9.11a1.154,1.154,0,1,0-1.633,1.63L11.612,12.3a12.7,12.7,0,0,0-2.143,4.036,1.153,1.153,0,0,0,2.2.692,10.339,10.339,0,0,1,9.889-7.241h.018a10.383,10.383,0,1,1-.007,20.766c-.2,0-.4-.01-.635-.022a1.153,1.153,0,0,0-1.192,1.1,1.167,1.167,0,0,0,1.112,1.208c.239.012.479.023.716.023a12.683,12.683,0,0,0,1.153-25.32Z"
                                      transform="translate(-2.025 -3.087)"
                                    />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div>Loan Easy Access</div>
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-between mt-4">
                        <div className="minicards p-2 text-center d-flex shadow mx-2">
                          <div className="my-auto w-100">
                            <div className=" ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32.804"
                                height="30.274"
                                viewBox="0 0 32.804 30.274"
                              >
                                <defs>
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "\n                    .clock {\n                      fill: none;\n                      stroke: #00836c;\n                      stroke-width: 1px;\n                    }\n                  ",
                                    }}
                                  />
                                </defs>
                                <g transform="translate(-5 -6.33)">
                                  <path
                                    className="video"
                                    d="M34.347,6.33H7.1A2.1,2.1,0,0,0,5,8.431V29a2.1,2.1,0,0,0,2.1,2.1h8.252v1.44h-.308a2.941,2.941,0,0,0-2.937,2.937.631.631,0,0,0,.629.629H28.711a.631.631,0,0,0,.629-.629A2.941,2.941,0,0,0,26.4,32.538h-.308V31.1h8.252a2.1,2.1,0,0,0,2.1-2.1V8.431A2.1,2.1,0,0,0,34.347,6.33ZM27.063,26.142H6.258V8.431A.843.843,0,0,1,7.1,7.588H34.347a.843.843,0,0,1,.843.843V26.142H27.063Zm.893,8.7H13.491a1.683,1.683,0,0,1,1.553-1.05H26.4A1.67,1.67,0,0,1,27.957,34.846Zm-3.12-2.308H16.61V31.1h8.227Zm9.51-2.7H7.1A.843.843,0,0,1,6.258,29V27.4H35.189V29A.843.843,0,0,1,34.347,29.84Z"
                                  />
                                  <path
                                    className="video"
                                    d="M33.115,34.1V32.56a4.786,4.786,0,0,0-4.78-4.78H22.7a4.786,4.786,0,0,0-4.78,4.78V34.1h1.258V32.56A3.524,3.524,0,0,1,22.7,29.038h5.635a3.524,3.524,0,0,1,3.522,3.522V34.1Z"
                                    transform="translate(-4.794 -7.959)"
                                  />
                                  <path
                                    className="video"
                                    d="M27.529,21.058a4.189,4.189,0,1,0-4.189-4.189A4.2,4.2,0,0,0,27.529,21.058Zm0-7.113A2.928,2.928,0,1,1,24.6,16.869,2.934,2.934,0,0,1,27.529,13.944Z"
                                    transform="translate(-6.805 -2.356)"
                                  />
                                </g>
                              </svg>
                            </div>
                            <div>Video KYC</div>
                          </div>
                        </div>
                        <div className="minicards p-2 text-center d-flex shadow mx-2">
                          <div className="my-auto w-100">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34.341"
                                height="30.974"
                                viewBox="0 0 34.341 30.974"
                              >
                                <defs>
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "\n                    .FASTag {\n                      fill: none;\n                      stroke: #00836c;\n                      stroke-linecap: round;\n                      stroke-linejoin: round;\n                      stroke-width: 1.2px;\n                    }\n                  ",
                                    }}
                                  />
                                </defs>
                                <g transform="translate(-1283.166 -1219.024)">
                                  <g transform="translate(1301.93 1234.562)">
                                    <path
                                      className="FASTag"
                                      d="M1500.44,1409.265h-4.119v-12.777a2.059,2.059,0,0,1,2.059-2.059h0a2.06,2.06,0,0,1,2.059,2.059Z"
                                      transform="translate(-1496.321 -1394.429)"
                                    />
                                    <g transform="translate(2.059 2.285)">
                                      <line className="FASTag" y2="1.388" />
                                      <line
                                        className="FASTag"
                                        y2="1.388"
                                        transform="translate(0 4.439)"
                                      />
                                      <line
                                        className="FASTag"
                                        y2="1.388"
                                        transform="translate(0 8.877)"
                                      />
                                    </g>
                                  </g>
                                  <path
                                    className="FASTag"
                                    d="M1554.244,1420.123h-9.724v-2.268h9.724a1.134,1.134,0,0,1,1.134,1.134h0A1.134,1.134,0,0,1,1554.244,1420.123Z"
                                    transform="translate(-238.471 -181.291)"
                                  />
                                  <line
                                    className="FASTag"
                                    x2="18.994"
                                    transform="translate(1297.913 1249.398)"
                                  />
                                  <rect
                                    className="FASTag"
                                    width="13.146"
                                    height="11.627"
                                    transform="translate(1285.067 1222.936)"
                                  />
                                  <rect
                                    className="FASTag"
                                    width="13.146"
                                    height="11.627"
                                    transform="translate(1285.067 1234.562)"
                                  />
                                  <rect
                                    className="FASTag"
                                    width="7.066"
                                    height="4.907"
                                    transform="translate(1288.106 1237.922)"
                                  />
                                  <rect
                                    className="FASTag"
                                    width="15.747"
                                    height="3.21"
                                    rx="1.605"
                                    transform="translate(1283.766 1219.624)"
                                  />
                                  <path
                                    className="FASTag"
                                    d="M3.21,0h9.327a3.21,3.21,0,0,1,3.21,3.21v0a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0v0A3.21,3.21,0,0,1,3.21,0Z"
                                    transform="translate(1283.766 1246.189)"
                                  />
                                  <line
                                    className="FASTag"
                                    x2="3.418"
                                    transform="translate(1289.931 1240.375)"
                                  />
                                  <path
                                    className="FASTag"
                                    d="M1341.856,1349.413h-7.3v-.555a3.651,3.651,0,0,1,3.651-3.651h0a3.651,3.651,0,0,1,3.651,3.651Z"
                                    transform="translate(-46.448 -114.851)"
                                  />
                                </g>
                              </svg>
                            </div>
                            <div>FASTag</div>
                          </div>
                        </div>
                        <div className="minicards p-2 text-center d-flex shadow mx-2">
                          <div className="my-auto">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="35.797"
                                height="23.177"
                                viewBox="0 0 35.797 23.177"
                              >
                                <defs>
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "\n                    .ba,\n                    .bb {\n                      fill: #00836c;\n                    }\n\n                    .aa {\n                      stroke: #00836c;\n                    }\n                  ",
                                    }}
                                  />
                                </defs>
                                <g transform="translate(16.25 -1.25)">
                                  <path
                                    className="ba"
                                    d="M18.056,1.75H-14.758a.992.992,0,0,0-.992.992V22.935a.992.992,0,0,0,.992.992H18.056a.992.992,0,0,0,.992-.992V2.742A.992.992,0,0,0,18.056,1.75ZM-15.209,5.9H18.506V8.962H-15.209Zm.451-3.606H18.056a.451.451,0,0,1,.451.451V5.356H-15.209V2.742A.451.451,0,0,1-14.758,2.291ZM18.056,23.386H-14.758a.451.451,0,0,1-.451-.451V9.5H18.506V22.935A.451.451,0,0,1,18.056,23.386Z"
                                  />
                                  <path
                                    className="bb"
                                    d="M.468,37.416H-6.924a.992.992,0,0,0-.992.992v4.327a.992.992,0,0,0,.992.992H.468a.992.992,0,0,0,.992-.992V38.408A.992.992,0,0,0,.468,37.416ZM-7.375,40.03h2.8c0,.031.008.057.008.09v.992H-7.375V40.03Zm3,2.423a1.147,1.147,0,0,0,.358-.71V40.12a2.229,2.229,0,0,0-.427-1.274,2.118,2.118,0,0,1-.365-.89h3.171a2.118,2.118,0,0,1-.365.89,2.23,2.23,0,0,0-.427,1.274v1.623a1.147,1.147,0,0,0,.358.71,1.719,1.719,0,0,1,.422.732H-4.8A1.713,1.713,0,0,1-4.38,42.454Zm2.486-2.333c0-.033.007-.059.008-.09h2.8v1.082H-1.894V40.12ZM.919,38.408v1.082H-1.748a3.654,3.654,0,0,1,.2-.358A2.565,2.565,0,0,0-1.1,37.957H.468A.451.451,0,0,1,.919,38.408Zm-7.843-.451h1.565a2.565,2.565,0,0,0,.451,1.175,3.58,3.58,0,0,1,.2.358H-7.375V38.408A.451.451,0,0,1-6.924,37.957Zm-.451,4.778V41.653h2.813v.09c0,.085-.113.22-.232.363a2.128,2.128,0,0,0-.557,1.079H-6.924A.451.451,0,0,1-7.375,42.735Zm7.843.451H-1.1a2.128,2.128,0,0,0-.557-1.079c-.119-.143-.232-.278-.232-.363v-.09H.919v1.082A.451.451,0,0,1,.468,43.186Z"
                                    transform="translate(-5.009 -22.805)"
                                  />
                                  <path
                                    className="bb"
                                    d="M32.9,42.372H31.835l.752-.752a.271.271,0,0,0-.383-.383l-.752.752V40.925a.27.27,0,1,0-.541,0v1.064l-.752-.752a.271.271,0,0,0-.383.383l.752.752H29.465a.27.27,0,1,0,0,.541h1.064l-.752.752a.27.27,0,1,0,.382.383l.752-.752v1.064a.27.27,0,0,0,.541,0V43.3l.752.752a.27.27,0,1,0,.382-.383l-.752-.752H32.9a.271.271,0,0,0,0-.541Z"
                                    transform="translate(-28.738 -24.876)"
                                  />
                                  <path
                                    className="bb"
                                    d="M44.741,42.372H43.677l.752-.752a.271.271,0,0,0-.383-.383l-.752.752V40.925a.27.27,0,1,0-.541,0V41.99L42,41.237a.271.271,0,0,0-.383.383l.752.752H41.307a.27.27,0,0,0,0,.541h1.063l-.752.752a.27.27,0,1,0,.382.383l.753-.753v1.064a.27.27,0,0,0,.541,0V43.3l.752.752a.27.27,0,1,0,.382-.383l-.752-.752H44.74a.27.27,0,0,0,0-.541Z"
                                    transform="translate(-36.31 -24.876)"
                                  />
                                  <path
                                    className="bb"
                                    d="M56.581,42.372H55.518l.752-.752a.271.271,0,0,0-.383-.383l-.753.753V40.925a.27.27,0,1,0-.541,0v1.064l-.752-.752a.271.271,0,1,0-.383.383l.752.752H53.147a.27.27,0,1,0,0,.541h1.064l-.752.752a.27.27,0,1,0,.382.383l.752-.752v1.064a.27.27,0,1,0,.541,0V43.295l.753.753a.27.27,0,0,0,.382-.383l-.751-.752h1.063a.27.27,0,1,0,0-.541Z"
                                    transform="translate(-43.88 -24.876)"
                                  />
                                  <path
                                    className="bb"
                                    d="M68.424,42.372H67.36l.752-.752a.271.271,0,0,0-.383-.383l-.752.752V40.925a.27.27,0,1,0-.541,0V41.99l-.753-.753a.271.271,0,0,0-.383.383l.752.752H64.99a.27.27,0,0,0,0,.541h1.063l-.752.752a.27.27,0,1,0,.382.383l.753-.753v1.064a.27.27,0,1,0,.541,0V43.3l.752.752a.27.27,0,1,0,.382-.383l-.752-.752h1.064a.27.27,0,0,0,0-.541Z"
                                    transform="translate(-51.453 -24.876)"
                                  />
                                </g>
                              </svg>
                            </div>
                            <div>Generate Debit Card PIN</div>
                          </div>
                        </div>
                        <div className="minicards p-2 text-center d-flex shadow mx-2">
                          <div className="my-auto">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26.631"
                                height="29.774"
                                viewBox="0 0 26.631 29.774"
                              >
                                <defs>
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "\n                    .pass {\n                      fill: #00836c;\n                    }\n                  ",
                                    }}
                                  />
                                </defs>
                                <g transform="translate(-12.496 -8.07)">
                                  <path
                                    className="pass"
                                    d="M33.3,23.048a2.107,2.107,0,0,0-1.477.422,2.094,2.094,0,0,0-1.645-1.144,2.117,2.117,0,0,0-1.477.422,2.066,2.066,0,0,0-2.877-.882V17.282a2.146,2.146,0,0,0-1.889-2.151,2.094,2.094,0,0,0-2.3,2.084V27.359L20,26a2.187,2.187,0,0,0-2.892.039,2.147,2.147,0,0,0-.035,3.1l4.952,5.308a.894.894,0,0,1,.2.349l.5,1.658A1.941,1.941,0,0,0,24.6,37.844H32a1.961,1.961,0,0,0,1.935-1.687l1.242-9.034a1.226,1.226,0,0,0,.012-.171V25.2A2.146,2.146,0,0,0,33.3,23.048Zm.822,3.929-1.242,9.035a.891.891,0,0,1-.879.767H24.6a.882.882,0,0,1-.85-.631l-.5-1.658a1.965,1.965,0,0,0-.442-.768l-4.974-5.331a1.083,1.083,0,0,1,.008-1.576,1.038,1.038,0,0,1,.716-.272,1.205,1.205,0,0,1,.766.278L21.834,28.9a.533.533,0,0,0,.872-.41V17.215a1.03,1.03,0,0,1,.337-.761,1.018,1.018,0,0,1,.794-.262,1.073,1.073,0,0,1,.925,1.091v8.4a.533.533,0,1,0,1.065,0v-2a1.029,1.029,0,0,1,1.131-1.024,1.074,1.074,0,0,1,.926,1.09v1.93a.533.533,0,1,0,1.065,0V24.41a1.029,1.029,0,0,1,1.131-1.024,1.074,1.074,0,0,1,.926,1.091v1.208a.533.533,0,1,0,1.065,0v-.554A1.028,1.028,0,0,1,33.2,24.108a1.073,1.073,0,0,1,.925,1.09ZM16.452,12.259l-1.046-.6v1.208a.533.533,0,1,1-1.065,0V11.655l-1.046.6a.533.533,0,0,1-.533-.922l1.046-.6-1.046-.6a.533.533,0,0,1,.533-.922l1.046.6V8.6a.533.533,0,1,1,1.065,0V9.81l1.046-.6a.533.533,0,0,1,.533.922l-1.046.6,1.046.6a.533.533,0,1,1-.533.922Zm3.6-.922,1.046-.6-1.046-.6a.533.533,0,0,1,.533-.922l1.046.6V8.6a.533.533,0,0,1,1.065,0V9.81l1.046-.6a.533.533,0,0,1,.533.922l-1.046.6,1.046.6a.533.533,0,1,1-.533.922l-1.046-.6v1.208a.533.533,0,1,1-1.065,0V11.655l-1.046.6a.533.533,0,1,1-.533-.922Zm7.292,0,1.046-.6-1.046-.6a.533.533,0,0,1,.533-.922l1.046.6V8.6a.533.533,0,1,1,1.065,0V9.81l1.046-.6a.533.533,0,1,1,.533.922l-1.046.6,1.046.6a.533.533,0,1,1-.533.922l-1.046-.6v1.208a.533.533,0,1,1-1.065,0V11.655l-1.046.6a.533.533,0,0,1-.533-.922Zm11.709.727a.532.532,0,0,1-.727.195l-1.046-.6v1.208a.533.533,0,1,1-1.065,0V11.655l-1.046.6a.533.533,0,1,1-.533-.922l1.046-.6-1.046-.6a.533.533,0,1,1,.533-.922l1.046.6V8.6a.533.533,0,1,1,1.065,0V9.81l1.046-.6a.533.533,0,0,1,.533.922l-1.046.6,1.046.6A.532.532,0,0,1,39.056,12.064Z"
                                  />
                                </g>
                              </svg>
                            </div>
                            <div>Set Online Banking Password</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 px-0">
                <img width={"100%"} src={banner3} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* End Counts Section */}

        {/* Other Links */}
        <div className="container-fluid">
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

export default Personal;
