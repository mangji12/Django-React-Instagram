import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";
import Signup from "./Signup";

export default function Accounts() {
  return (
    <Routes path="/accounts">
      {/*부모 디렉토리를 받음 */}
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
}
