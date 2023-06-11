//NewsItem.js
import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl } = this.props;
    return (

        <div className="my-3">
          <div className="card" >
            <img src={!imageurl?"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png":imageurl}  className="card-img-top" alt="..." />
            {/* <img src={imageurl}  className="card-img-top" alt="..."  /> */}
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}....</p>
              <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-dark btn-sm">
                Read more
              </a>
            </div>
          </div>
        </div>
  
    );
  }
}

export default Newsitem;