import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

export const Private = ({ children }) => {
  const token = useSelector((state) => state.user.token);
  const cookie = Cookies.get("jwttoken");

  if (!token && !cookie) {
    return <Navigate to="/signin" />;
  } else {
    return children;
    // axios
    //   .post("/verifyToken", { token: cookie }) // Use 'cookie' instead of 'jwtToken'
    //   .then((response) => {
    //     console.log("response in private routing", response);
    //     return children;
    //   })
    //   .catch((error) => {
    //     console.log("error in private routing", error);
    //     return <Navigate to="/signin" />;
    //   });
  }
};
