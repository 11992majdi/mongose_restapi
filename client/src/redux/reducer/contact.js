import { FAIL_CONTACT, GET_CONTACT, LOAD_CONTACT,GET_ONE_CONTACT } from "../actionTypes/contact";

const initialeState={
contactlist:[],
contactToGet:{},
load:false,
error:null

}
export const contactReducer=(state=initialeState,{type,payload})=>{
switch (type) {

    case LOAD_CONTACT:
        return{...state,load:true}
      case GET_CONTACT:
          return{...state,load:false,contactList:payload.contactList}  
          case GET_ONE_CONTACT:
          return{...state,load:false,contactToGet:payload.contactToGet}  
       case FAIL_CONTACT:
      return {...state,load:false,error:payload}
    default:
        return state
}

}