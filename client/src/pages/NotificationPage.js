import React, { useState } from "react";
import Layout from "../components/Layout";
import {} from "./../components/Layout";
import { Tabs, message, notification } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const NotificationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  // Handle read notification
  const handleMarskAllRead = async () => {
    try {
      dispatch(showLoading());
      console.log(user._id);
      const res = await axios.post(
        "/api/v1/user/get-all-notification",
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  // Delete notifications

  const handleDeleteAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/delete-all-notification",
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went Wrong");
    }
  };
  console.log(`${user.seennotification.message}` + "hello");
  return (
    <Layout>
      <h4 className="p-3 text-center">Notification Page</h4>
      <Tabs>
        <Tabs.TabPane tab="UnRead" key={0}>
          <div className="d-flex justify-content-end">
            <h4
              className="p-2"
              style={{ cursor: "pointer" }}
              onClick={handleMarskAllRead}
            >
              {" "}
              Mark All Read
            </h4>
          </div>

          {user?.notification.map((notificationMgs) => (
            <div
              className="card"
              onClick={() => navigate(notificationMgs.onClickPath)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-text">{notificationMgs.message}</div>
            </div>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Read" key={1}>
          <div className="d-flex justify-content-end">
            <h4
              className="p-2 text-primary"
              style={{ cursor: "pointer" }}
              onClick={handleDeleteAllRead}
            >
              {" "}
              Delete All Read
            </h4>
          </div>

          {/* {user?.seennotification?.map((notificationMgs) => (
            <div
              className="card"
              onClick={() => navigate(notificationMgs.onClickPath)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-text">{notificationMgs.message}</div>
            </div>
          ))} */}
          {user?.seennotification?.length === 0 ? (
            <div>This is empty</div>
          ) : (
            user?.seennotification?.map((notificationMgs) => (
              <div
                className="card"
                onClick={() => navigate(notificationMgs.onClickPath)}
                style={{ cursor: "pointer" }}
              >
                <div className="card-text">{notificationMgs.message}</div>
              </div>
            ))
          )}
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  );
};

export default NotificationPage;
