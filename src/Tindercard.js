import React, { useEffect, useState }  from "react";
import TinderCard from "react-tinder-card";
import "./tinder.css"
import database from "./firebase";
function Tinder(){
    const [person,setPerson]=useState([])
useEffect(()=>{
  const unsubscribe=  database.collection('People').onSnapshot(snapshot=>{
        setPerson(snapshot.docs.map(doc=>doc.data()))
    })
    return ()=>{
      unsubscribe()
    }

},[])
    return(
        <div className="Tindercard">
            {/* <div className='container'> */}
            {person.map((people)=>
             <TinderCard className="swipe" key={people.name} preventSwipe={['up','down']}>
             <div  className="card"  style={{backgroundImage:`url(${people.url})`}}>
              <h3>{people.name } &nbsp;<span>{people.age}</span></h3>
            </div>
             </TinderCard>
             
            )}
          
        </div>
        // </div>
    )
}
export default Tinder;