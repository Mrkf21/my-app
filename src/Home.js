import React, { useEffect, useState } from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import "./Home.css"

function Home() {
   
const [postcap, setpostcap] = useState([])
   
   return(
    <>
    <div className="header">
    <div className="opt-bar"><span><input type="text" className="search-inpt"/><button className="search-btn">search</button></span><p className="title"><b>WalaKoyIdeaUnsaAkongGiBuhat.com</b></p><button className="more-opt">...</button></div>
    <div className="menu-bar">
    <p>Timeline</p>
    <p>Friends</p>
    <p>Message</p>
    <p>Videos</p>
    </div>
    <div className="groups-opt"><h3><center>Your Groups:</center></h3></div>
    <div className="chats-opt"><h3><center>Online Friends:</center></h3></div>
    </div>
   <div className="post-div">
      <form>
      <p>Name</p>
      <input type="text" className="post-inpt" placeholder="POST SOMETHING.." onChange={ e => setpostcap(e.target.value)}/>
      <button className="post-btn" onClick={() => alert(postcap)}>Post</button>
      </form>
   </div>
   <div className="post">
    </div>
    {postcap.map((cap) => {
         return (<div>{cap}</div>)
      })}
 
    </>

   )
}
export default Home;