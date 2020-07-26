import React from "react";
import ReactDOM from "react-dom";
// import CounterApp from "./components/01-useState/CounterApp.js";
// import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook.js";
// import SimpleForm from "./components/02-useEffect/SimpleForm.js";
// import HookApp from "./HookApp";
// import FormWithCustomHook from "./components/02-useEffect/FormWithCustomHook";
import MultipleCustomHook from "./components/03-example/MultipleCustomHook";

ReactDOM.render(
  <React.StrictMode>
    <MultipleCustomHook />
  </React.StrictMode>,
  document.getElementById("root")
);
