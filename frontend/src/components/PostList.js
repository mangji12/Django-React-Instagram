import React, { useEffect, useState } from "react";
import Axios from "axios";
import Post from "./Post";

function PostList() {
  const [state, setstate] = useState(null);
  const apiurl = "http://127.0.0.1:8000/instagram/api/";

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await Axios.get(apiurl);
        const { data } = response;
        console.log(data);
        setstate(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  return (
    <div>
      {state ? (
        (console.log(state),
        state.map((post) => <Post key={post.id} post={post} />))
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default PostList;
