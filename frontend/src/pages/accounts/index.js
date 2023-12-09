import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";

function Router() {
  return (
    <Routes path="/accounts">
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default Router;
