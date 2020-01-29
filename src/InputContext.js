import React, { createContext, useState } from "react";

export const InputContext = createContext("");

const InputContextProvider = props => {
  const [inputVal, setInputVal] = useState("");

  const updateInputVal = val => {
    console.log(val);
    setInputVal(val);
  };

  return (
    <InputContext.Provider value={{ inputVal, updateInputVal }}>
      {props.children}
    </InputContext.Provider>
  );
};

export default InputContextProvider;
