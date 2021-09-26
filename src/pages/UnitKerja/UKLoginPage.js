import React from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Typography,
  Alert,
  Spin,
} from "antd";
import img from "../../assets/image_logo2.png";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "../../components/LoginPage.css";
import { useAuthorizedContext } from "../../AuthorizedContext";
import useLogin from "../../Mutations/useLogin";

const Text = Typography;

const LoginForm = () => {
  const history = useHistory();
  const { setAuthorizedValue } = useAuthorizedContext();

  // const handleSignInButton = React.useCallback(() => {
  //   setAuthorizedValue(true);
  //   history.push("/unitkerja-beranda");
  // }, [setAuthorizedValue, history]);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {
    mutate: login,
    isError,
    isLoading,
  } = useLogin(
    { username, password },
    (result) => {
      setAuthorizedValue(true);
      history.push("/unitkerja-beranda");
    },
    (error) => console.log("error >>", error)
  );

  const onFinish = React.useCallback((values) => {
    console.log("Success:", values);
  }, []);

  const onFinishFailed = React.useCallback((errorInfo) => {
    console.log("Failed:", errorInfo);
  }, []);

  const handleUsernameChange = React.useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  const handlePasswordChange = React.useCallback((e) => {
    setPassword(e.target.value);
  }, []);

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
          data-qa-id="input-username"
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
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
            },
          ]}
          style={{ marginTop: "15px" }}
        >
          <Row>
            <Col span={2}>
              <Text> : </Text>
            </Col>
            <Col span={22}>
              <Input.Password
                data-qa-id="input-password"
                id="input_password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Col>
          </Row>
        </Form.Item>

        <Col span={12} offset={5}>
          <Row justify="center">
            {isError && (
              <Alert
                data-qa-id="error-login-message"
                message="Username atau password salah"
                type="error"
                showIcon
              />
            )}
            {isLoading ? (
              <Spin tip="Loading..." />
            ) : (
              <Form.Item>
                <Button
                  data-qa-id="btn-login"
                  type="primary"
                  htmlType="submit"
                  onClick={login}
                  style={{
                    backgroundColor: "#09539C ",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "350px",
                    borderRadius: "10px",
                    marginTop: "50px",
                  }}
                >
                  Login
                </Button>
              </Form.Item>
            )}
          </Row>
        </Col>
      </Form>
    </Row>
  );
};

const UKLoginPage = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="App-header">
        <div className="container">
          <img src={img} className="BRI-logo" alt="logo" />
          <LoginForm />
        </div>
      </Layout>
    </Layout>
  );
};

export default UKLoginPage;
