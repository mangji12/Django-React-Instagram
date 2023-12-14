import React from "react";
import { Card } from "antd";

function Post({ post }) {
  const { caption, author, image } = post;
  return (
    <Card
      style={{ justifyContent: "center" }}
      hoverable
      cover={<img alt={caption} src={image} style={{ width: "250px" }} />}
      actions={["좋아요"]}
    >
      <Card.Meta title={author} description={caption} />
    </Card>
  );
}

export default Post;
