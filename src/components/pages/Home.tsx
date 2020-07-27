import React, { useEffect, useContext } from "react";
import Statistics from "../Statistics";
import CovidContext from "../../context/covid/covidContext";
import { GetStatistics } from "../../context/covid/covidStateProvider";

import { Layout, Button, Menu } from "antd";

const { Content, Header } = Layout;

const Home: React.FC = () => {
  const { state, dispatch } = useContext(CovidContext);
  const { statistics } = state;

  useEffect(() => {
    GetStatistics(dispatch);
  }, [statistics]);

  const onClick = () => {
    GetStatistics(dispatch);
  };

  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">COVID-19 Statistics</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "150px 50px" }}>
          <Button
            onClick={onClick}
            style={{
              backgroundColor: "#001529",
              color: "whitesmoke",
              margin: "0 0 10px 0",
            }}
            size={"large"}
          >
            Refresh Statistics
          </Button>

          <Statistics statistics={statistics} />
        </Content>
      </Layout>
    </>
  );
};

export default Home;
