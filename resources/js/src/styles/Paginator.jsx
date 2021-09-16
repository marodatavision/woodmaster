import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FirstPageIcon from '@material-ui/icons/FirstPage';   
import LastPageIcon from '@material-ui/icons/LastPage';
import { Button, Chip } from '@material-ui/core';
import axios from 'axios';
import LogMessager from '../config/LogMessager';

const Paginator = ({data, setData}) => {

    const onPageClick = (page_url) => {
        if(page_url){
            axios.get(page_url)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                LogMessager.responseErrorLog(error, 'Paginator - onPageClick')
            })
        }
    }

    return(
        <div className="d-flex justify-content-end">
            <Button disabled={data.current_page === 1} className="mr-3" onClick={e => onPageClick(data.first_page_url)} variant="contained" color="primary"><FirstPageIcon /></Button>
            <Button disabled={data.current_page === 1} className="mr-3" onClick={e => onPageClick(data.prev_page_url)} variant="contained" color="primary"><ChevronLeftIcon /></Button>
            <Chip className="mr-3" label={data.current_page} variant="outlined"/>
            <Button disabled={data.current_page === data.last_page} className="mr-3" onClick={e => onPageClick(data.next_page_url)} variant="contained" color="primary"><ChevronRightIcon /></Button>
            <Button disabled={data.current_page === data.last_page} onClick={e => onPageClick(data.last_page_url)} variant="contained" color="primary"><LastPageIcon /></Button>                       
        </div>
    )
}

export default Paginator;