import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const Text = Typography;

const GSLoginForm = () => {
  const { Option } = Select;
  const history = useHistory();
  const navigateTo = React.useCallback(
    () => history.push("/admin-beranda"),
    [history]
  );

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [role, setRole] = React.useState("");

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleUsernameChange = React.useCallback((e) => {
    setUsername(e.target.value);
  }, []);
  const handlePasswordChange = React.useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  // const handleRoleChange = React.useCallback((e) => {
  //   setRole(e.target.value);
  // }, []);

  return (
    <Row justify="center">
      <Form
        name="basic"
        labelAlign="left"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ marginTop: "40px", paddingRight: "40px", paddingLeft: "40px" }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              type: "text",
            },
          ]}
        >
          <Row>
            <Col span={2}>
              <Text> : </Text>
            </Col>
            <Col span={22}>
              <Input value={username} onChange={handleUsernameChange} />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
              type: "password",
            },
          ]}
        >
          <Row>
            <Col span={2}>
              <Text> : </Text>
            </Col>
            <Col span={22}>
              <Input.Password
                id="input_password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          label="Login As"
          name="login as"
          rules={[{ required: true, message: "Please input your Role!" }]}
        >
          <Row>
            <Col span={2}>
              <Text> : </Text>
            </Col>
            <Col span={22}>
              <Select defaultValue="- Login As -">
                <Option value="accounting">Accounting</Option>
                <Option value="admin">Admin</Option>
                <Option value="generalsupport">General Support</Option>
              </Select>
            </Col>
          </Row>
        </Form.Item>

        <Col span={12} offset={5}>
          <Row justify="center">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                onClick={navigateTo}
                style={{
                  backgroundColor: "#09539C ",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "350px",
                  borderRadius: "10px",
                  marginTop: "10px",
                }}
              >
                Login
              </Button>
            </Form.Item>
          </Row>
        </Col>
      </Form>
    </Row>
  );
};

export default GSLoginForm;
