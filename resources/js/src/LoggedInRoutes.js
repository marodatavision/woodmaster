import React from 'react';
import { Route } from 'react-router';
import Dashboard from './components/Dashboard';
import BasicErrorView from './components/errors/BasicErrorView';
import OrderOverview from './components/OrderOverview';

const LoggedInRoutes = ({loggedIn, selectedOrder, setSelectedOrder, responseError}) => {
    return(
        <>
            {
              loggedIn && !selectedOrder
              ? <Route path="/dashboard">
                  <Dashboard setSelectedOrder={setSelectedOrder}/>
                </Route>
              : loggedIn && selectedOrder
                ? <> 
                    <Route path={`/dashboard`}>
                        <OrderOverview selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder}/>
                    </Route>
                </>
                : responseError
                  ? <BasicErrorView errorMsg="Fehler beim einloggen! Die eingegebenen Daten sind uns nicht bekannt."/>
                  : null
            }
        </>
    )
}

export default LoggedInRoutes;