import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
    uri: "https://www.tommisaaskilahti.fi/graphql"
});

const theme = createMuiTheme({

    palette: {
        type: 'dark',
        primary: {
            light: '#ffffff',
            main: '#242424',
        },
        secondary: {
            dark: '#1b5e20',
            main: '#388e3c',
            light: '#66bb6a',
        },
        error: {
            dark: '#b71c1c',
            main: '#e53935',
            light: '#ef5350',
        }
    },
    typography: {
        useNextVariants: true,
        fontSize: 13,
    },
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
            <Router>
                <App />
            </Router>
        </MuiThemeProvider>
    </ApolloProvider>, document.getElementById('root'));

serviceWorker.register();
