import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Image from 'material-ui-image'


const styles = theme => ({
    article: {
        height: '100%',
        minHeight: '190px',
        marginTop: '5x',
        marginBottom: '40px',
        display: 'flex',
        //background: '#292929',
        borderWidth: 1,
        borderColor: '#1e1e1e',
        padding: '-10px -10px -10px -10px',
    },
    articleContent: {
        padding: '1em',
    },
    articleTitle: {
        fontSize: '16px'
    },
    articleSubtitle: {
        color: '#cbcbcb',
        fontSize: '15px',
    },
    moreButton: {
        color: "#547946",
        borderColor: "#547946"
    },
    routerLink: {
        display: 'block',
        width: '100%'
    },
    breakLine: {
        width: '100%',
        borderWidth: 0.5,
        margin: '10px 0',
        borderColor: '#6a6a6a'
    },
});
const CardItem = ({ classes, item, path }) => {

    return(
        <>
        <Grid className={classes.article} container spacing={16} xs={12} sm={12} md={8} lg={8} justify="space-evenly" alignItems="center">
            <Grid container direction="row" justify="space-evenly">
            <Grid className={classes.articleContent} item xs={4} sm={2} md={2} lg={2}>
                <Image imageStyle={{ height: '100%', width: '100%', objectFit: 'cover', overflow: 'hidden' }} color="transparent" disableSpinner={true} src={'https://www.tommisaaskilahti.fi' + item.images[0].url} alt="article-thumbnail" />
            </Grid>
            <Grid className={classes.articleContent} item xs={7} sm={6} md={6} lg={6}>
                <Typography className={classes.articleTitle} variant="subtitle1">
                    {item.title}
                </Typography>
                <hr className={classes.breakLine} />
                <Typography className={classes.articleSubtitle} variant="subtitle2">
                    {item.subtitle}
                </Typography>
            </Grid>
            </Grid>
            <Grid container direction="row" xs={12} sm={12} md={12} lg={11} justify="flex-end">
                <Button size="small" component={Link} to={`${path}/article/${item.slug}`} color="secondary">READ MORE...</Button>
            </Grid>
        </Grid>
        </>
    );
};

CardItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardItem);
