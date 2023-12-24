import { useEffect, useState } from "react";
import { Card, Form, Input, Button, Checkbox, notification } from "antd";
import { useNavigate } from "react-router-dom";
import React from "react";
import Axios from "axios";
// import useLocalStorage from "../../utils/useLocalStorage1";
import { useTokenContext, set_token, delete_token } from "../../store";

export default function Login() {
  const { state, dispatch } = useTokenContext();
  const navigate = useNavigate();
  // const [Tokens, setjwtToken] = useLocalStorage("Tokens", {});
  const [fieldErrors, setfieldErrors] = useState({});

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = async (values) => {
    const { username, password } = values;
    const apiurl = "http://127.0.0.1:8000/accounts/api/token/";

    setfieldErrors({});

    try {
      const response = await Axios.post(apiurl, { username, password });
      console.log("response :", response.data.refresh);

      // console.log(response.data["access"], "and", response.data["refresh"]);
      const {
        data: { access },
      } = response;
      // dispatch({ type: "SET_TOKEN", payload: access });
      dispatch(set_token(access));

      const {
        data: { refresh },
      } = response;
      // dispatch({ type: "SET_TOKEN", payload: refresh });
      // console.log(refresh);

      if (window.localStorage.jwtToken)
        console.log("로컬에 저장된 토큰: ", localStorage.jwtToken);
      // console.log("토큰을 정상적으로 로딩하였습니다 : ", Token);
      notification.success({
        message: "로그인 성공!",
        description: "메인 페이지로 이동합니다.",
      });
      // window.location.href = "/accounts/login";
      navigate("../profile");
    } catch (error) {
      // 서버로부터 받은 에러를 표현하는 로직
      if (error.response) {
        const { data: fieldErrorMessages } = error.response;
        notification.error({
          message: "로그인 실패!",
          // description: fieldErrorMessages.non_field_errors[0],
        });
        // setfieldErrors(
        //   Object.entries(fieldErrorMessages).reduce(
        //     (acc, [fieldName, errors]) => {
        //       acc[fieldName] = {
        //         validatestatus: "error",
        //         help: errors.join(" "),
        //       };
        //       return acc;
        //     },
        //     {}
        //   )
        // );
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
        // onFinishFailed={onFinishFailed}
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
