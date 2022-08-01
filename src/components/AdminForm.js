import React from 'react';
import ratings from '../backend/ratings';
import {storage} from '../config/firebase'
import {ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";
import {collection, addDoc } from 'firebase/firestore';
import {firestore} from '../config/firebase';

export default function AdminForm() {
  const [hotelData,setHotelData] = React.useState({
    imgUrl:'',
    hotelName:'',
    price:'',
    rating:'',
    description:'',
    status:'available',
    id:'',
    date: ''
  });

  const [img, setImg] = React.useState()

  const collectionRef = collection(firestore, 'Hotels');

  function uploadHotel(){
    addDoc(collectionRef,hotelData)
  }

  const uploadImg = async()=>{
    const storageRef = ref(storage, `/images/${img.name}`)
   
    await uploadBytesResumable(storageRef, img).then((uploadTask)=>{
      getDownloadURL(uploadTask.ref).then((url) => {
        console.log(url);
        setHotelData((prev)=>{
          return {...prev,imgUrl:url}
        })
    }).then(()=>{
      uploadHotel()
    })
    })
  }

  function handleInput(e){
    const {name,value} = e.target;
    setHotelData(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })

    console.log(hotelData);
  }

  return (
    <div className='hotel-form'>
        <h2>Add a hotel</h2>
        <div className='admin-form'>
        
            <input name='hotelName' onChange={(e)=>handleInput(e)} value={hotelData.hotelName} placeholder='Hotel name' />
            <br></br>
            <input name='price' onChange={(e)=>handleInput(e)} value={hotelData.price}  placeholder='Price' />
            <br></br>
           
            <div className='ratings'>
                
                <select name='rating' onChange={(e)=>handleInput(e)} value={hotelData.rating} >
                    <option disabled>--Ratings--</option>
                    {ratings.map(rate=><option key={rate}>{rate}</option>)}
                </select>
            </div>
            <br></br>
            <textarea name='description' value={hotelData.description} onChange={(e)=>handleInput(e)} placeholder='Description' />
            <br></br>
            <input type='file' onChange={(e)=>{
              setImg(e.target.files[0])
            }} name='imgUrl' placeholder='Image url' />
            <br></br>
            <button
            onClick={()=>{uploadImg();}}
            >Add</button>
        </div>
    </div>
  )
}
