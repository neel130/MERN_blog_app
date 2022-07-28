
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createContext,useReducer,useEffect,useState,useContext } from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import { intialState, reducer } from './reducer/userReducer';
import Profile from './pages/Profile';
import CreatePost from './pages/CreatePost';
import SinglePage from './pages/SinglePage';


export const userContext = createContext();


const Routing =()=>{
 const {state,dispatch}=useContext(userContext)
useEffect(()=>{
  const user = JSON.parse(localStorage.getItem('user')) 
 dispatch({type:"USER",payload:user})

},[])

 return(


   <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/signup" element={ <Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/create" element={<CreatePost/>}/>
      <Route path="/post/:id" element={<SinglePage/>}/>

    </Routes>
 )





}






function App() {

const [state,dispatch]=useReducer(reducer,intialState)



  return (
  <>
<userContext.Provider value={{state,dispatch}} >
<BrowserRouter>
  <Navbar/>
   <Routing/>
  
  </BrowserRouter>
</userContext.Provider>




 
  
  
  
  
  </>
  );
}

export default App;
