import './App.css';
import React from "react";
import {ProductShowcase} from "./listt&Keys";
import Counter from "./hoc";

class App extends React.Component {
  render() {
    return (
      <div>
        <ProductShowcase />
      </div>
    )
  }
}

export default App;
