import React from "react";
import Layout from "../../Layout";
import "./LoginPage.scss";
import SignInForm from "../../components/SignInForm/SignInForm";

const LoginPage = () => {
  return (
    <Layout>
      <div className="main-content login-page">
        <div className="container-bigs">
          <SignInForm />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
