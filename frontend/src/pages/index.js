import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import About from "./About";
import Home from "./Home";
import Accounts from "./accounts/index";
import LoginRequiredPage from "../utils/LoginRequiredPage";

function Root() {
  return (
    <AppLayout>
      <Routes>
        {/* 최상위 페이지일 때만 About가 라우팅됨. 위에서 아래로 순서대로 읽어감.*/}
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={<LoginRequiredPage component={<About />} />}
        />
        <Route path="/accounts/*" element={<Accounts />} />
      </Routes>
    </AppLayout>
  );
}

export default Root;
