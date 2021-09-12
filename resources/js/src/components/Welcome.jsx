import React from 'react';
import { Link } from 'react-router-dom';



function Welcome({loggedIn}) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header d-flex justify-content-center">
                            <img src="images/app_logo-removebg.png" alt="" />
                        </div>

                        <div className="card-body justify-content-center">
                            <div className="d-flex justify-content-around">
                                {

                                }
                                <Link className="btn btn-primary" to={loggedIn ? "/dashboard" : "/login"}>{loggedIn ? 'Dashboard' : 'Login'}</Link>
                                <h3>Willkommen bei Woodmaster</h3>
                                {
                                    !loggedIn
                                    ? <Link className="btn btn-secondary" to="/register">Register</Link>
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;


