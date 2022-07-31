import React from 'react';
import ratings from '../backend/ratings';

export default function AdminForm() {
  return (
    <div className='hotel-form'>
        <h2>Add a hotel</h2>
        <div className='admin-form'>
            
            <input name='hotelName' placeholder='Hotel name' />
            <br></br>
            <input name='price' placeholder='Price' />
            <br></br>
            <input name='imgUrl' placeholder='Image url' />
            <br></br>
            <div className='ratings'>
                
                <select>
                    <option disabled>--Ratings--</option>
                    {ratings.map(rate=><option key={rate}>{rate}</option>)}
                </select>
            </div>
            <br></br>
            <textarea name='description' placeholder='Description' />
            <br></br>
            <button>Add</button>
        </div>
    </div>
  )
}
