import React, { useState } from 'react'
import { Button, TextField } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useHistory } from 'react-router-dom'
import Error from './Alert';
import "../css/accountcard.css"

const Register = ({ showAlert }) => {
    const auth = getAuth()
    // const [userisloggedin] = useAuthState(auth)
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");
    const [registerprogress, setregisterprogress] = useState(false);

    const onRegister = async () => {
        const auth = getAuth();

        try {
            setregisterprogress(true)
            await createUserWithEmailAndPassword(auth, name, password);
            updateProfile(auth.currentUser, { displayName: name });
            setregisterprogress(false)
            showAlert("Success", "Account created...You can now login with credentials", "success")
            // alert("Success!!Account created...You can now login with credentials")
        } catch (error) {
            showAlert("Error", `${error}`, "danger")
        }
    }
    async function fetchdata() {
        const res = await fetch("https://api.unsplash.com/search/photos?client_id=pvHLwntgGIrrErhByAuZLj0eZKDt7uyYDbe4Tk1ix44&query=shiv&orientation=landscape")
        const data = await res.json();
        console.log(data)
    }
    fetchdata()
    return (
        <>
            <div className="card">
                <div className="registerheading">
                    <h2 className="title">Register</h2>

                </div>

                <p className="or"></p>

                <div className="email-login">
                    <label htmlFor="email" className="my-2">Email</label>
                    <TextField onKeyDown={(e) => {
                        if (e.key == "Enter") { onRegister() }
                    }} autoComplete="off" type="email" id="standard-basic" variant="standard" value={name} onChange={(e) => setname(e.target.value)} />
                    {/* <input type="email" className="email input" required /> */}
                    <label htmlFor="password" style={{ marginTop: "12px" }} >Password</label>
                    {/* <input type="password" className="input password" required /> */}
                    <TextField onKeyDown={(e) => {
                        if (e.key == "Enter") { onRegister() }
                    }} type="password" id="standard-basic" variant="standard" style={{ marginTop: "2px" }} value={password} onChange={(e) => setpassword(e.target.value)} />
                </div>
                {/* <button className="submitbtn">Log In</button> */}
                <Button className="my-3" variant="contained" disabled={name !== "" && password !== "" ? false : true} color="success" style={{ borderRadius: "25px" }} onClick={onRegister}>Create Account</Button>
                {/* {progress ? } */}
            </div>

        </>
    )
}

export default Register;