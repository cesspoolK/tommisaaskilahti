import React from 'react';
import { withStyles } from '@material-ui/core/styles/index';
import { withRouter } from "react-router";
import Button from '@material-ui/core/Button/index';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Post from './Post';

const styles = theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    backButton: {
        color: '#ca2724',
        borderColor: '#ca2724'
    },
});

const Article = ({ match, classes, history }) => {

    const handleReturn = () => {
        history.goBack()
    };

    return(
        <div>
            <main
                className={classes.content}
            >
                <div className={classes.drawerHeader} />
                <Button className={classes.backButton} onClick={handleReturn}>
                    <ChevronLeftIcon className={classes.rightIcon} />
                    GO BACK
                </Button>
                <Post />
            </main>
        </div>
    )
};

export default withRouter(withStyles(styles)(Article));