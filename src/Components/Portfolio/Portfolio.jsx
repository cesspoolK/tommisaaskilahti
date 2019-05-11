import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Fade from "@material-ui/core/Fade";
import Publications from "../Publications/Publications";
import Loading from "../Global/Loading";

import portfolioBackground from "../../assets/img/portfolio-background.jpg";
import PortfolioLogo from '../../assets/img/logo_portfolio_3d.svg';

const styles = theme => ({
    landingBackground: {
        minHeight: 666,
        background: `linear-gradient(rgba(36,36,36,0.5), rgba(0,0,0,0.95)), url(${portfolioBackground})`,
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
});

const Portfolio = ({ classes }) => {

    const path = 'portfolio';

    const [page, setPage] = React.useState(0);

    const onPrev = () => {
        setPage(page - 1)
    };

    const onNext = () => {
        setPage(page + 1)
    };

    return(
        <>
            <CssBaseline />
            <main>
                <Fade in timeout={1000}>
            <div className={classes.landingBackground}>
                <div className={classes.landingLogo}>
                    <Grid container direction="row" spacing={16} justify="center">
                        <Grid item xs={10} sm={10} md={10} lg={8}>
                            <img src={PortfolioLogo} alt="portfolio-logo" />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Fade>
                <Query
                    query={gql`
                    {
                        portfolios {
                            _id
                            title
                            subtitle
                            description
                            slug
                            createdAt
                            images{
                                url
                            }
                        }
                    }
                    `}
                >
                    {({loading, error, data}) => {
                        if (loading) return <Loading />;
                        if (error) return <p>Error!</p>;
                        return(
                            <>
                            <div className={classes.mainContainer}>
                                <Publications data={data.portfolios}
                                                  page={page}
                                                  onPrev={onPrev}
                                                  onNext={onNext}
                                                  path={path}
                                />
                            </div>
                            </>
                        )
                    }}
                </Query>
            </main>
        </>
    )
};

Portfolio.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portfolio);
