import React from "react";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Layout, Row, Col, Statistic, Divider } from "antd";
import { IDeath, ICase } from "../context/types";
const { Content } = Layout;
const Details: React.FC<{ deaths: IDeath; cases: ICase; tests: number }> = ({
  deaths,
  cases,
  tests,
}) => {
  return (
    <>
      <Content>
        <Divider orientation="left" style={{ color: "grey", fontWeight: 600 }}>
          Deaths
        </Divider>
        <Row gutter={16}>
          <Col span={8}>
            <Statistic
              title="1M_pop"
              value={deaths.M_pop == null ? "No data" : deaths.M_pop}
              valueStyle={{ color: "#3f8600", fontSize: 18 }}
              prefix={
                deaths.M_pop > 10 ? <ArrowUpOutlined /> : <ArrowDownOutlined />
              }
            />
          </Col>
          <Col span={8}>
            <Statistic
              title="New"
              value={deaths.new == null ? "No data" : deaths.new}
              valueStyle={{ color: "#3f8600", fontSize: 18 }}
              prefix={
                deaths.new > 1000 ? <ArrowUpOutlined /> : <ArrowDownOutlined />
              }
            />
          </Col>
          <Col span={8}>
            <Statistic
              title="Total"
              value={deaths.total}
              valueStyle={{ color: "red", fontSize: 18 }}
              prefix={
                deaths.total > 1000 ? (
                  <ArrowUpOutlined />
                ) : (
                  <ArrowDownOutlined />
                )
              }
            />
          </Col>
        </Row>
        <Divider orientation="left" style={{ color: "grey", fontWeight: 600 }}>
          Cases
        </Divider>
        <Row gutter={24}>
          <Col span={8}>
            <Statistic
              title="1M_pop"
              value={cases.M_pop == null ? "No data" : cases.M_pop}
              valueStyle={{ color: "#3f8600", fontSize: 18 }}
              prefix={
                cases.M_pop > 10 ? <ArrowUpOutlined /> : <ArrowDownOutlined />
              }
            />
          </Col>
          <Col span={8}>
            <Statistic
              title="New"
              value={cases.new == null ? "No data" : cases.new}
              valueStyle={{ color: "#3f8600", fontSize: 18 }}
              prefix={
                cases.new > 1000 ? <ArrowUpOutlined /> : <ArrowDownOutlined />
              }
            />
          </Col>
          <Col span={8}>
            <Statistic
              title="Active"
              value={cases.active == null ? "No data" : cases.active}
              valueStyle={{ color: "#3f8600", fontSize: 18 }}
              prefix={
                cases.active > 1000 ? (
                  <ArrowUpOutlined />
                ) : (
                  <ArrowDownOutlined />
                )
              }
            />
          </Col>
          <Col span={8}>
            <Statistic
              title="Recovered"
              value={cases.recovered == null ? "No data" : cases.recovered}
              valueStyle={{ color: "#3f8600", fontSize: 18 }}
              prefix={
                cases.recovered > 1000 ? (
                  <ArrowUpOutlined />
                ) : (
                  <ArrowDownOutlined />
                )
              }
            />
          </Col>
          <Col span={8}>
            <Statistic
              title="Total"
              value={cases.total == null ? "No data" : cases.total}
              valueStyle={{ color: "#3f8600", fontSize: 18 }}
              prefix={
                cases.total > 1000 ? <ArrowUpOutlined /> : <ArrowDownOutlined />
              }
            />
          </Col>
          <Col span={8} style={{ backgroundColor: "#DCE5CD" }}>
            <Statistic
              title="Tests"
              value={tests == null ? "No data" : tests}
              valueStyle={{
                color: "red",
                fontSize: 18,
                fontWeight: 500,
              }}
              prefix={
                tests > 1000 ? <ArrowUpOutlined /> : <ArrowDownOutlined />
              }
            />
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default Details;
