import React, { useState } from "react";
import { Content } from "antd/lib/layout/layout";
import { Button, Col, Form, Row, Layout, Select, Typography } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useHistory } from "react-router-dom";
import "./AccountingDetailPaymetPage.css";

const { Title, Text } = Typography;

const { Option } = Select;

const AccountigDetailPaymentForm = () => {
  const history = useHistory();
  const navigateTo = React.useCallback(
    () => history.push("/unitkerja-beranda"),
    [history]
  );
  const Model = {
    nm_unit: "KC BANK XXX",
    diminta_oleh: "Asep Sunandar",
    keperluan: "SPP Juli 2020",
    tanggal_pembayaran_aktual: "Sabtu, 10 Juli 2021",
    jumlah_payment: "Rp. 1.000.000",
    terbilang: "Satu Juta Rupiah",
    nama_rek_penerima: "MD. Mubarokul Huda",
    no_rek_penerima: "15000757050",
    request_terkirim: "Jum'at, 9 Juli 2021 (09.00 PM)",
    status: "",
    alasan: "",
  };

  const [formState, setFormState] = useState({
    Model,
  });

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [hidden, setHidden] = useState(true);
  const handleOnChange = (value, _) => {
    console.log(value);
    if (value === "1") {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };
  return (
    <Row justify="center">
      <Col span={12}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Nama Unit</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{formState.Model.nm_unit}</Text>
            </Col>
          </Row>

          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Diminta Oleh</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{formState.Model.diminta_oleh}</Text>
            </Col>
          </Row>

          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Keperluan</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{formState.Model.keperluan}</Text>
            </Col>
          </Row>

          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Tanggal Pembayaran</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{formState.Model.tanggal_pembayaran_aktual}</Text>
            </Col>
          </Row>

          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Jumlah Payment</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{formState.Model.jumlah_payment}</Text>
            </Col>
          </Row>

          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Terbilang</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{formState.Model.terbilang}</Text>
            </Col>
          </Row>

          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Nama Rek. Penerima</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{formState.Model.nama_rek_penerima}</Text>
            </Col>
          </Row>

          <Row justify="left" className="row">
            <Col span={10}>
              <Text>No Rekening Penerima</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{formState.Model.no_rek_penerima}</Text>
            </Col>
          </Row>

          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Request Terkirim</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{formState.Model.request_terkirim}</Text>
            </Col>
          </Row>

          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Status</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Form.Item>
                <Select
                  defaultValue=""
                  onSelect={(value, event) => handleOnChange(value, event)}
                >
                  <Option value="0">Setuju</Option>
                  <Option value="1">Reject</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row
            justify="left"
            className={hidden ? "hidden" : "row"}
            style={{ marginTop: "0" }}
          >
            <Col span={10}>
              <Text>Alasan</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Form.Item>
                <TextArea
                  value={formState.Model.alasan}
                  onChange={(e) => {
                    setFormState({
                      ...formState,
                      Model: { ...formState.Model, alasan: e.target.value },
                    });
                  }}
                  placeholder="Alasan"
                  autoSize={{ minRows: 2, maxRows: 3 }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={3}>
              <Form.Item>
                <Button danger htmlType="submit" onClick={navigateTo}>
                  Kembali
                </Button>
              </Form.Item>
            </Col>
            <Col span={3} offset={18}>
              <Form.Item>
                <Button htmlType="submit" onClick={navigateTo}>
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

const AccountigDetailPaymentPage = () => {
  return (
    <div className="detailpayment">
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Content style={{ marginTop: "50px" }}>
          <Title level={3}>Payment Request</Title>
          <AccountigDetailPaymentForm />
        </Content>
      </Layout>
    </div>
  );
};

export default AccountigDetailPaymentPage;
