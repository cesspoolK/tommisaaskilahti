import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    footer: {
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.1),0px -4px 5px 0px rgba(0,0,0,0.07),0px -1px 10px 0px rgba(0,0,0,0.06)',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 1.5,
    },
});

const FooBar = ({ classes }) => {

        return (
            <>
                <footer className={classes.footer}>
                    <Typography variant="subtitle2" align="center" color="textSecondary" component="p">
                        Copyright 2019 Tommi Sääskilahti
                    </Typography>
                </footer>
            </>
        )
};

FooBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(FooBar);
