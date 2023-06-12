//News.js
//rces
import React, { Component } from "react";
import Newsitem from "./NewsItem";
//import Navbar from "./Navbar";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter=(string)=>
  {
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props) {
    super(props);
    //  console.log("I am a constructor from News component");
    this.state = {
      //articles: this.articles,
      articles: [],
      loading: false,
      page: 1,
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)}-Newsapp`;
  }
async updateNews()
{
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=1ab7b5da78d9442ab0abe5ebdddaebc3&page=1&pageSize=${this.props.pageSize}`;
  this.setState({ loading: true });
  let data = await fetch(url);
  let parsedData = await data.json();
  // console.log(parsedData);
  this.setState({
    articles: parsedData.articles,
    totalResults: parsedData.totalResults,
    loading: false,
  });
}

  async componentDidMount() {
 
    this.updateNews()
  }
  handlePreviousClick = async () => {
  
    this.setState({page:this.state.page-1})
    this.updateNews()
  };
  handleNextClick = async () => {

    this.setState({page:this.state.page+1})
    this.updateNews()
  };
  render() {
    return (
      <div className="container my-3">
        {/* <Navbar />  */}
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          News app-{this.capitalizeFirstLetter(this.props.category)} category
        </h1>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 85)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="conatiner d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
