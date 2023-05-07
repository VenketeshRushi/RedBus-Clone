import React from "react";
import Layout from "../../Layout";
import InfoCard from "../../components/Home/InfoCard";

const HomePage = () => {
  return (
    <Layout mainClassName="Home">
      <div className="main-content home-page">
        <div className="container">
          <div className="details-block">
            <InfoCard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
