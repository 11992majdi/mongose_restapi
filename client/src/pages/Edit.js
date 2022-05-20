
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editContact, getOne } from "../redux/actions/contact";


const Edit =()=>{
    const navigate=useNavigate("/")
    const dispatch= useDispatch()
    const params=useParams()
    const [contact,setContact]=useState({name:"",email:"",age:""})
    const handlChange=(e)=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
       dispatch(getOne(params.id))
    },[]);
   const load= useSelector(state=>state.contactReducer.load)
   const contactToGet =useSelector(state=>state.contactReducer.contactToGet)
   const handlEdit=()=>{
       dispatch(editContact(params.id,contact));
       navigate("/")
   }
return(
    <div >
     <h1>Edit</h1>
     <h3>profile</h3>
     {load?<p>load</p>:
     <div>
        <h4>name:{contactToGet.name}</h4>
        <h4>email:{contactToGet.email}</h4>
        <h4>age:{contactToGet.age}</h4>
    </div>}
       <label htmlFor="name" >name</label> <br/>
        <input  style={{margin:10,padding:7}} type="text" placeholder={`${contactToGet.name}`}name='name' onChange={handlChange}/> <br/>
        <label htmlFor="email" >email</label>  <br/>
        <input  style={{margin:10,padding:7}} type="text" placeholder={`${contactToGet.email}`}name='email' onChange={handlChange}/> <br/>
        <label htmlFor="age" >age</label>  <br/>
        <input  style={{margin:10,padding:7}} type="text" placeholder={`${contactToGet.age}`}name='age' onChange={handlChange}/> <br/>
        <button style={{background: "darkblue",color:"white",paddingLeft:20,paddingRight:20 ,borderRadius:6}} onClick={handlEdit}>edit</button>
    </div>
)

}
export default Edit
