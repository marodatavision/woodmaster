import { Button } from '@material-ui/core';
import React, { useState } from 'react';

const OrderOverview = ({selectedOrder, setSelectedOrder}) => {


    return(
        <div className="card">
            <div className="card-header">
                <h3>{selectedOrder.title}</h3>
                <div className="d-flex justify-content-between">
                    <div></div>
                    <div><Button variant="outlined" color="primary" onClick={e => setSelectedOrder(null)}>Zurück</Button></div>
                </div>
            </div>
            <div className="card-body">

            </div>
        </div>
    )
}

export default OrderOverview;