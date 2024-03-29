import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Layout from "../components/Layout.js";
import { Row } from "antd";
import DoctorList from "../components/DoctorList.js";
const Homepage = () => {
  const [doctors, setDoctors] = useState([]);
  //Login user data
  const { user } = useSelector((state) => state.user);
  const id = user?.user?._id;
  const getUserData = async () => {
    try {
      console.log(localStorage.getItem("token"));
      const res = await axios.get(
        "/api/v1/user//getAllDoctors ",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      // console.log(res.data);
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <h1 className="text-center">Home page</h1>
      <Row>
        {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
      </Row>
    </Layout>
  );
};

export default Homepage;
