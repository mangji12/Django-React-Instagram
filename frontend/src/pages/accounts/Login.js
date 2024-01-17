import { useEffect, useState } from "react";
import { useCookies, Cookies } from "react-cookie";
import { Card, Form, Input, Button, Checkbox, notification } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import Axios from "axios";
// import useLocalStorage from "../../utils/useLocalStorage1";
import { useTokenContext, set_token, delete_token } from "../../store";

export default function Login() {
  // contextAPI를 사용하고 싶어서 쓸 수 있도록 넘긴 값들을 받음.
  // const { state, dispatch } = useTokenContext();
  const navigate = useNavigate();
  const [fieldErrors, setfieldErrors] = useState({});
  const [cookie, setCookie] = useCookies(["access_token", "refresh_token"]);

  const onCookie = (name, token) => {
    setCookie(name, token);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = async (values) => {
    const { username, password } = values;
    const apiurl = "http://127.0.0.1:8000/accounts/api/token/";

    setfieldErrors({});

    try {
      const response = await Axios.post(apiurl, { username, password });
      const token = await response.data;
      await onCookie("access_token", token.access);
      await onCookie("refresh_token", token.refresh);
      await console.log(
        "쿠키 존재여부 :",
        document.cookie.getItem(["access_token"])
      );
      notification.success({
        message: "로그인 성공!",
        description: "메인 페이지로 이동합니다.",
      });
      navigate("/accounts/profile");
    } catch (error) {
      if (error.response) {
        const { data: fieldErrorMessages } = error.response;
        notification.error({
          message: "로그인 실패!",
          description: fieldErrorMessages.non_field_errors[0],
        });
        setfieldErrors(
          Object.entries(fieldErrorMessages).reduce(
            (acc, [fieldName, errors]) => {
              acc[fieldName] = {
                validatestatus: "error",
                help: errors.join(" "),
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
    <Card title="로그인">
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
              min: 4,
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
              min: 2,
              message: "비밀번호를 2글자 이상 입력하세요",
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
    </Card>
  );
}
