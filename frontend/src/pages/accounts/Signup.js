import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
import { Alert } from "antd";

export default function Signup() {
  const apiurl = "http://127.0.0.1:8000/accounts/signup/";
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await Axios.post(apiurl, inputs);
      console.log("회원가입 정보가 정상적으로 업로드 되었습니다.");
      console.log({ inputs });
    } catch (error) {
      console.log(error);
      if (error.response) {
        setErrors({
          username: (error.response.data.username || []).join(" "),
          password: (error.response.data.password || []).join(" "),
        });
      }
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      {JSON.stringify(errors)}
      <div>
        <input type="text" name="username" onChange={onChange} />
        {errors.username && <Alert type="error" message={errors.username} />}
      </div>
      <div>
        <input type="text" name="password" onChange={onChange} />
        {errors.password && <Alert type="error" message={errors.password} />}
      </div>
      <input type="submit" value="회원가입" />
    </form>
  );
}
