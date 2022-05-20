import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../redux/actions/contact";


const ContactCard =({list})=>{
    const dispatch=useDispatch()
return(
<div>
    <h3>name:{list.name}</h3>
    <h3>email:{list.email}</h3>
    <h3>age:{list.age}</h3>
    <button style={{background: "darkblue",color:"white",paddingLeft:20,paddingRight:20 ,borderRadius:6 , margin:5}}  onClick={()=>dispatch(deleteContact(list._id))}>delete</button>
    <Link to={`/edit/${list._id}`}><button style={{background: "darkblue",color:"white",paddingLeft:20,paddingRight:20 ,borderRadius:6}}  >edit</button></Link>

</div>
)
    
}
export default ContactCard