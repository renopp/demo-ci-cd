import React from "react";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import FormPayment from "../../components/FormPayment";
import "../../components/FormPaymentRequestPage.css";

function UKPaymentRequestPage() {
  return (
    <>
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Content style={{ marginTop: "50px" }}>
          <h3
            style={{
              marginRight: "250px",
            }}
          >
            Silahkan Isi Form Payment Request
          </h3>
          <FormPayment />
        </Content>
      </Layout>
    </>
  );
}

export default UKPaymentRequestPage;
