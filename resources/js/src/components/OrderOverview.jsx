import { Button, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import CommentCard from './order-components/CommentCard';
import DeadlineCard from './order-components/DeadlineCard';
import StateCard from './order-components/StateCard';

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
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        {
                            selectedOrder.comments
                            ? <CommentCard comments={selectedOrder.comments}/>
                            : <div className="alert alert-info">Hier könnte ein Kommentar stehen</div>
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {   
                            selectedOrder.deadline
                            ? <DeadlineCard deadline={selectedOrder.deadline}/>
                            : <div className="alert alert-info">Hier könnte eine deadline stehen</div>
                        }
                        {   
                            selectedOrder.state
                            ? <StateCard state={selectedOrder.state ? parseFloat(selectedOrder.state) : 0}/>
                            : <div className="alert alert-info mt-3">Hier könnte ein Status stehen</div>
                        }
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default OrderOverview;