import React from "react";
import ReactDOM from "react-dom/client";
import Greeting from "./Greeting"
// o import {Greeting} from "./Greeting"

const root = ReactDOM.createRoot(document.getElementById("root"));

//shift option f    para formatear codigo
root.render(
  <>
    <Greeting />
    <Greeting />
    <Greeting />
  </>
);
