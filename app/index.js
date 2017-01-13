import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import routes from './config/routes.js'

import newsReducer from './reducers/news.js'
import rosterReducer from './reducers/rosterReducer.js'


// Store
const store = createStore(
  combineReducers({
    rosterReducer,
    newsReducer,
    routing: routerReducer
  }),
  applyMiddleware(thunk)
)


fetch('http://104.131.167.44:8888/api/news', {
	method: 'get'
}).then(function(response) {
  return response.json();
}).then(function(data){
  //console.log("got news");
  store.dispatch({ type: 'ADD_NEWS', data:data });
}).catch(function(err) {
  console.log(err);
});


fetch('http://104.131.167.44:8888/api/roster', {
	method: 'get'
}).then(function(response) {
  return response.json();
}).then(function(data){
  //console.log("got players");
  store.dispatch({ type: 'ADD_PLAYER', data:data });
}).catch(function(err) {
  console.log(err);
});


ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app'))
