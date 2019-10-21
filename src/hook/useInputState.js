import { useState } from "react";
export default InitialVal => {
  const [value, setValue] = useState(InitialVal);
  const handleChange = e => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};
