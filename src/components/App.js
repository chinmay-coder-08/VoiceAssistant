import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Docs from './Docs';
import { initializeApp } from "firebase/app";
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import Register from './Register';
import Alertcomp from './Alert';
import { firebaseConfig } from "../firebase";


const App = () => {


    const app = initializeApp(firebaseConfig);// eslint-disable-line

    const [alert, setAlert] = useState(null);
    function showAlert(label, message, type,) {
        setAlert({
            msg: message,
            type: type,
            label: label
        })
        setTimeout(() => {
            setAlert(null)
        }, 3000);
    }
    return (
        <>
            <Router>
                <Alertcomp alert={alert} />
                <Navbar />
                <Switch>
                    <Route path="/" exact><Home showAlert={showAlert}/></Route>
                    <Route path="/how-to-use" exact ><Docs showAlert={showAlert} /></Route>
                    <Route path="/register" exact><Register showAlert={showAlert} /></Route>
                    <Route path="/login" exact><Login showAlert={showAlert} /></Route>
                    <Route path="/dashboard" exact component={Dashboard}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;
