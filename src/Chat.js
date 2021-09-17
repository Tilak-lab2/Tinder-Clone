import React from "react";
import { Avatar, Link } from "@material-ui/core";
import backButton from "react-dom"
function Chat({name,profilePic,timestamp}){
return(
    <div className="chat">
        <Link to="/chat">
        <button >{backButton}</button>
        </Link>
     <Avatar className="chat_image" alt={name} src={profilePic}></Avatar>

    </div>
)
}
export default Chat