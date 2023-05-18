import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./SignUpForm.scss";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconButton } from "@mui/material";
import { errorToast, successToast } from "../../utils/toast";

const SignUpForm = () => {
  const [signUpcreds, setsignUpcreds] = useState({
    email: "",
    password: "",
    gender: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignUpcreds((prevCreds) => ({
      ...prevCreds,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signUpcreds.email === "" || signUpcreds.password === "" || signUpcreds.gender === "") {
      return errorToast("Please enter all required fields");
    } else {
      try {
        let response = await axios.post(
          "http://localhost:8080/user/signup",
          signUpcreds
        );
        console.log(response);
        if (response.data.status === "Failed") {
          errorToast(response.data.message);
        } else {
          navigate("/signin");
          successToast(response.data.message);
        }
      } catch (error) {
        errorToast("Something Went wrong!")
        console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-block">
      <div className="sign-container">
        <div className="sign-header">
          <div className="title">
            Sign UP To <span className="title-name">Red</span>Bus
          </div>
        </div>
        <div className="sign-content">
          <form onSubmit={handleSubmit}>
            <div className="input-box-group">
              <div className="input-box">
                <input name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  value={signUpcreds.email}
                  onChange={handleChange} />
              </div>
              <div className="input-box1">
                <input name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  value={signUpcreds.password}
                  onChange={handleChange} />
                <IconButton onClick={() => setShowPassword(!showPassword)} className="icon icon-viz">
                  <VisibilityOutlinedIcon />
                </IconButton>
              </div>
              <div className="input-box2">
                <select
                  value={signUpcreds.gender}
                  onChange={handleChange} name="gender" id="gender">
                  <option>Select Your Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-orange">Sign UP</button>
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
