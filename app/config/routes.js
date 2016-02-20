var React = require('react'),
    Main = require('../components/Main'),
    Home = require('../components/Home'),
    Router = require('react-router'),
    Route = Router.Route,
    IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
  </Route>
);
