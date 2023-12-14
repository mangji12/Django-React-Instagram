import React from "react";
import "./StoryList.scss";
import { Card } from "antd";

export default function StoryList({ style }) {
  return (
    <div style={style}>
      <Card size="small" title="Stories">
        Stories
      </Card>
    </div>
  );
}
