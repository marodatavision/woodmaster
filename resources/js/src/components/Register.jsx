import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import LogMessager from '../config/LogMessager';
import UserAuth from '../services/UserAuth';

const Register = (props) => {

    const [userData, setUserData] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(userData).length === 4){
            UserAuth.register(userData)
            .then(response => {
                props.setLoggedIn(true);
                window.location.href = "/dashboard"
            })
            .catch(error => {
                // props.setLoggedIn(false);
                LogMessager.responseErrorLog(error, "Component: Register - Function: onSubmit");
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
                <h3>Registrierung</h3>
            </div>
            <div className="card-body d-flex justify-content-center">
                <form onSubmit={onSubmit} >
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <TextField onChange={e => onChange(e, 'name')} 
                                required label="Benutzername" variant="outlined"/>
                            </div>
                            <div className="col-md">
                                <TextField onChange={e => onChange(e, 'email')} 
                                required label="E-Mail" variant="outlined"/>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md">
                                <TextField
                                onChange={e => onChange(e, 'password')}
                                label="Passwort"
                                type="password"
                                variant="outlined"
                                />
                            </div>
                            <div className="col-md">
                                <TextField
                                onChange={e => onChange(e, 'password_confirmation')}
                                label="Passwort Bestätigen"
                                type="password"
                                variant="outlined"
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <Button type="submit" variant="contained" color="primary" fullWidth>Registrieren</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;