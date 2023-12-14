import React from "react";
import { Input, Menu } from "antd";
import "./AppLayout.scss";
import StoryList from "./StoryList";
import SuggestionList from "./SuggestionList";
import Suggestion from "./Suggestion";
function AppLayout(props) {
  const { children } = props;
  return (
    <div className="app">
      <div className="header">
        <div className="pagetitle">
          <h1>Instagram</h1>
        </div>
        <div className="search">
          <Input.Search placeholder=""></Input.Search>
        </div>
        <div className="topnav">
          <Menu mode="horizontal">
            <Menu.Item>Menu1</Menu.Item>
            <Menu.Item>Menu2</Menu.Item>
            <Menu.Item>Menu3</Menu.Item>
          </Menu>
        </div>
      </div>
      <div className="sidebar">
        <StoryList style={{ marginBottom: "1rem" }} />
        <SuggestionList>
          <Suggestion />
        </SuggestionList>
      </div>
      <div className="contents">{children}</div>
      <div className="footer">footer</div>
    </div>
  );
}

export default AppLayout;
