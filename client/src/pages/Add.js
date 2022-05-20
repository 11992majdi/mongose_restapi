import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContact } from "../redux/actions/contact";

const Add=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [contact,setContact]=useState({name:"",email:"",age:""})
    const handlChange=(e)=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }
    const handlAdd=()=>{
        dispatch(addContact(contact));
        navigate("/")
    }
return(
    <div>
        <h1>ADD</h1>
        <label htmlFor="name" >name</label> <br/>
        <input  style={{margin:10,padding:7}} type="text" placeholder='enter name here'name='name' onChange={handlChange}/> <br/>
        <label htmlFor="email" >email</label> <br/>
        <input  style={{margin:10,padding:7}} type="text" placeholder='enter email here'name='email' onChange={handlChange}/> <br/>
        <label htmlFor="age" >age</label> <br/>
        <input  style={{margin:10,padding:7}} type="text" placeholder='enter age here'name='age' onChange={handlChange}/> <br/>
        <button style={{background: "darkblue",color:"white",paddingLeft:20,paddingRight:20 ,borderRadius:6}} onClick={handlAdd}>add</button>
    </div>
)
}
export default Add