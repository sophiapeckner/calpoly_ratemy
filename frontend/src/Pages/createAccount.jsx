import "./createAccount.css"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function CreateAccount () {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name, email, password}).then(function (response) {
            console.log(response);
            navigate('/Organizations');
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="createAccount">
            <span className="createAccountTitle">Register</span>
            <form className="createAccountForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className="createAccountInput" type="text" placeholder="username" onChange={(e)=>setName(e.target.value)}/>
                <label>Email</label>
                <input className="createAccountInput" type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input className="createAccountInput" type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                <button className="createAccountButton">Register</button>
            </form>
            
        </div>
    )
}