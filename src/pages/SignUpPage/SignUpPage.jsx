import React from "react";
import Layout from "../../Layout";
import "./SignUpPage.scss";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const SignUpPage = () => {
  return (
    <Layout>
      <div className="main-content SignUp-page">
        <div className="container-bigs">
          <SignUpForm />
        </div>
      </div>
    </Layout>
  );
};

export default SignUpPage;
