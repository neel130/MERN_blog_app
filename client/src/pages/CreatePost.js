import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom'
import "../styles/createpost.css"

const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    const navigate = useNavigate();
    const { state, dispatch } = useContext(userContext)

    console.log(title)
    console.log(image)


    const uploadPic = async () => {
        if (!title || !description || !category || !image) {
            alert("please add all fields")
        } else {
            const data = new FormData()
            data.append("file", image)
            data.append("upload_preset", "blogapp")
            const response = await fetch(`https://api.cloudinary.com/v1_1/uploadtrail/image/upload`, {
                method: "post",
                body: data
            });
            const result = await response.json();
            setUrl(result.url)
            console.log(result);
        }
    }



    
    useEffect(() => {
        if (url) {
            const uploadData = async () => {
                const response = await fetch("/post/create", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({

                        title,
                        description,
                        category,
                        photo: url,
                        postedBy: state
                    })
                });
                const data = await response.json();
               navigate("/")
                console.log(data)
            }
            uploadData()
        }
    }, [url])








    return (
        <>
            <div class="background">
                <div class="container">
                    <div class="screen">
                        <div class="screen-header">
                            <div class="screen-header-left">
                                <div class="screen-header-button close"></div>
                                <div class="screen-header-button maximize"></div>
                                <div class="screen-header-button minimize"></div>
                            </div>
                            <div class="screen-header-right">
                                <div class="screen-header-ellipsis"></div>
                                <div class="screen-header-ellipsis"></div>
                                <div class="screen-header-ellipsis"></div>
                            </div>
                        </div>
                        <div class="screen-body">
                            <div class="screen-body-item left">
                                <div class="app-title">
                                    <span>WRITE</span>
                                    <span>BLOG</span>
                                </div>

                            </div>
                            <div class="screen-body-item">
                                <div class="app-form">
                                    <div class="app-form-group">
                                        <input
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)} class="app-form-control" placeholder="Title of your Blog" />
                                    </div>

                                    <div class="app-form-group message">
                                        <input
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)} class="app-form-control" placeholder="Description" />
                                    </div>
                                    <select
                                        onChange={(e) => setCategory(e.target.value)} class="form-select" aria-label="Default select example">
                                        <option selected>Choose Category</option>
                                        <option value="Music">Music</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Game">Game</option>
                                        <option value="Movie">Movie</option>
                                        <option value="Politics">Politics</option>
                                    </select>

                                    <div class="app-form-group message">
                                        <input
                                            onChange={(e) => setImage(e.target.files[0])} type="file" />
                                    </div>
                                    <div class="app-form-group buttons">

                                        <button onClick={uploadPic}
                                            style={{ fontSize: "20px" }} class="app-form-button">POST</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default CreatePost