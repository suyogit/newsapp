//News.js
//rces
import React, { Component } from "react";
import Newsitem from "./NewsItem";
import Navbar from "./Navbar";
export class News extends Component {
  constructor() {
    super();
    console.log("I am a constructor from News component");
    this.state = {
      //articles: this.articles,
      articles:[],
      loading: false,
      page:1

    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1ab7b5da78d9442ab0abe5ebdddaebc3&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults:parsedData.totalResults });
  }
   handlePreviousClick=async()=>
  {
    console.log("previous")
    let url =
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1ab7b5da78d9442ab0abe5ebdddaebc3&page=${this.state.page-1}&pageSize=20`;
  let data = await fetch(url);
  let parsedData = await data.json();
this.setState(
{
  page: this.state.page-1,
  articles:parsedData.articles

})  
  }
   handleNextClick=async()=>
  {
    console.log("next")
    if(this.state.page+1>Math.ceil(this.state.totalResults/20))
    {
//no more page available
    }
    else{
    let url =
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1ab7b5da78d9442ab0abe5ebdddaebc3&page=${this.state.page+1}&pageSize=20`;
  let data = await fetch(url);
  let parsedData = await data.json();
  
this.setState({
  page: this.state.page+1,
  articles:parsedData.articles
})}
  }
  render() {
    return (
      <div className="container my-3">
         <Navbar /> 
        <h2>News app- Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 85) : ""
                  }
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            )
          })}
        </div>
        <div className="conatiner d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr;Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;

