import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom';


const Profile = () => {
    const { state, dispatch } = useContext(userContext);
    const navigate = useNavigate();
    const [updateP, setUpdateP] = useState(false)
    const [updateUsername, setUpdateUsername] = useState(state.username)
    const [updateEmail, setUpdateEmail] = useState(state.email)

    console.log(state._id)
    useEffect(() => {
        if (!state) {
            navigate("/login")
        }
    }, [state])


    const updateProfile = async (e) => {
        e.preventDefault();
        const response = await fetch("/user/update", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: state._id,
                username: updateUsername,
                email: updateEmail
            })
        });
        const data = await response.json();

        dispatch({ type: "UPDATEPROFILE", payload: data })
        localStorage.setItem("user", JSON.stringify(data))
        setUpdateP(false)

        console.log(data)
    }



    return (
        <div className="container my-3 " >


            <div className="container my-3">

                <section class="section about-section gray-bg" id="about">
                    <div class="container">
                        <div class="row align-items-center flex-row-reverse">
                            <div class="col-lg-6">
                                <div class="about-text go-to">
                                    <h3 class="dark-color">Profile</h3>

                                    <p>I <mark style={{ fontWeight: "bold", fontSize: "20px" }} >{state.username}</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
                                    <div class="row about-list">
                                        <div class="col-md-6">
                                            <div onClick={() => setUpdateP(true)} style={{ float: "right" }} className="update-profile">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                </svg>
                                            </div>

                                            <div class="media">
                                                <label>Username</label>
                                                {
                                                    updateP === true ?
                                                        <p>  <input
                                                            value={updateUsername}
                                                            onChange={(e) => setUpdateUsername(e.target.value)} type="text" /> </p> :
                                                        <p>{state.username}   </p>
                                                }
                                            </div>
                                            <div class="media">
                                                <label>E-mail</label>
                                                {
                                                    updateP === true ?
                                                        <p>  <input
                                                            value={updateEmail}
                                                            onChange={(e) => setUpdateEmail(e.target.value)} type="text" /> </p> :
                                                        <p>{state.email}   </p>
                                                }
                                            </div>
                                            <div class="media">
                                                <label>Skype</label>
                                                <p>skype.0404</p>
                                            </div>
                                            <div style={{ margin: "20px 0" }} class="media">
                                                <button onClick={updateProfile} type="button" class="btn btn-primary">Update Profile</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="about-avatar">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt="" />
                                </div>

                            </div>
                        </div>
                        <div class="counter">
                            <div class="row">
                                <div class="col-6 col-lg-3">
                                    <div class="count-data text-center">
                                        <h6 class="count h2" data-to="500" data-speed="500">500</h6>
                                        <p class="m-0px font-w-600">Happy Clients</p>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <div class="count-data text-center">
                                        <h6 class="count h2" data-to="150" data-speed="150">150</h6>
                                        <p class="m-0px font-w-600">Project Completed</p>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <div class="count-data text-center">
                                        <h6 class="count h2" data-to="850" data-speed="850">850</h6>
                                        <p class="m-0px font-w-600">Photo Capture</p>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <div class="count-data text-center">
                                        <h6 class="count h2" data-to="190" data-speed="190">190</h6>
                                        <p class="m-0px font-w-600">Telephonic Talk</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>



        </div>
    )
}

export default Profile