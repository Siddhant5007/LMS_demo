import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Col, Divider, Row, Card, Avatar, Typography, Rate } from "antd";

const Instuctor = (props) => {
  const { data } = props;
  return (
    <>
      <div className="site-card-border-less-wrapper">
        <Card bordered={true} style={{ width: 300, textAlign: "center" }}>
          <Avatar size={75} src={data.avtUrl} icon={<UserOutlined />} />
          <h3 style={{ margin: "0.3em" }}>{data.name}</h3>
          <h5 style={{ margin: "0.3em" }}>{data.subject}</h5>
          <Typography>Pricing: {data.pricing} INR</Typography>
          <Rate disabled allowHalf defaultValue={data.rating} />
        </Card>
      </div>
    </>
  );
};

export default Instuctor;
