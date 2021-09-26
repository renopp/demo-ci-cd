import { Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import GSLoginForm from "../../components/Admin/GSLoginForm";
import img from "../../assets/image_logo2.png";

const GSLoginPage = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="App-header">
        <div className="container">
          <img src={img} className="BRI-logo" alt ="logo" />
          <GSLoginForm />
        </div>
      </Layout>
    </Layout>
  );
};

export default GSLoginPage;
