import React,{useState,useEffect,useContext} from 'react'
import "../styles/sidebar.css"
import { Link } from 'react-router-dom'

const Sidebar = () => {
   
    


    return (
        <>
            <div className="container-sidebar">
                <div className="profileInfo">
                    <div className="profileImg">
                        <img src="https://media.istockphoto.com/photos/
                        millennial-male-team-leader-organize-virtual-workshop-with-employees-picture
                        -id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" alt="" srcset="" />
                    </div>
                    <h5 style={{fontWeight:"600",marginTop:"15px"}}>neel</h5>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptatem, tempora doloremque voluptatum dolor cum sit ipsum!
                         Tenetur sint error porro, exercitationem minima similique quam explicabo expedita 
                         necessitatibus totam! Illum, maiores.</p>
                </div>
                <div className="categoryList">
                    <hr />
                    <h3>Category</h3>
                    <hr />
                   <Link to={`/?category=Movie`} >  <p  >Movie</p> </Link>
                   <Link to={`/?category=Politics`} >  <p  >Politics</p></Link>
                   <Link to={`/?category=Game`} >   <p  >Game</p></Link>
                   <Link to={`/?category=Sports`} >   <p  >Sports</p></Link>
                   <Link to={`/?category=Music`} >  <p  >Music</p></Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar