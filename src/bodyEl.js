import React, { useContext } from "react";
import { InputContext } from "./InputContext";

const BodyEl = props => {
  const { inputVal } = useContext(InputContext);

  return <h2>Start editing to see some magic happen::: {inputVal}</h2>;
};

export default BodyEl;
