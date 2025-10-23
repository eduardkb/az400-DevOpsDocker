
import React from "react";
import Header from "./components/Header";
import MainPannel from "./components/MainPannel";
import TestRead from "./components/TestRead";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
      <Header />
      <MainPannel />
      <TestRead />
    </div>
  );
}

export default App;

