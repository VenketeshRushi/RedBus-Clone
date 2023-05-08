import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignInForm.scss";
import { useDispatch } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import { saveUserData } from "../../redux/userReducer";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/auth/login", { email, password });
      dispatch(saveUserData(res.data.data));
      Cookies.set("jwttoken", res.data.data.token, {
        expires: new Date(new Date().getTime() + 60 * 60 * 1000),
      });
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="sign-in-block">
      <div className="sign-container">
        <div className="sign-header">
          <div className="title">
            Sign IN To <span className="title-name">Red</span>Bus
          </div>
        </div>
        <div className="sign-content">
          <form onSubmit={handleSubmit} action="#">
            <div className="input-box-group">
              <div className="input-box">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required={true} />
              </div>
            </div>
            <button className="btn btn-orange">Sign IN</button>
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
