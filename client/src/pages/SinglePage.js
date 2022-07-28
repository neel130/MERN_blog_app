import React, { useState, useEffect, useContext } from 'react'
import Sidebar from '../components/Sidebar'
import Single from '../components/Single'
import { useParams } from 'react-router-dom'

const SinglePage = () => {
    const params = useParams();
   const [singlepost,setSinglepost] = useState("")

    useEffect(() => {
        const getSingleData = async () => {
            const response = await fetch(`/post/get/${params.id}`)
            const result = await response.json();
           setSinglepost(result[0])
           
        }
        getSingleData();

    },[])
  console.log(singlepost)
 
    return (
        <div className="singlepage-container">
            <div style={{ width: "60vw", float: "left" }} className="singlepage-box">
                <Single singlepost={singlepost}  />
            </div>

            <div style={{ float: "right" }} className="sidebar-bx">
                <Sidebar />
            </div>

        </div>
    )
}

export default SinglePage