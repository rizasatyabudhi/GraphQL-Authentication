import React, { Component } from "react";
import Header from "./Header";

const App = props => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default App;
