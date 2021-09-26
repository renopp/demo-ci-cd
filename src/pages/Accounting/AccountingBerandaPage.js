import React from "react";
import ListPaymentRequestAccounting from "./AccountingBeranda";
import { Content } from "antd/lib/layout/layout";
import { Layout, Typography } from "antd";

const { Title } = Typography;

const AccountingBerandaPage = () => {
  return (
    <div className="accounting-beranda">
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Content style={{ marginTop: "50px" }}>
          <Title level={3}> List Payment Request </Title>
          <ListPaymentRequestAccounting />
        </Content>
      </Layout>
    </div>
  );
};

export default AccountingBerandaPage;
