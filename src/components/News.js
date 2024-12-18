import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    
      
    
  ];

  constructor() {
    super();
    console.log("hello i am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=61bb2c582a6749b7a8d79ee02f07e39b";
    let data = await fetch(url);
    let parsedData =await data.json()
    console.log(parsedData);
    this.setState({articles : parsedData.articles})    
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className="mb-5 text-center">Top business headlines in the India right now</h2>
          <div className="row ">
            {this.state.articles.map((element) => {
              return  <div className="col-md-4 mb-3"   key={element.url}>
                <NewsItem
                
                  title={element.title?element.title.slice(0, 45):""}
                  description={element.description?element.description.slice(0,88):""}
                  newsUrl={element.url}
                  imageUrl={element.urlToImage}
                />
              </div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
