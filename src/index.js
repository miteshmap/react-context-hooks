import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import InputEl from "./inputEl";
import BodyEl from "./bodyEl";
import InputContextProvider from "./InputContext";

// const contentContext = React.createContext("");

function App() {
  return (
    <InputContextProvider>
      {/* <DataConsumer /> */}
      <InputEl />
      <BodyEl />
    </InputContextProvider>
  );
}

// function DataConsumer(props) {
//   const { data, updateData } = useContext(contentContext);

//   return <div onClick={e => updateData("title")}>{JSON.stringify(data)}</div>;
// }

// function InputContextProvider(props) {
//   const [data, setData] = useState({ title: "abc", description: "def" });

//   const updateData = val => {
//     var item = { ...data };
//     item.title = val;
//     setData(item);
//   };

//   return (
//     <contentContext.Provider value={{ data, updateData }}>
//       {props.children}
//     </contentContext.Provider>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
