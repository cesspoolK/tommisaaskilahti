import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    mainContainer: {
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px -4px 5px 0px rgba(0,0,0,0.14),0px -1px 10px 0px rgba(0,0,0,0.12)',
    },
    paperContainer: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    avatar: {
        height: 150,
        width: 150
    }
});

function About(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.mainContainer}>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    <Grid container spacing={24} alignContent="flex-start">
                        <Grid item xs={12} lg={5}>

                            <List>
                                <Avatar
                                    className={classes.avatar}
                                    src={'../assets/img/mugshot.jpg'}
                                >
                                </Avatar>
                                <ListItem>
                                    <ListItemText
                                        primary="I am Tommi, professional 3D-artist"
                                        secondary={
                                            <React.Fragment>
                                                {' - next professional web developer'}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                            <Typography paragraph variant="p" color="textPrimary" align="left">
                                I am IT-engineer student with nine years of experience of 3D-modeling and digital arts.
                                My newest main interest is web development, full solution stack development precisely.
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
                                            <React.Fragment>
                                                <Typography component="span" className={classes.inline} color="textPrimary">
                                                    Modeling, Animation, Archiviz
                                                </Typography>
                                                {" — Modeling, Animation, Archiviz"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Front end"
                                        secondary={
                                            <React.Fragment>
                                                <Typography component="span" className={classes.inline} color="textPrimary">
                                                    HTML, CSS, Javascript + ES6, React
                                                </Typography>
                                                {" — HTML, CSS, Javascript + ES6, React"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Back end"
                                        secondary={
                                            <React.Fragment>
                                                <Typography component="span" className={classes.inline} color="textPrimary">
                                                    Node.js, SQL + NoSQL, Sysadmin, data APIs
                                                </Typography>
                                                {" — Node.js, SQL + NoSQL, Sysadmin, data APIs"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Cloud services"
                                        secondary={
                                            <React.Fragment>
                                                <Typography component="span" className={classes.inline} color="textPrimary">
                                                    Modeling, Animation, Archiviz
                                                </Typography>
                                                {" — DigitalOcean, Heroku, VPSs"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </Grid>

                        <Grid item xs={12} lg={3}>

                            <List dense={true}>
                                <ListItem
                                    dense={false}
                                >
                                    <ListItemText
                                        primary="Software"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                            <object height="30px" data="../../assets/img/software/3ds_max.svg" type="image/svg+xml" aria-label="pieru-prese" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Autodesk 3ds Max"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <object height="30px" data="../../assets/img/software/autocad.svg" type="image/svg+xml" aria-label="pieru-prese" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Autodesk AutoCAD"
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <object height="30px" data="../../assets/img/software/mudbox.svg" type="image/svg+xml" aria-label="pieru-prese" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Autodesk Mudbox"
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <object height="30px" data="../../assets/img/software/illustrator.svg" type="image/svg+xml" aria-label="pieru-prese" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Adobe Illustrator"
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <object height="30px" data="../../assets/img/software/photoshop.svg" type="image/svg+xml" aria-label="pieru-prese" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Abode Photoshop"
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <object height="30px" data="../../assets/img/software/archicad.svg" type="image/svg+xml" aria-label="pieru-prese" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Graphisoft ArchiCAD"
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <object height="30px" data="../../assets/img/software/blender.svg" type="image/svg+xml" aria-label="pieru-prese" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Blender by Blender Foundation"
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <object height="30px" data="../../assets/img/software/zbrush.svg" type="image/svg+xml" aria-label="pieru-prese" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Pixologic Zbrush"
                                        />
                                </ListItem>


                            </List>

                        </Grid>

                    </Grid>



                </div>
            </main>
        </React.Fragment>
    );
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
