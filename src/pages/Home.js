import React from 'react'
import AdminForm from '../components/AdminForm'
import HotelCard from '../components/HotelCard'
import '../pages/home.css';
import {FaSignOutAlt} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'


export default function Home() {
  const navigate = useNavigate();

  function logOut(){
    navigate('/')
  }
  return (
    <div className='home'>
        <h1>Hotels Data</h1>
        <button onClick={logOut} className='logout'><FaSignOutAlt />Logout</button>
        <div className='row-container'>

            <AdminForm />
            <div className='hotels-container'>
                <HotelCard />
                <HotelCard />
            </div>

        </div>
    </div>
  )
}
