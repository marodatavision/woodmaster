import { withStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { WOODEN_LOG_ORDER_API_BASE } from '../config/baseurls';
import BaseAPI from '../services/BaseApi';
import CustomCardHeader from './general/CustomCardHeader';
import ImageComponent from './general/ImageComponent';
import HomeIcon from '@material-ui/icons/Home';
import { Accordion, AccordionDetails, AccordionSummary, Divider, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BlockIcon from '@material-ui/icons/Block';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AllOutIcon from '@material-ui/icons/AllOut';
import CategoryIcon from '@material-ui/icons/Category';

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

const WoodenLogView = (props) => {

    // url params
    const { orderId } = useParams();    
    
    // states
    const [woodenLogs, setWoodenLogs] = useState(null);
    const [expanded, setExpanded] = useState(false);

    // anonymous functions
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        console.log(orderId);
        BaseAPI.show(WOODEN_LOG_ORDER_API_BASE, setWoodenLogs, props.orderId ? props.orderId : orderId);
    }, [])

    return (
        <div className="card">
            <div className="card-header">
                <CustomCardHeader title={`Rundhölzer`}/>
            </div>
            <div className="card-body">
            {
                woodenLogs
                ? woodenLogs.map((wl, i) => 
                <Accordion key={i} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                    <AccordionSummary
                    style={{backgroundColor: '#e6e6e6'}}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${i}bh-content`}
                    id={`panel${i}bh-header`}
                    >
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xs={2}><ImageComponent src="/images/log_haufen-removebg-preview.png" height="40"/></Grid>
                            <Grid item xs={2}><CategoryIcon/>{wl.tree_type}</Grid>
                            <Grid item xs={2}><BlockIcon/>{wl.diameter}</Grid>
                            <Grid item xs={2}><SettingsEthernetIcon/>{wl.length}</Grid>
                            <Grid item xs={2}><AssessmentIcon/>{wl.quality}</Grid>
                            <Grid item xs={2}><AllOutIcon/>{wl.shape}</Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={3}>
                            <Grid container item xs={12} spacing={3} className="font-weight-bold">
                                <Grid item xs={2}></Grid>
                                <Grid item xs={2}>Länge</Grid>
                                <Grid item xs={2}>Breite</Grid>
                                <Grid item xs={2}>Höhe</Grid>
                                <Grid item xs={2}>Qualität</Grid>
                                <Grid item xs={2}>Lagerort</Grid>
                            </Grid>
                            <Grid item xs={12}><Divider /></Grid>
                            {
                                wl.sawn_timbers.map((st, j) => (
                                    <Grid key={j} container item xs={12} spacing={3}>
                                        <Grid item xs={2}><ImageComponent src="/images/beams-removebg-preview.png" height="40"/></Grid>
                                        <Grid item xs={2}>{st.length}</Grid>
                                        <Grid item xs={2}>{st.width}</Grid>
                                        <Grid item xs={2}>{st.height}</Grid>
                                        <Grid item xs={2}>{st.quality}</Grid>
                                        <Grid item xs={2}><HomeIcon /></Grid>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                )
                : null
            }
            </div>
        </div>
    );
}

export default withStyles(listItemStyle)(WoodenLogView);