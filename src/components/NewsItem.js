import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl,newsUrl } = this.props;
    return (
      <div>
        <div>
          <div className="card" >
            <img src={!imageUrl?"https://cdn.cnn.com/cnnnext/dam/assets/240222181408-kherson-ukraine-russia-war-two-years-pkg-walsh-lead-vpx-00003125-super-tease.png":imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a href={newsUrl}  className="btn btn-sm btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
