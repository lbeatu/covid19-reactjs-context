import React, { useState, useEffect, useContext } from "react";

import { ClockCircleOutlined } from "@ant-design/icons";
import CovidContext from "../context/covid/covidContext";
import { Pagination, Card, Spin, Space, Timeline, Input, Layout } from "antd";
import { IStatistics } from "../context/types";
import Details from "./Details";
import { filterStatistics } from "../context/covid/covidStateProvider";

const { Search } = Input;
const { Content } = Layout;
const gridStyle = {
  width: "25%",
  height: "45%",
  textAlign: "center",
} as React.CSSProperties;
const Statistics: React.FC<{ statistics: Object[] | any }> = ({
  statistics,
}) => {
  const { state, dispatch } = useContext(CovidContext);
  const { filtered } = state;
  const [begin, setBegin] = useState(0);
  const [end, setEnd] = useState(12);
  const [activePage, setActivePage] = useState(1);

  let covidStatistics: any;
  let setCovidStatistics: any;
  [covidStatistics, setCovidStatistics] = useState([]);
  useEffect(() => {
    if (statistics) {
      setBegin(activePage * 12 - 12);
      setEnd(activePage * 12);
    }
  }, [activePage]);

  useEffect(() => {
    if (statistics !== null) {
      const statisticsData = statistics.slice(begin, end);
      setCovidStatistics(statisticsData);
    }
    if (filtered !== null) {
      setCovidStatistics(filtered);
    }
  }, [statistics, begin, filtered]);
  const handleSetPage = (event: any, data: any) => {
    setActivePage(event);
  };
  return (
    <>
      <Content
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Pagination
          total={statistics && Math.ceil(statistics.length)}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} items`
          }
          pageSize={12}
          defaultCurrent={1}
          onChange={handleSetPage}
        />
        <Search
          placeholder="Search country,continent"
          size="large"
          onSearch={(value: any) => filterStatistics(dispatch, value)}
          style={{ width: 400 }}
        />
      </Content>
      <Card>
        {statistics !== null ? (
          covidStatistics.map((country: IStatistics, key: number) => (
            <Card.Grid style={gridStyle} key={key}>
              <Timeline mode={"alternate"}>
                <Timeline.Item color="green" label={country.continent}>
                  <p style={{ fontWeight: 900, fontSize: 18 }}>
                    {country.country}
                  </p>
                </Timeline.Item>
                <Timeline.Item
                  dot={<ClockCircleOutlined className="timeline-clock-icon" />}
                  color="green"
                  label="Day"
                >
                  {country.day}
                </Timeline.Item>
                <Timeline.Item color="orange" label="Population">
                  {country.population.toLocaleString()}
                </Timeline.Item>
              </Timeline>
              <Details
                deaths={country.deaths}
                cases={country.cases}
                tests={country.tests.total}
              />
            </Card.Grid>
          ))
        ) : (
          <Space size="middle" style={{ textAlign: "center" }}>
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
          </Space>
        )}
      </Card>
    </>
  );
};

export default Statistics;
