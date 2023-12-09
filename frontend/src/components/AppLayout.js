import React from "react";
import AppHeader from "./AppHeader";
import Appfooter from "./Appfooter";

function AppLayout(props) {
  const { children } = props;
  return (
    <div>
      <AppHeader />
      {children}
      <Appfooter />
    </div>
  );
}

export default AppLayout;
