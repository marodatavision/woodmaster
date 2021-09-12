import { Divider } from '@material-ui/core';
import { Button, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommentCard from './order-components/CommentCard';
import DeadlineCard from './order-components/DeadlineCard';
import StateCard from './order-components/StateCard';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import CustomCardHeader from './general/CustomCardHeader';
import ImageComponent from './general/ImageComponent';

const OrderOverview = ({selectedOrder, setSelectedOrder}) => {

    const style = {
        transition: ''
    }

    return(
        <div className="card">
            <div className="card-header">
                <CustomCardHeader title={selectedOrder.title} setMethod={setSelectedOrder}/>
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
                <Divider className="mt-3" />
                <div className="d-flex justify-content-around mt-5">
                    <Link to={`/wooden-logs/order/${selectedOrder.id}`}>
                        <ImageComponent src="images/log_haufen-removebg-preview.png"/>
                    </Link>
                    <h1><SubdirectoryArrowLeftIcon fontSize="inherit"/></h1>
                    
                    <h1><SubdirectoryArrowRightIcon fontSize="inherit"/></h1>
                    <Link to={`/sawn-timbers/order/${selectedOrder.id}`}>
                        <ImageComponent src="images/beams-removebg-preview.png"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OrderOverview;