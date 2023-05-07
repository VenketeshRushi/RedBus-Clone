import React from "react";
import { Link } from "react-router-dom";
import "./SignUpForm.scss";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Icon } from "@mui/material";

const SignUpForm = () => {
  return (
    <div className="sign-in-block">
      <div className="sign-container">
        <div className="sign-header">
          <div className="title">
            Sign UP To <span className="title-name">Red</span>Bus
          </div>
        </div>
        <div className="sign-content">
          <form action="#">
            <div className="input-box-group">
              <div className="input-box">
                <input type="email" placeholder="Enter Your Email" />
              </div>
              <div className="input-box1">
                <input type="password" placeholder="Enter Your Password" />
                <Icon className="icon icon-viz">
                  <VisibilityOutlinedIcon />
                </Icon>
              </div>
              <div className="input-box2">
                <select name="gender" id="gender">
                  <option>Select Your Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <button className="btn btn-orange">Sign UP</button>
          </form>
          <div className="redirectto">
            <Link to="/signin" className="signupto">
              Already have an account ?{" "}
              <span className="signupto1">Sign IN</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
