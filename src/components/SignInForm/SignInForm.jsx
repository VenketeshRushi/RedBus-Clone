import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./SignInForm.scss";
import { loginAPI } from "../../redux/actions/userActions";

const SignInForm = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const { state } = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      if (state.from) {
        console.log(state.from);
        navigate(state.from, { replace: true });
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated]);

  const initialData = {
    email: "",
    password: "",
  };
  const [signUpcreds, setsignUpcreds] = useState(initialData);
  const [showpassword, setshowpassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setsignUpcreds({
      ...signUpcreds,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (signUpcreds.email === "" || signUpcreds.password === "") {
      return error("Please enter all required fields");
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
                  onChange={hanldeChange}
                />
              </div>
              <div className="input-box">
                <input
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                  onChange={hanldeChange}
                />
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
