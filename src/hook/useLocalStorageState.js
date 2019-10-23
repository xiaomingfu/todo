import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultVal) {
  // make piece of state based of the value in the localStorage or default
  const [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal)
      );
    } catch (e) {
      value = defaultVal;
    }
    return value;
  });
  //use useEffect to update localStorage when state changes

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}
export { useLocalStorageState };
