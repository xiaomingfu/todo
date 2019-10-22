import { useState, useEffect } from "react";

function useLocalStorageState(key, initialVal) {
  // make piece of state based of the value in the localStorage or default
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(initialVal));
    } catch (e) {
      val = initialVal;
    }
    return val;
  });
  //use useEffect to update localStorage when state changes

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}
export default useLocalStorageState;
