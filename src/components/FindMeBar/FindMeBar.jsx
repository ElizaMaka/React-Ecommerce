import React from 'react'
import './findMeBar.css'
import { Link } from 'react-router-dom'

const FindMeBar = () => {
  return (
    <div className='find-me'>
      <i className='fas fa-location-dot'></i>
      <Link to="/location" ><p>Find a nearby Gaia</p></Link>
    </div>
  )
}

export default FindMeBar
