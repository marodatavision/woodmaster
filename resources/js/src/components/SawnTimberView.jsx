import { withStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SAWN_TIMBER_ORDER_API_BASE, SAWN_TIMBER_WOODEN_LOG_API_BASE } from '../config/baseurls';
import BaseAPI from '../services/BaseApi';
import CustomCardHeader from './general/CustomCardHeader';

// styles
const listItemStyle = {
    tr: {
        // backgroundColor: "#f1f1f1",
        cursor: 'pointer', 
        '&:hover': {
            backgroundColor: '#6AB9FA'
        },
        transition: "background 300ms, color 300ms",
    }
}

const SawnTimberView = (props) => {

    // url params
    const { getById } = useParams();    
    
    // states
    const [sawnTimbers, setSawnTimbers] = useState([]);

    useEffect(() => {
        console.log(getById);
        BaseAPI.show(props.by && props.by === 'order' ? SAWN_TIMBER_ORDER_API_BASE : SAWN_TIMBER_WOODEN_LOG_API_BASE, setSawnTimbers, getById);
    }, [])

    const openStorageModal = (e, st) => {
        console.log(st.storages);
    }

    return (
        <div className="card">
            <div className="card-header">
                <CustomCardHeader title={`Schnittholz zur Auftrags-ID ${getById}`}
                imgPath="/images/beams-removebg-preview.png"/>
            </div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Länge</th>
                            <th scope="col">Breite</th>
                            <th scope="col">Höhe</th>
                            <th scope="col">Qualität</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sawnTimbers
                            ? sawnTimbers.map((st, i) => (
                                <tr className={props.classes.tr} key={i}>
                                    <th scope="row">{st.length}</th>
                                    <td>{st.width}</td>
                                    <td>{st.height}</td>
                                    <td>{st.quality}</td>
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

export default withStyles(listItemStyle)(SawnTimberView);