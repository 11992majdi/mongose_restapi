import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../redux/actions/contact";
import ContactCard from "./ConatctCard";
 

const ContactList =()=>{
    const dispatch=useDispatch()
    const load = useSelector(state=>state.contactReducer.load)
    const list= useSelector(state=>state.contactReducer.contactList)
    useEffect(()=>{
    dispatch(getContacts())

    },[])
return (
    <div style={{display:"flex" , justifyContent:"space-between" , margin:20,  flexWrap: "wrap" }}>
        {load?<p>loadiing</p>:list?.map(el=><ContactCard list={el}/>)}
    </div>
)

}
export default ContactList