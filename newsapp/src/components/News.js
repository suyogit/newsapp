//News.js
//rces
//import React, { Component } from "react";
import React, { useState, useEffect } from "react";

import Newsitem from "./NewsItem";
//import Navbar from "./Navbar";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
//export class News extends Component {
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  //  document.title = `${this.capitalizeFirstLetter(
  //   props.category
  // )}-Newsapp`;
  // static defaultProps = {
  //   country: "in",
  //   pageSize: 9,
  //   category: "general",
  // };
  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // constructor(props) {
  //   super(props);
  //  console.log("I am a constructor from News component");
  // this.state = {
  //   //articles: this.articles,
  //   articles: [],
  //   loading: true,
  //   page: 1,
  //   totalResults: 0,
  // };
  // document.title = `${this.capitalizeFirstLetter(
  //   props.category
  // )}-Newsapp`;
  //}
  const updateNews = async () => {
    props.setProgress(0);
    //let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    // this.setState({ loading: true });
    setLoading(true);

    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    // console.log(parsedData);
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}-Newsapp`;
    // this.updateNews();
    updateNews();
    //eslint-disable-next-line
  }, []);

  // async componentDidMount() {
  //   this.updateNews();
  // }

  //   const handlePreviousClick = async () => {
  //    // this.setState({ page: this.state.page - 1 });
  // setPage(page-1)
  //     //this.updateNews();
  //     updateNews();
  //   };
  //   const handleNextClick = async () => {
  //     this.setState({ page: this.state.page + 1 });
  //     //this.updateNews();
  //     updateNews();
  //   };
  const fetchmoreData = async () => {
    //  this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country
      }&category=${props.category}&apikey=${props.apiKey}&page=${page +
      1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    //let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    // });
  };
  // render() {
  {
    return (
      <>
        {/* <Navbar />  */}
        {/* <h1 className="text-center" style={{ margin: "35px 0px" }}>
           News app-{this.capitalizeFirstLetter(props.category)} category
        </h1> */}
        <h1
          className="text-center"
          style={{ margin: "35px 0px", marginTop: "90px" }}
        >
          News app-{capitalizeFirstLetter(props.category)} category
        </h1>
        {/* {this.state.loading && <Spinner />} */}
        {loading && <Spinner />}
        <InfiniteScroll
          //dataLength={this.state.articles.length}
          dataLength={articles.length}
          //  next={this.fetchmoreData}
          next={fetchmoreData}
          //  hasMore={this.state.articles.length !== this.state.totalResults}
          hasMore={articles.length !== totalResults}
          // loader={<h4>Loading...</h4>}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {/* {this.state.articles.map((element) => { */}
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
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

            {/* <div className="conatiner d-flex justify-content-between">
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
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
          </div>
        </InfiniteScroll>
      </>
    );
  }
};

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;


