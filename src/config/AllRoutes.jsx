import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Private } from "./Private";

function AllRoutes() {
  const Home = lazy(() => import("../pages/Home/HomePage"));
  const SignInCard = lazy(() => import("../pages/LoginPage/LoginPage"));
  const SignupCard = lazy(() => import("../pages/SignUpPage/SignUpPage"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/signin" element={<SignInCard />} />
        <Route path="/signup" element={<SignupCard />} />
        <Route
          path="/"
          element={
            // <Private>
              <Home />
            // </Private>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default AllRoutes;
