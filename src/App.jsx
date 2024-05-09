import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Luz from "./containers/Luz";
import Formulario from "./components/Formulario";
import UserContext from "./contexts/UserContext";
import CounterState from "./containers/CounterState";
import CounterReducer from "./containers/CounterReducer";
import CounterHook from "./containers/CounterHook";

function App() {
  const user = {
    username: "miusername",
  };
  return (
    <>
      {/* <Luz /> */}
      <UserContext.Provider value={user}>
        <Formulario />
        <CounterState />
        <CounterReducer />
        <CounterHook />
      </UserContext.Provider>
    </>
  );
}

export default App;
