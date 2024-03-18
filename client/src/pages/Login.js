import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../redux/features/userSlice";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //Form handler
  const onFinishHandler = async (values) => {
    console.log("hello");
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      const user = res.data.user; //extracteduser from response.............
      console.log(res);
      // window.location.reload(); // Changed to avoid hard reload...................
      //done some changes here
      dispatch(hideLoading());
      if (res.data.success) {
        dispatch(setUser(user));
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfull");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };
  return (
    //     <div classname="Form-container">
    //   <Form layout="vertical" onfinish="{onFinishHandler}" classname="register-Form">
    //     <h3 classname="text-center">Login Form</h3>
    //     <Form.item label="Email" name="email">
    //       <input type="email" required />
    //     </Form.item>
    //     <Form.item label="Password" name="Password">
    //       <input type="Password" required />
    //     </Form.item>
    //     <link to="/register" classname="m-2" />
    //     Register
    //     <button classname="btn btn-primary" type="submit">
    //       Login
    //     </button>
    //   </Form>
    // </div>

    <div className="Form-container">
      <Form
        layout="vertical"
        onFinish={onFinishHandler}
        className="register-form"
        style={{ width: "200px", alignContent: "center" }}
      >
        <h3 className="text-center">Login Form</h3>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <a href="/register" className="m-2">
            Register
          </a>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
