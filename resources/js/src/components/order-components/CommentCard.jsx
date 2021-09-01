import React from 'react';

const CommentCard = ({comments}) => {
    return(
        <div className="card">
            <div className="card-header">
                <h5>Kommentare</h5>
            </div>
            <div className="card-body">
                <p>{comments}</p>
            </div>
        </div>
    )
}

export default CommentCard;