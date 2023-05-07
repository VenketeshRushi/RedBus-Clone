import React from "react";
import { Link } from "react-router-dom";
import "./SignInForm.scss";

const SignInForm = () => {
  return (
    <div className="sign-in-block">
      <div className="sign-container">
        <div className="sign-header">
          <div className="title">
            Sign IN To <span className="title-name">Red</span>Bus
          </div>
        </div>
        <div className="sign-content">
          <form action="#">
            <div className="input-box-group">
              <div className="input-box">
                <input type="email" placeholder="Enter Your Email" />
              </div>
              <div className="input-box">
                <input type="password" placeholder="Enter Your Password" />
              </div>
            </div>
            <button className="btn btn-orange">Login</button>
          </form>
          <div className="redirectto">
            <Link to="/signup" className="signupto">
              Don't have an account ? <span className="signupto1">Sign UP</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
