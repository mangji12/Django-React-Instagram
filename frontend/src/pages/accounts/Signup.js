import { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { useNavigate } from "react-router-dom";
import React from "react";
import Axios from "axios";

export default function Signup() {
  const [fieldErrors, setfieldErrors] = useState({});
  const navigate = useNavigate();

  // console.log(navigate);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = async (values) => {
    const { username, password } = values;
    const apiurl = "http://127.0.0.1:8000/accounts/api/signup/";

    setfieldErrors({});
    // console.log("username :", username, "password :", password);
    try {
      const response = await Axios.post(apiurl, { username, password });
      console.log("response: ", response);
      notification.success({
        message: "회원가입 성공!",
        description: "회원가입을 환영합니다.",
      });
      // window.location.href = "/accounts/login";
      navigate("../login");
    } catch (error) {
      // 서버로부터 받은 에러를 표현하는 로직
      if (error.response) {
        notification.error({
          message: "회원가입 실패!",
          description: "아이디/비밀번호를 확인해주세요.",
        });
        const { data: fieldErrorMessages } = error.response;
        setfieldErrors(
          Object.entries(fieldErrorMessages).reduce(
            (acc, [fieldName, errors]) => {
              acc[fieldName] = {
                validatestatus: "error",
                // help: errors.join(" "),
              };
              return acc;
            },
            {}
          )
        );
      }
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            min: 10,
            message: "아이디를 입력하세요",
          },
        ]}
        hasFeedback
        {...fieldErrors.username}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            min: 5,
            message: "비밀번호를 5글자 이상 입력하세요",
          },
        ]}
        {...fieldErrors.password}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
