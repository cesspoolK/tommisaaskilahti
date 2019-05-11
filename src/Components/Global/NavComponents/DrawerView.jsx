import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { BlogLink, HomeLink, PortfolioLink } from "./NavLink";

const styles = {
    root: {
        paddingRight: 0,
        display: 'flex',
        flexGrow: 1
    },
    nested: {
        marginLeft: 32,
        marginRight: 20,
    },
};

const DrawerView = ({ classes, drawerOpen, close }) => {

    return(
        <>
            <Collapse in={drawerOpen} timeout={150} unmountOnExit>
                <List>
                    <ListItem className={classes.nested} component={HomeLink} onClick={close}>
                        <ListItemText secondary="HOME" />
                    </ListItem>
                    <ListItem className={classes.nested}component={BlogLink} onClick={close}>
                        <ListItemText secondary="BLOG"/>
                    </ListItem>
                    <ListItem className={classes.nested} component={PortfolioLink} onClick={close}>
                        <ListItemText secondary="PORTFOLIO"/>
                    </ListItem>
                </List>
            </Collapse>
        </>
    )
};

DrawerView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerView);
