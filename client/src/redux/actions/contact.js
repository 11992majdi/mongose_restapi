import axios from "axios"
import { GET_CONTACT, LOAD_CONTACT, FAIL_CONTACT, GET_ONE_CONTACT }  from "../actionTypes/contact";


export const getContacts=()=>async (dispatch)=>{
dispatch({type:LOAD_CONTACT});
try {
    let result=await axios.get("/api/contacts")
    dispatch({
        type:GET_CONTACT,
        payload:result.data
    })
} catch (error) {
    dispatch({
        type:FAIL_CONTACT,
        payload:error.response
    })
    
}

}

export const getOne=(id)=>async (dispatch)=>{
    dispatch({type:LOAD_CONTACT});
    try {
        let result=await axios.get(`/api/contacts/${id}`)
        dispatch({
            type:GET_ONE_CONTACT,
            payload:result.data
        })
    } catch (error) {
        dispatch({
            type:FAIL_CONTACT,
            payload:error.response
        })
        
    }
    
    }
    //add
     export const addContact=(newContact)=>async(dispatch)=>{
         try {
             await axios.post("/api/contacts/add",newContact)
             dispatch(getContacts())
         } catch (error) {
            dispatch({
                type:FAIL_CONTACT,
                payload:error.response
            })
              
         }
     }
//delete contact
export const deleteContact=(id)=>async (dispatch)=>{
try {
    await axios.delete(`/api/contacts/delete/${id}`)
    dispatch(getContacts())
} catch (error) {
  dispatch({
      type:FAIL_CONTACT,
      payload:error.response
  })  
}

}
// edit contact
export const editContact=(id,newContact)=>async(dispatch)=>{

    try {
        await axios.put(`/api/contacts/edit/${id}`,newContact)
        dispatch(getOne(id))
    } catch (error) {
        dispatch({
            type:FAIL_CONTACT,
            payload:error.response
        })   
    }
}