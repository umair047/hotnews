import React, { Component } from "react";
import NewsItem from "./NewsItem";
import {Spinner} from "./Spinner"

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=80e93242a6874f36896720ef19e978b7&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading : false
    });
  }

  pageChange = async (flag) => {
    if (!(this.state.page + flag > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      this.setState({loading: true});
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=80e93242a6874f36896720ef19e978b7&page=${this.state.page + flag}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        articles: parsedData.articles,
        page: this.state.page + flag ,
        loading : false
      });
    }
  };


  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">SparkNews - Top Headlines</h1><br/>
        {this.state.loading && <Spinner/>}<br/>
        <div className="row">
          {!this.state.loading && this.state.articles.map(element => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0,20)}
                  description={element.description.slice(0,60)}
                  imageUrl={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-info"
            onClick={()=>{this.pageChange(-1)}}
          >
            &larr; Previus
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            type="button"
            className="btn btn-info"
            onClick={()=>{this.pageChange(1)}}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News