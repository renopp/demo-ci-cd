import React from "react";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import ListPaymentRequest from "../../components/ListPaymentRequest";

const UKBerandaPage = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Content style={{ marginTop: "50px" }}>
          <ListPaymentRequest />
        </Content>
      </Layout>
    </>
  );
};

export default UKBerandaPage;
