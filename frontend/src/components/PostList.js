import React, { useEffect, useState } from "react";
import Axios from "axios";

const apiurl = "http://127.0.0.1:8000/api/";

function PostList() {
  const [state, setstate] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await Axios.get(apiurl);
        const data = response.data;
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
        state.map((item, index) => (
          // <span key={index}>{item}</span>
          <ul key={item.id}>
            <li>
              <img alt={item.id} src={item.photo} />
            </li>
          </ul>
        )))
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default PostList;
