import React, { Component } from 'react'
import PropTypes from 'prop-types'
import loadsp from './loadsp.gif'

const Spinner =()=> {
  
      const sty={
         width:"20px",
         height:"20px",
         color:"brown"
      }
    return (
      <div className='text-center' >
        <img src={loadsp} alt="loading" />
        
      </div>
    )
  
}

export default Spinner
