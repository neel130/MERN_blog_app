import React, { useState, useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App'

const Signup = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    const [message, setMessage] = useState("")
    const {state,dispatch} = useContext(userContext);

    useEffect(()=>{
        if(state){
          navigate("/")
        }
      },[state])



    const signUp = async (e) => {
        e.preventDefault();
        const response = await fetch("/user/signup", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });
        const data = await response.json();
        setMessage(data)
        if (data.success) {
            navigate("/login")
        }


        console.log(data)

    }



    return (
        <>
            <div className="container my-3">

                <form>

                    {message.error ? <p style={{ color: "red" }} >warning : {message.error}</p> :
                        <>
                            {message.success ? <p style={{ color: "green" }}  > {message.success} </p> :
                                null
                            }
                        </>
                    }

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username</label>
                        <input onChange={(e) => setUsername(e.target.value)} type="text" class="form-control" />

                    </div>


                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Upload Profile Pic</label>
                        <input type="file" />
                    </div>


                    <button onClick={signUp} type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>



        </>
    )
}

export default Signup