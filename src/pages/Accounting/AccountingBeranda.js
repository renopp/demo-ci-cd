import { Button, Row, Space, Table, Tag } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import "../../components/ListPaymentRequest.css";

const data = [
  {
    key: "1",
    no: "1.",
    tgl_request: "08 Juli 2021 10.00 WIB",
    tgl_pembayaran: "10 Juli 2021",
    action: ["menunggu konfirmasi"],
  },
  {
    key: "2",
    no: "2.",
    tgl_request: "05 Juli 2021 13.00 WIB",
    tgl_pembayaran: "10 Juli 2021",
    action: ["disetujui"],
  },
  {
    key: "3",
    no: "3.",
    tgl_request: "18 Juni 2021 14.00 WIB",
    tgl_pembayaran: "10 Juli 2021",
    action: ["rejected by accounting"],
  },
];

const ListPaymentRequestAccounting = () => {
  const history = useHistory();
  const navigateTo = React.useCallback(() => history.push("/accounting-request"), [history]);
  const columns = React.useMemo(
    () => [
      {
        title: "No",
        dataIndex: "no",
        key: "no",
      },
      {
        title: "Tanggal Request",
        dataIndex: "tgl_request",
        key: "tgl_request",
      },
      {
        title: "Tanggal Pembayaran",
        dataIndex: "tgl_pembayaran",
        key: "tgl_pembayaran",
      },
      {
        title: "Action",
        key: "action",
        dataIndex: "action",
        render: (action) => (
          <>
            {action.map((act) => {
              let color;
              if (act === "rejected by accounting") {
                color = "volcano";
              } else if (act === "disetujui") {
                color = "green";
              } else if (act === "menunggu konfirmasi") {
                color = "yellow";
              }
              return (
                <Tag color={color} key={act}>
                  {act.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        key: "buttonDetail",
        render: (text) => (
          <Space size="middle">
            <Button type="primary" onClick={navigateTo}>
              Detail
            </Button>
          </Space>
        ),
      },
    ],
    [navigateTo]
  );

  return (
    <Row
      justify="center"
      style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Table rowClassName={(_, index) => (index % 2 === 0 ? "table-row-light" : "table-row-dark")} columns={columns} dataSource={data} />
    </Row>
  );
};

export default ListPaymentRequestAccounting;
