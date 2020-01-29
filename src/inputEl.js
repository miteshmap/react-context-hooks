import React, { useContext } from "react";
import { InputContext } from "./InputContext";

const InputEl = () => {
  const { inputVal, updateInputVal } = useContext(InputContext);

  return (
    <div>
      <label>Type something:</label>
      <input
        name="text"
        type="text"
        onChange={e => updateInputVal(e.target.value)}
      />
    </div>
  );
};

export default InputEl;
