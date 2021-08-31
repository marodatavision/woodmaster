import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
import Welcome from "./components/Welcome";
import AppLogo from "./styles/AppLogo";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import { Button } from "@material-ui/core";
import UserAuth from "./services/UserAuth";
import LogMessager from "./config/LogMessager";
import BasicErrorView from "./components/errors/BasicErrorView";
import { useEffect } from "react";

const UserContext = React.createContext({loggedIn: false});

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [responseError, setResponseError] = useState(null);

  const logout = (e) => {
    UserAuth.logout()
    .then(response => {
      setLoggedIn(false);
      window.location.href = "/";
    })
    .catch(error => {
      LogMessager.responseErrorLog(error, "Component: App - Function: logout");
    })
  }

  useEffect(() => {
    UserAuth.checkAuth()
    .then(response => {
      if(response.data){
        setLoggedIn(true);
      }
    })
    .catch(error => {
      setResponseError(error);
      LogMessager.responseErrorLog(error, "Component: App - Function: useEffect");
    })
  }, [])

  return (
    <UserContext.Provider value={loggedIn}>
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <AppLogo />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active ml-5">
                  {
                    loggedIn
                    ? <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    : <Link className="nav-link" to="/">Home</Link>
                  }
                  
                </li>
                <li className="nav-item ml-5">
                  <Link className="nav-link" to="/about">Über uns</Link>
                </li>
              </ul>
            </div>
            {
              loggedIn
              ? <Button onClick={logout} variant="contained" color="primary">Logout</Button>
              : null
            }
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <Login setLoggedIn={setLoggedIn}/>
            </Route>
            <Route path="/register">
              <Register setLoggedIn={setLoggedIn}/>
            </Route>
            <Route exact path="/">
              <Welcome />
            </Route>
            {
              loggedIn
              ? <Route path="/dashboard">
                <Dashboard />
              </Route>
              : responseError
                ? <BasicErrorView errorMsg="Fehler beim einloggen! Die eingegebenen Daten sind uns nicht bekannt."/>
                : null
            }
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
