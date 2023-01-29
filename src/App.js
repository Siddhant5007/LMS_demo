import logo from "./logo.svg";
import "./App.css";

import { Col, Row } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space, Button } from "antd";
import Instuctor from "./Components/Instuctor";
import React, { useState } from "react";

function App() {
  const [instuctor, setInstuctor] = useState([
    {
      avtUrl: "https://siai.info/assets/img/team/kailas.jpeg",
      name: "Dr. Kailash A. Hambarde",
      pricing: "20,000",
      rating: 4,
      subject: "JAVA, PROGRAMMING",
    },
    {
      avtUrl: "https://siai.info/assets/img/team/shyam.jpeg",
      name: "Mr. Shyam Alaspure",
      pricing: "15,000",
      rating: 4.2,
      subject: "DATA SCIENCE",
    },
    {
      avtUrl: "https://siai.info/assets/img/team/ajeet.jpeg",
      name: "Dr. Ajeet Ram Pathak",
      pricing: "25,000",
      rating: 3.5,
      subject: "PYTHON DEVELOPER",
    },
    {
      avtUrl: "https://siai.info/assets/img/team/shaikh.jpeg",
      name: "Dr. Shaikh Husen",
      pricing: "20,000",
      rating: 3.9,
      subject: "WEB DEVELOPMENT",
    },
  ]);

  const [searchInput, setSearchInput] = useState("");
  const [filterData, setFilterData] = useState(instuctor);

  function handleChange(event) {
    console.log(event.target.value);
    if (event.target.value == "") {
      setFilterData(instuctor);
    } else {
      setSearchInput(event.target.value);
    }
  }

  const searchQuery = () => {
    console.log("searchInput -->", searchInput);
    const str = searchInput.toLowerCase();
    if (str !== "all") {
      const data = instuctor.filter((obj) => {
        const sub = obj.subject.toLowerCase();

        if (sub.includes(str)) {
          return obj;
        }
      });
      console.log("data -->", data);
      setFilterData(data);
    } else {
      setFilterData(instuctor);
    }
  };

  return (
    <>
      <Row justify="center" align="middle" style={{ marginTop: "1.8em" }}>
        <Col span={12}>
          <Input.Group compact>
            <Input
              style={{ width: "calc(80%)" }}
              placeholder="Search Subjects"
              onChange={handleChange}
            />
            <Button
              onClick={searchQuery}
              style={{ background: "#10446b", color: "#fff" }}
            >
              Submit
            </Button>
          </Input.Group>
        </Col>
      </Row>

      <Row
        gutter={[8, 8]}
        align="middle"
        style={{ marginTop: "1.8em", padding: "10px" }}
      >
        {filterData.map((obj, i) => {
          return (
            <Col span={6} key={i}>
              <Instuctor data={obj} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default App;
