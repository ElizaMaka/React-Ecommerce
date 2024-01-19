import React from 'react'
import './location.css'

const Location = () => {
  return (
    <>
    {/* // Inside Banner */}
    <div className='location'>
      <div className='overlay'>
        <div className='search-content'>
          <h1>Find Gaia's Restaurant Near You</h1>
          <p>Enter a city, state, ZIP or delivery address (where available) to order online or see menu pricing by location.</p>
          <div className="search-bar">
            <input type="search" className='search' placeholder='Search by City, State, Zip or Delivery Address' />
            <i className='fas fa-location-dot'></i>
          </div>
          <p>-or-</p>
          <button> <p>Use my current Location</p><i className='fas fa-location-crosshairs'></i></button>
        </div>
      </div>
    </div>
    {/* end of banner */}
    </>
  )
}

export default Location
