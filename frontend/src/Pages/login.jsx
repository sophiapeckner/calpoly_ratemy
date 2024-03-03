import "./login.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Login () {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("entered psw: "+password)
        axios.post('http://localhost:3001/login',{email, password}).then(function (response) {
            console.log(response);
            if(response.data==="success"){
                navigate('/Organizations');
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="login">
            <div>
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Email</label>
                <input className="loginInput" type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                <button className="loginButton">Login</button>
            </form>
            <div className="buttons">
                
                <button className="createAccountButton">Create Account</button>
            </div>

            </div>
        </div>
    )
}