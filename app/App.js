var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    routes = require('./config/routes');

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
)
