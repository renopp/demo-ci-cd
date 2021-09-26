import React from "react";
import { Content } from "antd/lib/layout/layout";
import { Layout, Typography } from "antd";
import CreateRoleForm from "../../components/Admin/CreateRoleForm";

const { Title } = Typography;

const ADCreateRolePage = () => {
  return (
    <div className="form-detailaccount">
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Content style={{ marginTop: "50px" }}>
          <Title level={3}> Create Account </Title>
          <CreateRoleForm />
        </Content>
      </Layout>
    </div>
  );
};

export default ADCreateRolePage;