import React from 'react';
import '../pages/login.css';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [isObscured,setIsObscured] = React.useState(true);
    const [userData,setUserData] = React.useState({email:'',password:''});

    const navigate = useNavigate();

    function handleObscure(){
        setIsObscured(!isObscured)
    }

    function handleInput(e){
        const{name,value} = e.target;
        setUserData(prevData=>{
            return{
                ...prevData,
                [name]:value
            }
        })
        console.log(userData);
    }

    function login(){
        navigate('/home')
    }

  return (
    <div className='login-container'>
        <div className='login-form'>
            <h3>Login</h3>
            <div className='input-container'>
                <input type='email' 
                        onChange={(e)=>handleInput(e)} 
                        placeholder='Email' 
                        value={userData.email}
                        name='email'
                        />
            </div><br></br>
            <div className='input-container'>
            <input type={isObscured?'password':'text'} 
                    onChange={(e)=>handleInput(e)}
                    placeholder='Password' 
                    value={userData.password}
                    name='password'
                    />
            {isObscured?<FaEyeSlash onClick={handleObscure} className='icon' />: 
            <FaEye onClick={handleObscure} className='icon' />}
            </div><br></br>

            <button onClick={login}>Login</button>
        </div>
    </div>
  )
}

