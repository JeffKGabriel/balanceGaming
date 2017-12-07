import React from 'react'
import {applyRouterMiddleware, Router, Route, IndexRoute, useRouterHistory } from 'react-router'

import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)()


import Main from '../components/Main.js'
import Home from '../components/Home.js'
import News from '../components/News.js'
import NewsPage from '../components/NewsPage.js'
import Login from '../components/Login.js'
import AllTeams from '../components/Rosters/AllTeams.js'
import MediaIndex from '../components/media/MediaIndex.js'
import Partners from '../components/Partners.js'
import About from '../components/About.js'
import Store from '../components/Store.js'
import Streams from '../components/Streams.js'
import PlayerProfile from '../components/Rosters/PlayerProfile.js'
import Team from '../components/Rosters/Team.js'


import { useScroll } from 'react-router-scroll';


// onUpdate={() => window.scrollTo(0, 0)}
/*
const shouldUpdateScroll = (prevRouterProps, {routes}) => {

  console.log(prevRouterProps);
  //console.log(location);
  return true;
  //prevRouterProps && location.pathname !== prevRouterProps.location.pathname
}
*/

const routes = (
  <Router history={appHistory}
  render={applyRouterMiddleware(useScroll(

    (prevRouterProps, {location},) => {

      if(location.action === "POP"){
        return true;
      }
      else if(location.state.scrollToTop === true){
        return[0,0];
      }
      return true;
    }

   ))}
  >

    <Route path='/' component={Main}>

      <Route path='/Home' component={Home} />
      <Route path='/News' heyy='nadia' component={News} />
      <Route path='/newsPage' component={NewsPage} />
      <Route path='/login' component={Login} />
      <Route path='/Rosters' component={AllTeams} />
      <Route path='/Streams' component={Streams} />
      <Route path='/Team' component={Team} />
      <Route path='/Media' component={MediaIndex} />
      <Route path='/Partners' component={Partners} />
      <Route path='/About' component={About} />
      <Route path='/Store' component={Store} />
      <Route path='/PlayerProfile' component={PlayerProfile} />

      <IndexRoute component={Home} />
      </Route>
  </Router>
)

export default routes
