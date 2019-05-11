import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from '@material-ui/core/styles';

const styles = {
    loading: {
        float: 'center',
        position: 'inherit',
        display: 'block',
        margin: '0 0'
    },
};

const Loading = ({ classes }) => {
    return(
        <CircularProgress className={classes.loading} color="secondary" />
    )
};

export default withStyles(styles)(Loading);