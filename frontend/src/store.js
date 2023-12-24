import React, { createContext, useReducer, useContext } from "react";
import { setStorageItem } from "./utils/useLocalStorage1";

const TokenContext = createContext("");

// action에는 type이 무조건 담김.
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      const { payload: Tokens } = action;
      return setStorageItem("Token", Tokens);
    case "DELETE_TOKEN":
      return setStorageItem("Token", "");
    default:
      return state;
  }
};

// // Actions
const SET_TOKEN = "APP/SET_TOKEN";
const DELETE_TOKEN = "APP/DELETE_TOKEN";

// dispatch용 함수
export const set_token = (Token) => ({
  type: "SET_TOKEN",
  payload: Token,
});

export const delete_token = () => ({
  type: "DELETE_TOKEN",
});

export const TokenProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, "");
  return (
    <TokenContext.Provider value={{ state, dispatch }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => useContext(TokenContext);
