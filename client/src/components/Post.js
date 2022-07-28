import React from 'react'
import "../styles/post.css"
import { Link } from 'react-router-dom'



const Post = ({postdata}) => {
  return (
    <>
    <section class="blog_section">
            
                <div style={{display:"flex"}} class="blog_content">
                    <div style={{display:"flex",flexWrap:"wrap"}} class="owl-carousel owl-theme">
                        <div class="blog_item">
                            <div class="blog_image">
                                <img class="img-fluid" src={postdata.photo} alt="images not found"/>
                                <span><i class="icon ion-md-create"></i></span>
                            </div>
                            <div class="blog_details">
                                <div class="blog_title">
                                    <h5><Link to={`/post/${postdata._id}`}>{postdata.title}</Link></h5>
                                </div>
                                <ul>
                                  <Link to={`/?userid=${postdata.postedBy._id}`} >  <li><i class="icon ion-md-person"></i>{postdata.postedBy.username}</li> </Link> 
                                    <li><i class="icon ion-md-calendar"></i>{new Date(postdata.createdAt).toDateString()}</li>
                                </ul>
                                <p>{postdata.description}</p>
                                <a href="#">Read More<i class="icofont-long-arrow-right"></i></a>
                            </div>
                        </div>                        
                       
                    </div>
                </div>
          
        </section>
    
    
    </>
  )
}

export default Post