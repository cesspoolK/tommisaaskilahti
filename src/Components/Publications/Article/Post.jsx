import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../RichText/CodeBlock';
import Loading from '../../Global/Loading';
import Image from 'material-ui-image';
import { Paragraph, List, Heading, BlockQuote } from '../RichText/Text';
import Link from '../RichText/Link';

const styles = {
    breakLine: {
        width: '25%',
        borderWidth: 0.5,
        margin: '10px 0'
    }
};

const Post = ({ match, history, classes }) => {

    function ImageLoader(props) {
        return <Image {...props} color="transparent" disableSpinner={true} aspectRatio={16/9} style={{maxWidth: 'inherit'}} alt="article-thumbnail" />
    }

    return(
    <Query
        query={gql`
      {
        ${match.params.path}s(where: {
          slug_contains: "${match.params.slug}"
        }) {
            title
            subtitle
            description
        }
      }
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <Loading />;
            if (error) return <p>Error !</p>;

            let articleData;
            if (match.params.path === "blog") {
                articleData = data.blogs[0]
            } else {
                articleData = data.portfolios[0]
            }

            return (
                <Grid container direction="row" justify="center" xs={12} sm={12} md={12} lg={12}>
                  <Grid item xs={12} sm={12} md={12} lg={8}>
                    <Typography variant="h6">
                        {articleData.title}
                    </Typography>
                      <hr className={classes.breakLine} />
                      <Typography variant="subtitle2">
                          {articleData.subtitle}
                      </Typography>
                  </Grid>
                    <Grid item xs={12} sm={8} md={8} lg={8}>

                    <ReactMarkdown source={articleData.description}
                                   renderers={{
                                       paragraph: Paragraph,
                                       link: Link,
                                       list: List,
                                       heading: Heading,
                                       blockquote: BlockQuote,
                                       code: CodeBlock,
                                       image: ImageLoader }}
                    />
                  </Grid>
                </Grid>
            )
        }}
    </Query>
    )
};

export default withRouter(withStyles(styles)(Post));