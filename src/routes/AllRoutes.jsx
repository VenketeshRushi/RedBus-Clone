import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home/HomePage"))
const Signin = lazy(() => import("../pages/LoginPage/LoginPage"))
const Signup = lazy(() => import("../pages/SignUpPage/SignUpPage"))

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default AllRoutes;

