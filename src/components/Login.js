import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { useHistory } from 'react-router-dom'
import "../css/accountcard.css"

const Login = ({ showAlert }) => {
    const history = useHistory();
    const [loginemail, setloginemail] = useState("");
    const [loginpassword, setloginpassword] = useState("");
    const onLogin = async () => {
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, loginemail, loginpassword);
            history.push('/')
            showAlert("Success", "Login Successful", "success")
            console.log("Logging in");
        } catch (e) {
            showAlert("Error", "Invalid credentials", "danger")
        }

    }
    function SignInWithGoogleRedirect() {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((e) => {
            console.log(e.user.displayName);
            history.push('/')
            showAlert("Success", "Login Successful", "success")
        }).catch(() => showAlert("Error", "", "danger"));
    }
    return (
        <>
            <div className="card">
                <div className="registerheading">
                    <h2 className="title">Login</h2>
                    {/* <p className="subtitle">Dont have an account?
                            <Link to="/register" className="mx-1">Create</Link>
                        </p> */}

                </div>
                <div className="social-login">
                    <button className="google-btn" onClick={SignInWithGoogleRedirect}>
                        <img alt="Google"
                            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQkJCMDA7IiBkPSJNMTEzLjQ3LDMwOS40MDhMOTUuNjQ4LDM3NS45NGwtNjUuMTM5LDEuMzc4QzExLjA0MiwzNDEuMjExLDAsMjk5LjksMCwyNTYNCgljMC00Mi40NTEsMTAuMzI0LTgyLjQ4MywyOC42MjQtMTE3LjczMmgwLjAxNGw1Ny45OTIsMTAuNjMybDI1LjQwNCw1Ny42NDRjLTUuMzE3LDE1LjUwMS04LjIxNSwzMi4xNDEtOC4yMTUsNDkuNDU2DQoJQzEwMy44MjEsMjc0Ljc5MiwxMDcuMjI1LDI5Mi43OTcsMTEzLjQ3LDMwOS40MDh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTE4RUY4OyIgZD0iTTUwNy41MjcsMjA4LjE3NkM1MTAuNDY3LDIyMy42NjIsNTEyLDIzOS42NTUsNTEyLDI1NmMwLDE4LjMyOC0xLjkyNywzNi4yMDYtNS41OTgsNTMuNDUxDQoJYy0xMi40NjIsNTguNjgzLTQ1LjAyNSwxMDkuOTI1LTkwLjEzNCwxNDYuMTg3bC0wLjAxNC0wLjAxNGwtNzMuMDQ0LTMuNzI3bC0xMC4zMzgtNjQuNTM1DQoJYzI5LjkzMi0xNy41NTQsNTMuMzI0LTQ1LjAyNSw2NS42NDYtNzcuOTExaC0xMzYuODlWMjA4LjE3NmgxMzguODg3TDUwNy41MjcsMjA4LjE3Nkw1MDcuNTI3LDIwOC4xNzZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMjhCNDQ2OyIgZD0iTTQxNi4yNTMsNDU1LjYyNGwwLjAxNCwwLjAxNEMzNzIuMzk2LDQ5MC45MDEsMzE2LjY2Niw1MTIsMjU2LDUxMg0KCWMtOTcuNDkxLDAtMTgyLjI1Mi01NC40OTEtMjI1LjQ5MS0xMzQuNjgxbDgyLjk2MS02Ny45MWMyMS42MTksNTcuNjk4LDc3LjI3OCw5OC43NzEsMTQyLjUzLDk4Ljc3MQ0KCWMyOC4wNDcsMCw1NC4zMjMtNy41ODIsNzYuODctMjAuODE4TDQxNi4yNTMsNDU1LjYyNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMTQzMzY7IiBkPSJNNDE5LjQwNCw1OC45MzZsLTgyLjkzMyw2Ny44OTZjLTIzLjMzNS0xNC41ODYtNTAuOTE5LTIzLjAxMi04MC40NzEtMjMuMDEyDQoJYy02Ni43MjksMC0xMjMuNDI5LDQyLjk1Ny0xNDMuOTY1LDEwMi43MjRsLTgzLjM5Ny02OC4yNzZoLTAuMDE0QzcxLjIzLDU2LjEyMywxNTcuMDYsMCwyNTYsMA0KCUMzMTguMTE1LDAsMzc1LjA2OCwyMi4xMjYsNDE5LjQwNCw1OC45MzZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
                        <p className="btn-text">Login with Google</p>
                    </button>
                </div>

                <p className="or"><span>or</span></p>

                <div className="email-login">
                    <div className="email-login">
                        <label htmlFor="email" className="my-2">Email</label>
                        <TextField onKeyDown={(e) => {
                            if (e.key == "Enter") { onLogin() }
                        }} autoComplete="off" type="email" id="standard-basic" variant="standard" value={loginemail} onChange={(e) => setloginemail(e.target.value)} />
                        {/* <input type="email" className="email input" required /> */}
                        <label htmlFor="password" style={{ marginTop: "12px" }} >Password</label>
                        {/* <input type="password" className="input password" required /> */}
                        <TextField onKeyDown={(e) => {
                            if (e.key == "Enter") { onLogin() }
                        }} type="password" id="standard-basic" variant="standard" style={{ marginTop: "2px" }} value={loginpassword} onChange={(e) => setloginpassword(e.target.value)} />
                    </div>
                </div>
                <Button disabled={loginemail !== "" && loginpassword !== "" ? false : true} className="my-3" variant="contained" color="error" style={{ borderRadius: "25px" }} onClick={onLogin}>Log In</Button>
            </div>
            {/* <div className="container m-2">
                <input className="mx-1" type="text" value={loginemail} onChange={(e) => setloginemail(e.target.value)} />
                <input className="mx-1" type="password" value={loginpassword} onChange={(e) => setloginpassword(e.target.value)} />
                <button className="btn btn-success mx-1" onClick={onLogin}>Login</button>
            </div> */}

        </>
    )
}

export default Login
