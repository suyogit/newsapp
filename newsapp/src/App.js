//import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
//import Newsitem from "./components/Newsitem";
//class based component
export default class App extends Component {
  render() {
    //lifecycle method

    return (
      <div>
        <Navbar />
        <News />
      </div>
    );
  }
}
