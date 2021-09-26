import React from "react";
import "./DetailAccount.css";
import { Form, Input, Button, Col, Row, Select, Typography } from "antd";
import { useHistory } from "react-router-dom";

const { Text } = Typography;
const { Option } = Select;

const UpdateRoleForm = () => {
  const history = useHistory();
  const navigateTo = React.useCallback(() => history.push("/admin-beranda"), [history]);
  const Model = {
    nama: "Dinda Eka Nurlita",
    role: "",
    username: "10001",
    password: "",
  };

  const [formState, setFormState] = React.useState({
    Model,
  });

  const onFinish = React.useCallback((values) => {
    console.log("Success:", values);
  }, []);
  const onFinishFailed = React.useCallback((errorInfo) => {
    console.log("Failed:", errorInfo);
  }, []);

  return (
    <Row justify="center">
      <Col span={14}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            labelAlign="left"
            labelCol={{ span: 4 }}
            label="Nama"
            name="nama"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Row>
              <Col span={2}>
                <Text> : </Text>
              </Col>
              <Col>
                <Input value={formState.Model.nama} />
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            labelAlign="left"
            labelCol={{ span: 4 }}
            label="Role"
            name="role"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Row>
              <Col span={2}>
                <Text> : </Text>
              </Col>
              <Col>
                <Select placeholder="-roles-">
                  <Option value="0">Accounting</Option>
                  <Option value="1">General Support</Option>
                </Select>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            labelAlign="left"
            labelCol={{ span: 4 }}
            label="Username"
            name="username"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Row>
              <Col span={2}>
                <Text> : </Text>
              </Col>
              <Col>
                <Input value={formState.Model.username} />
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            labelAlign="left"
            labelCol={{ span: 4 }}
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Password tidak boleh kosong!",
              },
            ]}
          >
            <Row>
              <Col span={2}>
                <Text> : </Text>
              </Col>
              <Col id="role-password">
                <Input.Password
                  value={formState.Model.password}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      Model: { ...formState.Model, password: event.target.value },
                    });
                    }}
                  style={{margin:0}}
                />
              </Col>
            </Row>
          </Form.Item>

          <Row id="role-detail">
            <Col span={4}>
              <Form.Item>
                <Button danger htmlType="submit" onClick={() => {}}>
                  Kembali
                </Button>
              </Form.Item>
            </Col>
            <Col span={4} offset={10}>
              <Form.Item>
                <Button type="primary" htmlType="submit" onClick={navigateTo}>
                  Update
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default UpdateRoleForm;
