import { useState } from "react";

export default InitialVal => {
  const [value, setValue] = useState(InitialVal);
  const updateValue = e => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, updateValue, reset];
};
