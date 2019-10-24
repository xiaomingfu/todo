import React, { useReducer } from "react";

function couterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.amount };
    case "DECREMENT":
      return { count: state.count - action.amount };
    case "RESET":
      return { count: 0 };
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(couterReducer, { count: 0 });
  return (
    <>
      {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT", amount: 1 })}>
        Add 1
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", amount: 5 })}>
        Add 5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", amount: 1 })}>
        Remove 1
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
}
