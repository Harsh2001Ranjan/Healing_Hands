import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Layout from "../components/Layout.js";
const Homepage = () => {
  //Login user data
  const { user } = useSelector((state) => state.user);
  const id = user?.user?._id;
  const getUserData = async () => {
    try {
      console.log(localStorage.getItem("token"));
      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <h1>Home page</h1>
    </Layout>
  );
};

export default Homepage;
