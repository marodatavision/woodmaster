import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import LogMessager from '../config/LogMessager';
import UserAuth from '../services/UserAuth';

const Login = (props) => {

    const [userData, setUserData] = useState({email: "", password: ""});

    const onSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(userData).length === 2){
            UserAuth.login(userData)
            .then(response => {
                props.setLoggedIn(true);
                setUserData({email: "", password: ""});
                window.location.href = "/dashboard"
            })
            .catch(error => {
                // props.setLoggedIn(false);
                LogMessager.responseErrorLog(error, "Component: Login - Function: onSubmit");
            });
        }
        else {
            alert(`Bitte überprüfen Sie die Eingabefelder. `)
        }
    }

    const onChange = (e, type) => {
        setUserData({...userData, [type]: e.target.value});
    }

    return (
        <div className="card">
            <div className="card-header d-flex justify-content-center">
                <h3>Login</h3>
            </div>
            <div className="card-body d-flex justify-content-center">
                <form onSubmit={onSubmit} >
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <TextField onChange={e => onChange(e, 'email')} 
                                required label="E-Mail" variant="outlined"
                                value={userData.email}/>
                            </div>
                            <div className="col-md">
                                <TextField
                                onChange={e => onChange(e, 'password')}
                                label="Passwort"
                                type="password"
                                variant="outlined"
                                value={userData.password}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <Button type="submit" variant="contained" color="primary" fullWidth>Log In</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;