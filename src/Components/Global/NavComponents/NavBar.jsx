import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Mail } from '@material-ui/icons';
import ContactView from './ContactView';
import Grid from '@material-ui/core/Grid';
import DrawerView from './DrawerView';

const styles = theme => ({
    root: {
        paddingRight: 0,
        display: 'flex',
        flexGrow: 1
    },
    appBar: {
        paddingRight: 0,
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    navContainer: {
        marginRight: 20,
    },
    contactButton: {
        justifyContent: 'flex-end',
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
        fontSize: 20
    },
});

const NavBar = ({ classes }) => {

    const [drawerOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => setIsOpen(!drawerOpen);

    const [contactOpen, setContactOpen] = React.useState(false);
    const openContact = () => setContactOpen(!contactOpen);

        return(
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar
                    position="fixed"
                    className={classes.appBar}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open navigation"
                            onClick={toggleDrawer}
                            className={classes.drawerButton}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Grid container justify="flex-end">
                            <Button size="small" onClick={openContact}>
                                CONTACT
                                <Mail className={classes.rightIcon} />
                            </Button>
                        </Grid>
                    </Toolbar>
                    <DrawerView drawerOpen={drawerOpen} close={toggleDrawer} />
                </AppBar>
                <main>
                    <ContactView contactOpen={contactOpen} closeContact={openContact} />
                </main>
            </div>
        )
};

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(NavBar);

