import React,{useState,useEffect,useContext} from 'react'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const{state,dispatch} = useContext(userContext)
  const navigate = useNavigate();

  useEffect(()=>{
    if(!state){
     navigate("/login")
    }
  },[state])

  return (
    <div>About</div>
  )
}

export default About