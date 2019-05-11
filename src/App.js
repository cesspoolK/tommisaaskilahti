import React from 'react';
import { Switch, Route, withRouter } from "react-router";

import NavBar from './Components/Global/NavComponents/NavBar';
import FooBar from './Components/Global/FooBar';

import Loading from "./Components/Global/Loading";

const Home = React.lazy(() => import('./Components/Home/Home'));
const Blog = React.lazy(() => import('./Components/Blog/Blog'));
const Portfolio = React.lazy(() => import('./Components/Portfolio/Portfolio'));
const Article = React.lazy(() => import('./Components/Publications/Article/Article'));

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
          <Switch>
              <React.Suspense fallback={<Loading />}>
                  <Route exact path="/" component={ Home } />
                  <Route exact path="/blog" component={ Blog } />
                  <Route exact path="/portfolio" component={ Portfolio } />
                  <Route path="/:path/article/:slug" component={ Article } />
              </React.Suspense>
          </Switch>
        <FooBar />
      </div>
    );
  }
}

export default withRouter(App);
