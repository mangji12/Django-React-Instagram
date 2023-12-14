import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./Suggestion.scss";

export default function Suggestion() {
  return (
    <div className="suggestion">
      <div className="avatar">
        <UserOutlined />
      </div>
      <div className="username">Username</div>
      <div className="actions">
        <Button>Follow</Button>
      </div>
    </div>
  );
}
