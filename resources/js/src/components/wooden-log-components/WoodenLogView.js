import { withStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { WOODEN_LOG_ORDER_API_BASE } from '../../config/baseurls';
import BaseAPI from '../../services/BaseApi';
import CustomCardHeader from '../general/CustomCardHeader';
import ImageComponent from '../general/ImageComponent';

// styles
const listItemStyle = {
    tr: {
        // backgroundColor: "#f1f1f1",
        cursor: 'pointer', 
        '&:hover': {
            backgroundColor: '#6AB9FA'
        }
    }
}

const WoodenLogView = (props) => {

    // url params
    const { orderId } = useParams();    
    
    // states
    const [woodenLogs, setWoodenLogs] = useState(null);

    useEffect(() => {
        console.log(orderId);
        BaseAPI.show(WOODEN_LOG_ORDER_API_BASE, setWoodenLogs, orderId);
    }, [])

    return (
        <div className="card">
            <div className="card-header">
                <CustomCardHeader title={`Rundhölzer zur Auftrags-ID ${orderId}`}/>
            </div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Typ</th>
                            <th scope="col">Durchmesser</th>
                            <th scope="col">Länge</th>
                            <th scope="col">Qualität</th>
                            <th scope="col">Form</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            woodenLogs
                            ? woodenLogs.map((wl, i) => (
                                <tr className={props.classes.tr} key={i}>
                                    <th scope="row">{wl.tree_type}</th>
                                    <td>{wl.diameter}</td>
                                    <td>{wl.length}</td>
                                    <td>{wl.quality}</td>
                                    <td>{wl.shape}</td>
                                </tr>
                            ))
                            : null
                        }                   
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default withStyles(listItemStyle)(WoodenLogView);