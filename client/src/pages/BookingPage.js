import Layout from "../components/Layout";
//.............................................
import { useSelector } from "react-redux";
//............................................
import React, { useState, useEffect } from "react";
import moment from "moment";

import { useParams } from "react-router-dom";
import axios from "axios";
import { DatePicker, TimePicker } from "antd";
const BookingPage = () => {
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [data, setDate] = useState();
  const [timings, setTimings] = useState();
  const [isAvailable, setisAvailable] = useState();
  //Login user data
  const { user } = useSelector((state) => state.user);
  const id = user?.user?._id;
  const getUserData = async () => {
    try {
      console.log(localStorage.getItem("token"));
      const res = await axios.post(
        "/api/v1/doctor/getDoctorById ",
        //...................................
        { doctorId: params.doctorId },
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
    //eslint-disable-next-line
  }, []);
  return (
    <Layout>
      <h3>Booking Page</h3>
      <div className="container m-2">
        {doctors && (
          <div>
            <h4>
              Dr.{doctors.firstName} {doctors.lastName}
            </h4>
            <h4>Fees : {doctors.feesPerCunsultation} </h4>
            {/* <h4>
              Timings: {doctors.timing[0]}-{doctors.timing[1]}
            </h4> */}
            <h4>Timings:</h4>
            <div className="d-flex flex-column w-50">
              <DatePicker
                className="m-2"
                format="DD-MM-YYYY"
                onChange={(value) =>
                  setDate(moment(value).format("DD-MM-YYYY"))
                }
              />
              <TimePicker.RangePicker
                className="m-2"
                form="HH:mm"
                onChange={(values) =>
                  setTimings([
                    moment(values[0]).format("HH:mm"),
                    moment(values[1]).format("HH:mm"),
                  ])
                }
              />
              <button className="btn btn-primary mt-2">
                Check Availability
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookingPage;
