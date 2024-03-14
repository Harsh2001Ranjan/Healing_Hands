import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
const Login = () => {
  //Form handler
  const onFinishHandler = (values) => {
    console.log(values);
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
