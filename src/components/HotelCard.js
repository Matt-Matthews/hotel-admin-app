import React from 'react'

export default function HotelCard({data}) {
  return (
    <div className='hotel-card' >
      <div className='hotel-img' style={{backgroundImage: `url(${data.imgUrl})`}}>

      </div>
      <div className='hotel-det'>
          <h3>{data.hotelName}</h3>
          <h4>{data.price}</h4>
          <p>{data.rating}</p>
          <p>{data.description.substr(0,20)}...</p>
          
      </div>
    </div>
  )
}
