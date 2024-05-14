import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Newsitem =(props)=>{


    let {title,description,imageurl,newsurl,date,author,source,pageno}=props
    return (
      <div>
        <div  className="card" style={{width: "18rem"}}>
            <img  className="card-img-top" src={imageurl} alt="Card image cap"/>
            <span  className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>
            {source}
            </span>
            <div  className="card-body">
            <h5  className="card-title">{title}...</h5>
            <p  className="card-text">{description}...</p>
            <p  className="card-text">by {author} on {new Date(date).toGMTString()} </p>
            <p>pg no....{pageno}</p>
            <a href={newsurl} target='_blank'  className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        
      </div>
    )
  
}

export default Newsitem
