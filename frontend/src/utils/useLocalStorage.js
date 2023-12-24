import { useState, useEffect } from "react";

export function getStorageItem(key, initialValue) {
  let currentValue;
  try {
    currentValue = JSON.parse(
      localStorage.getItem(key) || String(initialValue)
    );
  } catch (error) {
    currentValue = initialValue;
  }

  return currentValue;
}

export function setStorageItem(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

export default function useLocalStorage(key, currentValue) {
  const [value, setValue] = useState(() => {
    return getStorageItem(key, currentValue);
  });

  return [value, setValue];
}
