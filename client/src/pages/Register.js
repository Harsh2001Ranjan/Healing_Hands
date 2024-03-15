import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  //form handler
  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/user/register", values);
      if (res.data.success) {
        message.success("Registered Successfully !");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    // <div>
    //   &lt;&gt;
    //   <div classname="form-container">
    //     <form
    //       layout="vertical"
    //       onfinish="{onFinishHandler}"
    //       classname="register-form"
    //     >
    //       <h3 classname="text-center">Register Form</h3>
    //       <form.item label="Name" name="name">
    //         <input type="text" required />
    //       </form.item>
    //       <form.item label="Email" name="email">
    //         <input type="email" required />
    //       </form.item>
    //       <form.item label="Password" name="Password">
    //         <input type="Password" required />
    //       </form.item>
    //       <link to="/login" classname="m-2" />
    //       Login
    //       <button classname="btn btn-primary" type="submit">
    //         Register
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div>
      &lt;&gt;
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register Form</h3>
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <a href="/login" className="m-2">
              Login
            </a>
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
