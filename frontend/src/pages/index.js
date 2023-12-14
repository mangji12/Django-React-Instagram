import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import About from "./About";
import Home from "./Home";
import Router from "./accounts/index";
function Root() {
  return (
    <AppLayout>
      <Routes>
        {/* 최상위 페이지일 때만 About가 라우팅됨. 위에서 아래로 순서대로 읽어감.*/}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/accounts/*" element={<Router />}></Route>
      </Routes>
    </AppLayout>
  );
}

export default Root;
