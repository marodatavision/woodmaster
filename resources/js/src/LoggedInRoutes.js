import React from 'react';
import { Route } from 'react-router';
import Dashboard from './components/Dashboard';
import BasicErrorView from './components/errors/BasicErrorView';
import OrderOverview from './components/OrderOverview';
import SawnTimberView from './components/SawnTimberView';
import WoodenLogView from './components/WoodenLogView';

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
                    <Route path={`/wooden-logs/order/:orderId`}>
                        <WoodenLogView />
                    </Route>
                    <Route path={`/sawn-timbers/order/:getById`}>
                        <SawnTimberView by="order"/>
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