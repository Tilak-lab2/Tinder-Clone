import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import  FavoriteIcon from "@material-ui/icons/Favorite";
import FlashIcon from "@material-ui/icons/FlashOn"
import { IconButton } from "@material-ui/core";
import "./Swipebuttons.css"
const Swipe=()=>{
return(
<div className="swipe">
    <IconButton className="swipe_repeat">
    <ReplayIcon fontSize="large"/></IconButton>
   <IconButton className="swipe_close"> 
    <CloseIcon fontSize="large"></CloseIcon></IconButton>
   <IconButton className="swipe_star"> 
   <StarRateIcon fontSize="large"></StarRateIcon></IconButton>
   <IconButton className="swipe_favorite">
   <FavoriteIcon fontSize="large"></FavoriteIcon></IconButton>
   <IconButton className="swipe_flash">
   <FlashIcon fontSize="large"></FlashIcon>
</IconButton>
</div>
)
}
export default Swipe