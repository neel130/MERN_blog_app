import React, { useEffect, useState, useContext } from 'react'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { state, dispatch } = useContext(userContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate();

  useEffect(()=>{
    if(state){
      navigate("/")
    }
  },[state])


  const logIn = async (e) => {
    e.preventDefault();
    const response = await fetch("/user/login", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        email,
        password
      })
    });
    const data = await response.json();
    setMessage(data)
    console.log(data)
    if (data.success) {
      localStorage.setItem('user', JSON.stringify(data.user));
      dispatch({ type: "USER", payload: data.user })
       navigate("/")
    }


  }
  
 


  return (
    <>
      <div className="container my-3">
        <form action='POST'>


          {message.error ? <p style={{ color: "red" }} >warning : {message.error}</p> :
            <>
              {message.success ? <p style={{ color: "green" }}  > {message.success} </p> :
                null
              }
            </>
          }


          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input 
            value={email}
             onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" required />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input
            value={password}
            onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" />
          </div>

          <button onClick={logIn} type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>



    </>
  )
}

export default Login