import React from "react";
import { Routes, Route, useRoutes, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";
import Signup from "./Signup";
import LoginRequiredPage from "../../utils/LoginRequiredPage";

export default function Accounts() {
  // const navigate = useNavigate();

  // return (
  //   <Routes>
  //     <Route path={"/signup"} element={<Signup />} />
  //     <Route path={"/login"} element={<Login />} />
  //     <Route
  //       path={"/profile"}
  //       element={<LoginRequiredPage component={<Profile />} />}
  //     />
  //   </Routes>
  // );

  // 동적 라우팅 시에는 useRoutes를 사용
  const routes = useRoutes([
    {
      path: "/profile",
      element: <LoginRequiredPage component={<Profile />} />,
    },
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
  ]);

  // console.log(routes); // 정의된 라우팅 정보 확인
  return routes; // Routes 컴포넌트 사용하지 않음</Routes>;
}
