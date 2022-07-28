import React,{useState,useEffect,useContext} from 'react'
import Post from './Post'
import { useLocation } from 'react-router-dom'

const Posts = () => {
  const [post,setPost] = useState([])
  const location = useLocation();
  console.log(location);



  useEffect(()=>{
    const getallpost = async ()=>{
      const response = await fetch(`/post/get${location.search}`)
      const data = await response.json();
      setPost(data.posts)
       console.log(data) 
       console.log(data.posts.length) 
    }
    getallpost();
  },[location.search])

 
  return (
    <>
    {post.length===0? <div style={{margin:"200px 250px"}}> <h1 >No Post Found</h1>  </div>  :

    <> 
     {
      post.map((elem)=>{ 
   return   <Post postdata={elem} />
      })
    }
       </>
    }
   

   

    
    
    </>
  )
}

export default Posts