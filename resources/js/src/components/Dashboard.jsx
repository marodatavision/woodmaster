import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { PERSON_API_BASE } from '../config/baseurls';
import BaseAPI from '../services/BaseApi';
import Paginator from '../styles/Paginator';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Dashboard = (props) => {

    const [people, setPeople] = useState(null);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        BaseAPI.index(PERSON_API_BASE, setPeople);
    }, [])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="card">
            <div className="card-header">
                <h3>Kunden und Mitarbeiter</h3>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    {
                        people
                        ? people.data.map((person, i) => 
                        <Accordion key={i} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${i}bh-content`}
                            id={`panel${i}bh-header`}
                            >
                                <Grid container item xs={12} spacing={3}>
                                    <Grid item xs={3}>{person.firstname} {person.lastname}</Grid>
                                    <Grid item xs={4}>{person.address}</Grid>
                                    <Grid item xs={3}>{person.company}</Grid>
                                    <Grid item xs={2}>{person.role}</Grid>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={3}>
                                    <Grid container item xs={12} spacing={3} className="font-weight-bold">
                                        <Grid item xs={6}>Auftragstitel</Grid>
                                        <Grid item xs={3}>Fällig Am</Grid>
                                        <Grid item xs={3}>Status</Grid>
                                    </Grid>
                                    {
                                        person.orders.map((order, j) => (
                                            <Grid key={j} container item xs={12} spacing={3}>
                                                <Grid item xs={6}><Button onClick={e => props.setSelectedOrder(order)} variant="outlined">{order.title}</Button></Grid>
                                                <Grid className="d-flex justify-content-center align-items-center" item xs={3}>{order.deadline}</Grid>
                                                <Grid className="d-flex justify-content-center align-items-center font-weight-bold" item xs={3} style={{backgroundColor: `rgba(${235 - Math.round(235*order.state)}, ${Math.round(235*order.state)}, 130, 0.3)`}}>{Math.round(order.state * 100)} %</Grid>
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
                {
                    people
                    ? <Paginator data={people} setData={setPeople}/>
                    : null
                }
            </div>           
        </div>
    )
}

export default Dashboard;