import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { state, dispatch } = useContext(userContext);
  const navigate = useNavigate();
  console.log(state)


  const LogOut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login")
  }

  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">{state?.username} Blog App</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link style={{ padding: "0px", color: "white", textDecoration: "none", margin: "0 10px" }} to="/">Home </Link>
              </li>
              <li class="nav-item">
                <Link style={{ padding: "0px", color: "white", textDecoration: "none", margin: "0 10px" }} to="/about">About </Link>
              </li>
              <li class="nav-item">
                <Link style={{ padding: "0px", color: "white", textDecoration: "none", margin: "0 10px" }} to="/">Contact </Link>
              </li>

            </ul>
            <div style={{ width: "250px", color: "white" }} className="user-login">
              <ul style={{ display: "flex", justifyContent: "space-evenly", margin: "0px", listStyle: "none", alignItems: "center" }} >
                {!state ? <><li class="nav-item">
                  <Link style={{ padding: "0px", color: "white", textDecoration: "none" }} to="/signup">Signup </Link>
                </li>
                  <li class="nav-item">
                    <Link style={{ padding: "0px", color: "white", textDecoration: "none" }} to="/login">Login </Link>
                  </li> </> :
                  <>
                  <Link to="/create" > 
                    <svg style={{marginRight:"10px",color:"white"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                </Link>

                    <li class="nav-item">
                      <button
                        onClick={LogOut}
                        type="button" class="btn btn-danger">Logout</button>
                    </li>

                    <Link style={{ color: "white" ,margin:"0 10px"}} to="/profile" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                      </svg>
                    </Link>
                  </>


                }

              </ul>
            </div>



            <form class="d-flex">

              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar