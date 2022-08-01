import React,{useEffect,useState} from 'react'
import AdminForm from '../components/AdminForm'
import HotelCard from '../components/HotelCard'
import '../pages/home.css';
import {FaSignOutAlt} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import {collection, getDocs } from 'firebase/firestore';
import {firestore} from '../config/firebase';


export default function Home() {
  const navigate = useNavigate();

  function logOut(){
    navigate('/')
  }

  // eslint-disable-next-line no-unused-vars
  const [hotelData,setHotelData] = useState([]);
  

  
    useEffect(()=>{
      let data = [];
      const collectionRef = collection(firestore, 'Hotels');
      getDocs(collectionRef).then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
        data.push(doc.data())
      })
      setHotelData(data)
  })

 
    },[])
    console.log(hotelData);
  

  return (
    <div className='home'>
        <h1>Hotels Data</h1>
        <button onClick={logOut} className='logout'><FaSignOutAlt />Logout</button>
        <div className='row-container'>

            <AdminForm />
            <div className='hotels-container'>
                {hotelData.map((hotel,index)=>{
                  return <HotelCard key={index} data={hotel} />
                })
                }
            </div>

        </div>
    </div>
  )
}
