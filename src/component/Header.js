import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

const Header = () => {

  const [login_show, setLoginShow] = useState(false);
  const [register_show, setRegisterShow] = useState(false);

  const handleLogin = () => { setLoginShow(!login_show); }
  const handleRegister = () => { setRegisterShow(!register_show); }

  return (
    <>
      <div className="header p-5 bg-dark">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div id="logo">
              <Link to="/" >
                <img src={require('../assets/images/logo.png')} alt="nVpn logo" width={330} height={200} data-xblocker="passed" />
              </Link>
            </div>
            <div id="topmenu" className="items-end">
              <div style={{ marginLeft: "250px", fontSize: "20px" }}>
                <ul className="flex gap-1 text-white item-center" >
                  <li className=" px-6 py-2 font-medium text-[#7E8186] hover:text-[#f6d12b]">24/7 Support</li>
                  <li className=" px-6 py-2 font-medium text-[#7E8186] hover:text-[#f6d12b]">
                    <Link to="#" classNameName=" no-underline" onClick={handleLogin}><span>LogIn</span></Link>
                  </li>
                  <li className=" px-6 py-2 font-medium text-[#7E8186] hover:text-[#f6d12b]">
                    <Link to="#" classNameName=" no-underline" onClick={handleRegister} ><span>Register</span></Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul id="nav" className="flex gap-1 text-white item-center" style={{ fontSize: "20px" }}>
                  <li className=" px-6 py-2 font-medium text-[#7E8186] hover:text-[#f6d12b]">
                    <Link to="/" classNameName=" no-underline" ><span>Home</span></Link>
                  </li>
                  <li className=" px-6 py-2 font-medium text-[#7E8186] hover:text-[#f6d12b]">
                    <Link to="/order" classNameName=" no-underline"  ><span>Order Now</span></Link>
                  </li>
                  <li className=" px-6 py-2 font-medium text-[#7E8186] hover:text-[#f6d12b]">
                    <Link to="/questionList" classNameName=" no-underline" ><span>F.A.Q</span></Link>
                  </li>
                  <li className=" px-6 py-2 font-medium text-[#7E8186] hover:text-[#f6d12b]">
                    <Link to="/submit" classNameName=" no-underline" ><span>Contact Us</span></Link>
                  </li>
                  <li className=" px-6 py-2 font-medium text-[#365da1] hover:text-[#f6d12b]">
                    <Link to="/client_area" classNameName=" no-underline" ><span>Client Area</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Modal show={login_show} onHide={handleLogin}>
          <Modal.Header closeButton>
            <Modal.Title><strong>Log In</strong>This page is restricted</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12">
                  <div className="card shadow-2-strong" style={{ border: "0px" }}>
                    <div className="card-body p-5 text-center">
                      <div className="form-outline mb-4">
                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Email"></input>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Password"></input>
                      </div>

                      <div className="form-check d-flex justify-content-start mb-4">
                        <input className="form-check-input" type="checkbox" value="" id="form1Example3"></input>
                        <label className="form-check-label" for="form1Example3"> Remember password </label>
                      </div>

                      <button className="btn btn-primary btn-lg btn-block" type="submit" style={{ width: "100%" }}>Login</button>
                      <hr className="my-4" />
                      <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: "#dd4b39", width: "100%", marginBottom: "8px" }}
                        type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
                      <button className="btn btn-lg btn-block btn-primary mb-2" style={{ backgroundColor: "#3b5998", width: "100%" }}
                        type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Header;
