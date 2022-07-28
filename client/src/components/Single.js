import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom'
import "../styles/single.css"


const Single = ({ singlepost }) => {
   
    const [updateTitle, setUpdateTitle] = useState(singlepost.title)
    const [updateDescription, setUpdateDescription] = useState(singlepost.description)
      const [update, setUpdate] = useState(false)
   const navigate = useNavigate();

     useEffect(()=>{
        setUpdateTitle(singlepost.title)
        setUpdateDescription(singlepost.description)
     },[singlepost])


      const UpdatePost = async () =>{
        const response = await fetch("/post/update",{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               id:singlepost._id,
                title:updateTitle,
                description:updateDescription,
            })
        });
        const data = await response.json();
        window.location.reload();
        console.log(data)
      }




      const deletePost = async ()=>{
        const response = await fetch("/post/delete",{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               id:singlepost._id
            })
        });
        const data = await response.json();
        navigate("/")
        console.log(data)
      }



    return (
        <>
        {singlepost ? 
<section class="blog_section_single">

                <div class="blog_content_single">
                    <div class="owl-carousel owl-theme">
                        <div class="blog_item_single">
                            <div class="blog_image">
                                <img class="img-fluid" src={singlepost.photo} alt="images not found" />
                                <span><i class="icon ion-md-create"></i></span>
                            </div>
                            <div class="blog_details">
                                <div class="blog_title">
                      {update === true ?
              
                                        <div style={{ marginBottom: "20px" }} className="update-title">
                                            <input 
                                            value={updateTitle}
                                            onChange={(e)=>setUpdateTitle(e.target.value)}
                                            type="text" />
                                        </div> :


                                        <h5><a href="#">{singlepost.title}</a>
                                            <span style={{ float: "right" }} >  <svg onClick={()=>setUpdate(true)}  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                            </svg>


                                                <svg onClick={deletePost}  style={{ marginLeft: "20px" }} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg>
                                            </span> </h5>


                                    }



                                </div>
                                <ul>
                                    <li><i class="icon ion-md-person"></i>{singlepost.postedBy?.username}</li>
                                    <li><i class="icon ion-md-calendar"></i>{new Date(singlepost.createdAt).toDateString()}</li>
                                </ul>

                                {update === true ?
                                    <div style={{ marginBottom: "20px" }} className="update-description">
                                        <textarea
                                        value={updateDescription}
                                        onChange={(e)=>setUpdateDescription(e.target.value)}
                                        name="" id="" cols="30" rows="3" />  <span style={{ marginLeft: "120px", marginBottom: "20px" }} >
                                            <button
                                            onClick={UpdatePost}
                                            type="button" class="btn btn-primary">Update Post</button></span>
                                    </div>
                                    :

                                    <p>{singlepost.description}</p>


                                }

                            </div>
                        </div>

                    </div>
                </div>

            </section>
            :
            <h2>loading</h2>

        }
            


        </>
    )
}

export default Single