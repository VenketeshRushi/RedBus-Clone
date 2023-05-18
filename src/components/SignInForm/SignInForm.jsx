import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./SignInForm.scss";
import { loginAPI } from "../../redux/actions/userActions";
import { errorToast } from "../../utils/toast";

const SignInForm = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [signUpcreds, setsignUpcreds] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      if (state?.from) {
        navigate(state.from, { replace: true });
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated, state, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignUpcreds((prevCreds) => ({
      ...prevCreds,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signUpcreds.email === "" || signUpcreds.password === "") {
      return errorToast("Please enter all required fields");
    }
    dispatch(loginAPI(signUpcreds));
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
          <form onSubmit={handleSubmit}>
            <div className="input-box-group">
              <div className="input-box">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  value={signUpcreds.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <input
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                  value={signUpcreds.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-orange">
              Sign In
            </button>
          </form>
          <div className="redirectto">
            <Link to="/signup" className="signupto">
              Don't have an account? <span className="signupto1">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
