//import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
//import Navbar from "./components/Navbar";
//import News from "./components/News";
import Newsitem from "./components/NewsItem";
//class based component
export default class App extends Component {
  render() {
    //lifecycle method

    return (
      <div className="container my-3">
        <h2>News app- Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <Newsitem title="myTitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <Newsitem title="myTitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <Newsitem title="myTitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}
