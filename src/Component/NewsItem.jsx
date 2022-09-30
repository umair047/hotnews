import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, url} = this.props;
        return (
            <div>           
                <div className="card" style={{width: "18rem"}}>
                <img height="170px" src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/107125793-fire-tv-omni-qled.PNG?v=1664384357&w=1920&h=1080":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
  </div>
            </div>
            </div>
        )
    }
}

export default NewsItem
