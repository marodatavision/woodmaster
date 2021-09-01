import React from 'react';

const DeadlineCard = ({deadline}) => {
    return(
        <div className="d-flex justify-content-center">
            <div className="alert alert-danger">Fällig am: {deadline}</div>
        </div>
    )
}

export default DeadlineCard;