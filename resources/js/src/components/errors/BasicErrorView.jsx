import React from 'react';

const BasicErrorView = (props) => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header alert alert-danger">
                    <h3>Ooops. Hier ist etwas schief gelaufen!</h3>
                </div>
                <div className="card-body">
                    {
                        props.errorMsg
                        ? <div className="alert alert-danger">
                            {props.errorMsg}
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default BasicErrorView;