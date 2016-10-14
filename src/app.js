import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory, hashHistory, DefaultRoute } from "react-router";
import routes from './routes';
import Landing from './pages/Landing/Landing';
require('./app.css');

ReactDOM.render(
    <Router history={browserHistory} routes={routes}>
    </Router>,
  document.getElementById('solar'));
