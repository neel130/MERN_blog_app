import React,{useState,useEffect,useContext} from 'react'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Posts from '../components/Posts';

const Home = () => {
const{state,dispatch} = useContext(userContext);
const navigate = useNavigate();


useEffect(()=>{
  if(!state){
   navigate("/login")
  }
},[state])






console.log(state)
  return (
    <>
    <div style={{display:"flex",justifyContent:"space-between"}} className="home-box">
      <div style={{width:"65vw",display:"flex",flexWrap:"wrap"}} className="posts">
      <Posts/>
    </div>
    <div style={{float:"right" }} className="sidebar">
       <Sidebar/>
    </div>
    </div>
    
   
     </>
  )
}

export default Home