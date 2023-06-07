//rces
import React, { Component } from "react";
import Newsitem from "./NewsItem";
export class News extends Component {
  render() {
    return (
      <div>
        This is a news component
        <Newsitem />
        <Newsitem />
        <Newsitem />
      </div>
    );
  }
}

export default News;
