import React from 'react';
import { Link } from 'react-router-dom';

const HomeLink = props => <Link to="/" {...props} />;
const BlogLink = props => <Link to="/blog" {...props} />;
const PortfolioLink = props => <Link to="/portfolio" {...props} />;
const DashboardLink = props => <Link to="/dashboard" {...props} />;

export { HomeLink, BlogLink, PortfolioLink, DashboardLink }
