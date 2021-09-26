import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from 'react';
import ListRole from '../../components/Admin/ListRole';

function ManagementRolePage() {
  return (
    <>
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Content style={{ marginTop: "50px" }}>
          <ListRole />
        </Content>
      </Layout>
    </>
  )
}

export default ManagementRolePage
