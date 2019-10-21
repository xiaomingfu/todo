import { useState } from "react";

export default initialState => {
  const [state, toggleState] = useState(initialState);
  const handleChange = () => toggleState(!state);
  return [state, handleChange];
};
