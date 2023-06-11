//NewsItem.js
import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl ,author,date,source} = this.props;
    return (

        <div className="my-3">
          <div className="card" >
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
    {source}
  </span>

            <img src={!imageurl?"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png":imageurl}  className="card-img-top" alt="..." />
            {/* <img src={imageurl}  className="card-img-top" alt="..."  /> */}
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}....</p>
              <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-dark btn-sm">
                Read more
              </a>

            </div>
            

            <div className="card-footer">
        <small className="text-body-secondary">By {!author?"Unkown":author} on {new Date(date).toGMTString()}</small>
      </div>
          </div>

        </div>
  
    );
  }
}

export default Newsitem;