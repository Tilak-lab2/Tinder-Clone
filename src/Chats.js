import React from "react"
import Chat from "./Chat"
import { render } from "react-dom"
const Chats=()=>{
    return(

        <div className="chats">
            <Chat 
            name="Mark"
            message="Hii"
            timestamp="12 secs"
            // profilePic=" ...",   
            
            ></Chat>

        </div>
    )

 }
 export default Chats