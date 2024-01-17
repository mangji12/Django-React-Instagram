import React, { createContext, useReducer, useContext, useEffect } from "react";
import { getStorageItem, setStorageItem } from "./utils/useLocalStorage1";
import useReducerWithSideEffects, {
  UpdateWithSideEffect,
} from "use-reducer-with-side-effects";
// 처음에 콘텍스트 api 만든다고 선언
const TokenContext = createContext("");

// action에는 type이 무조건 담김.
const reducer = (state, action) => {
  if (action.type === "SET_TOKEN") {
    const { payload: Tokens } = action;
    const newState = { ...state, Tokens, isAuthenticated: true };
    return UpdateWithSideEffect(newState, (state, dispatch) => {
      setStorageItem("Tokens", Tokens);
    });
  } else if (action.type === "DELETE_TOKEN") {
    const newState = { ...state, Tokens: "", isAuthenticated: false };
    return UpdateWithSideEffect(newState, (state, dispatch) => {
      setStorageItem("Tokens", "");
    });
  }
  return state;
};

// // Actions
const SET_TOKEN = "APP/SET_TOKEN";
const DELETE_TOKEN = "APP/DELETE_TOKEN";

// dispatch용 함수
export const set_token = (Tokens) => ({
  type: "SET_TOKEN",
  payload: Tokens,
});

export const delete_token = () => ({
  type: "DELETE_TOKEN",
});

export const TokenProvider = ({ children }) => {
  const Tokens = getStorageItem("Tokens", "");
  const [state, dispatch] = useReducerWithSideEffects(reducer, {
    Tokens,
    isAuthenticated: Tokens.length > 0,
  });

  return (
    <TokenContext.Provider value={{ state, dispatch }}>
      {children}
    </TokenContext.Provider>
  );
};

// 만든 컨텍스트는 쓰이겠다고 선언. 사용하고 싶으면 useTokenContext로 사용.
export const useTokenContext = () => useContext(TokenContext);
