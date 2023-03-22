import React from 'react'

const NewsItem=(props)=> {

    let { title, description, imageUrl, newsUrl, author, date,source} = props;
    return (

      <div className="card" >
        <div style={{
          display:'flex',
          justify:'flex-end',
          right:'0',
          position:'absolute'
        }}>
          <span className=" badge rounded-pill bg-danger">
          {source}
        </span>
        </div>
        

        <img src={imageUrl === null ? "https://images.indianexpress.com/2022/09/Hubble-spiral-galaxy-image-20220918.jpg" : imageUrl} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted"> by {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More..</a>

        </div>
      </div>
    )
  
}

export default NewsItem
