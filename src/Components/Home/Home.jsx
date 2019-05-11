import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import homeBackground from '../../assets/img/main-background.jpg';
import HomeLogo from '../../assets/img/main-logo.svg';

const styles = theme => ({
    landingBackground: {
        minHeight: 667,
        background: `linear-gradient(rgba(36,36,36,0.5), rgba(0,0,0,0.95)), url(${homeBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        overflow: 'hidden',
        width: '100%',
        margin: '0 auto',
        padding: `${theme.spacing.unit * 25}px 0 ${theme.spacing.unit * 15}px`,
    },
    landingLogo: {
        maxWidth: 1000,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 10}px 0 ${theme.spacing.unit * 15}px`,
    },
    mainContainer: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        padding: `${theme.spacing.unit * 8}px 0`,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    avatar: {
        height: 100,
        width: 100
    }
});

const Home = ({ classes }) => {

    return (
        <>
            <CssBaseline />
            <main>
                <Fade in timeout={1000}>
                <div className={classes.landingBackground}>
                    <div className={classes.landingLogo}>
                    <Grid container spacing={16} justify="center">
                        <Grid item xs={11} sm={10} md={10} lg={12}>
                            <img src={HomeLogo} alt="home-logo" />
                        </Grid>
                    </Grid>
                    </div>
                </div>
                </Fade>
                <Fade in timeout={1000}>
                <div className={classes.mainContainer}>
                        <Grid container spacing={24} alignContent="flex-start">
                            <Grid item xs={12} lg={5}>
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar
                                                className={classes.avatar}
                                                src={'../assets/img/me.jpg'}
                                                alt="avatar-image"
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Hi. I am Tommi Sääskilahti, web developer and professional 3D-artist."
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="subtitle2" color="textPrimary" align="left">
                                            I am IT-engineer student with nine years of experience of 3D-modeling and digital arts.
                                            My new passion is web development, full stack development to be precise.
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="My skills"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="3D"
                                            secondary={
                                                "Modeling, Animation, Visualization"
                                            }
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Front end"
                                            secondary={
                                                "HTML, CSS, Javascript with ES6, React"
                                            }
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Back end"
                                            secondary={
                                                "Node.js, SQL + NoSQL, Sysadmin, data APIs"
                                            }
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Cloud services"
                                            secondary={
                                                "Serverless, VPS (e.g. DigitalOcean, Azure)"
                                            }
                                        />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <List>
                                    <ListItem
                                    >
                                        <ListItemText
                                            primary="Software"
                                        />
                                    </ListItem>
                                    <ListItem dense={true}>
                                        <ListItemIcon>
                                            <object height="30px" data="../../assets/img/software/3ds_max.svg" type="image/svg+xml" aria-label="Autodesk 3ds Max" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Autodesk 3ds Max"
                                        />
                                    </ListItem>
                                    <ListItem dense={true}>
                                        <ListItemIcon>
                                            <object height="30px" data="../../assets/img/software/autocad.svg" type="image/svg+xml" aria-label="Autodesk AutoCAD" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Autodesk AutoCAD"
                                        />
                                    </ListItem>
                                    <ListItem dense={true}>
                                        <ListItemIcon>
                                            <object height="30px" data="../../assets/img/software/mudbox.svg" type="image/svg+xml" aria-label="Autodesk Mudbox" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Autodesk Mudbox"
                                        />
                                    </ListItem>
                                    <ListItem dense={true}>
                                        <ListItemIcon>
                                            <object height="30px" data="../../assets/img/software/illustrator.svg" type="image/svg+xml" aria-label="Adobe Illustrator" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Adobe Illustrator"
                                        />
                                    </ListItem>
                                    <ListItem dense={true}>
                                        <ListItemIcon>
                                            <object height="30px" data="../../assets/img/software/photoshop.svg" type="image/svg+xml" aria-label="Abode Photoshop" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Abode Photoshop"
                                        />
                                    </ListItem>
                                    <ListItem dense={true}>
                                        <ListItemIcon>
                                            <object height="30px" data="../../assets/img/software/archicad.svg" type="image/svg+xml" aria-label="Graphisoft ArchiCAD" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Graphisoft ArchiCAD"
                                        />
                                    </ListItem>
                                    <ListItem dense={true}>
                                        <ListItemIcon>
                                            <object height="30px" data="../../assets/img/software/blender.svg" type="image/svg+xml" aria-label="Blender by Blender Foundation" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Blender by Blender Foundation"
                                        />
                                    </ListItem>
                                    <ListItem dense={true}>
                                        <ListItemIcon>
                                            <object height="30px" data="../../assets/img/software/zbrush.svg" type="image/svg+xml" aria-label="Pixologic Zbrush" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Pixologic Zbrush"
                                        />
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </div>
                </Fade>
            </main>
        </>
    );
};

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
