import React from "react";
import { Avatar, Card } from "antd";
import { HeartOutlined, HeartFilled, UserOutlined } from "@ant-design/icons";
function Post({ post }) {
  const { caption, author, image } = post;
  return (
    <Card
      style={{ justifyContent: "center" }}
      hoverable
      cover={<img alt={caption} src={image} style={{ width: "250px" }} />}
      actions={[<HeartOutlined />]}
    >
      <Card.Meta
        avatar={<Avatar size="large" icon={<UserOutlined />} />}
        title={author}
        description={caption}
      />
    </Card>
  );
}

export default Post;
