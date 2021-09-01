import { CircularProgress, LinearProgress, Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import React from 'react';

const StateCard = ({state}) => {

    const style = {
        backgroundColor: `rgba(${235 - Math.round(235*state)}, ${Math.round(235*state)}, 130, 0.3)`,
        borderRadius: 5,
        padding: 5,
    }

    return(
        <div className="mt-3">
            <h5 className="font-weight-bold" >Status</h5>
            <div style={style}>
                <Box display="flex" alignItems="center">
                    <Box width="100%" mr={1}>
                        <LinearProgress variant="determinate" value={Math.round(state * 100)} />
                    </Box>
                    <Box minWidth={35}>
                        <Typography variant="body2" color="textSecondary">{`${Math.round(state * 100)}%`}</Typography>
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default StateCard;