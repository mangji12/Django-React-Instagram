import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./pages";
import { BrowserRouter } from "react-router-dom";
import { TokenProvider } from "./store";

// const store = configureStore({ reducer: rootReducer });

const root = createRoot(document.getElementById("root"));

root.render(
  <TokenProvider>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </TokenProvider>
);

// // ReactDOM.render(
// //   <BrowserRouter>
// <Provider store={store}>

//   </Provider>
// //   </BrowserRouter>,

// //   document.getElementById("root") // 이 위치에 React 앱이 렌더링됩니다
// // );
