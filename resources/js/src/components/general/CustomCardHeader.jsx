import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import ImageComponent from './ImageComponent';


const CustomCardHeader = ({title, setMethod, imgPath}) => {
    let history = useHistory();
    return(
        <>
            <h3>{title}</h3>
            <div className="d-flex justify-content-between">
                <div>
                    {
                        imgPath
                        ? <ImageComponent src={imgPath} />
                        : null
                    }
                </div>
                <div>
                {
                    setMethod
                    ? <Button variant="outlined" color="primary" onClick={e => setMethod(null)}>Zurück</Button>
                    : <Button variant="outlined" color="primary" onClick={e => history.goBack()}>Zurück</Button>
                }
                </div>
            </div>
        </>
    )
}

export default CustomCardHeader;