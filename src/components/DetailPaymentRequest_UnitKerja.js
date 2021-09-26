import { Button, Col, Form, Row, Typography, Spin } from "antd";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import "./DetailPaymentRequest.css";
import { useQuery } from "react-query";
import moment from 'moment'

const { Text, Title } = Typography;

const DetailPaymentRequest = () => {
  const params = useParams();
  console.log("params >> ", params);

  const { isLoading, isError, data } = useQuery(`paymentRequest:${params.id}`, async () => {
    const response = await fetch(
      "https://sleepy-lake-27809.herokuapp.com/paymentRequest/" + params.id
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  console.log("value >>", isLoading, isError, data);

  const history = useHistory();
  const navigateTo = React.useCallback(
    () => history.push("/unitkerja-beranda"),
    [history]
  );

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (isLoading) {
    return (
      <Row justify="center">
        <Spin tip="Loading..." />
      </Row>
    );
  }
  
  return (
    <Row justify="center">
      <Col span={12}>
        <Title
          level={3}
          align="center"
          style={{ marginTop: 40, marginBottom: 50 }}
        >
          Detail Payment Request
        </Title>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Diminta Oleh</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{data.diminta_oleh}</Text>
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
              <Text>{data.keperluan}</Text>
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
              <Text>{moment(data.tanggal_pembayaran).format("DD MMMM YYYY hh:mm")} WIB</Text>
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
              <Text>{data.jumlah_payment}</Text>
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
              <Text>{data.terbilang}</Text>
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
              <Text>{data.nama_rek_penerima}</Text>
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
              <Text>{data.no_rek_penerima}</Text>
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
              <Text>{data.request_terkirim}</Text>
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
              <Text id="status-payment"> {data.action[0]}</Text>
            </Col>
          </Row>
          <Row id="button-detail">
            <Col span={3}>
              <Form.Item>
                <Button danger htmlType="submit" onClick={navigateTo}>
                  Kembali
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default DetailPaymentRequest;
