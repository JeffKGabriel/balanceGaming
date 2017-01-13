import React from 'react'
import {applyRouterMiddleware, Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router'

import Main from '../components/Main.js'
import Home from '../components/Home.js'
import News from '../components/News.js'
import NewsPage from '../components/NewsPage.js'
import Login from '../components/Login.js'
import AllTeams from '../components/Rosters/AllTeams.js'
import MediaIndex from '../components/media/MediaIndex.js'
import Partners from '../components/Partners.js'
import About from '../components/About.js'
import PlayerProfile from '../components/Rosters/PlayerProfile.js'

import { useScroll } from 'react-router-scroll';


// onUpdate={() => window.scrollTo(0, 0)}

const routes = (
  <Router history={hashHistory}
  render={applyRouterMiddleware(useScroll())}
  >

    <Route path='/' component={Main}>

      <Route path='/Home' component={Home} />
      <Route path='/News' heyy='nadia' component={News} />
      <Route path='/newsPage' component={NewsPage} />
      <Route path='/login' component={Login} />
      <Route path='/Rosters' component={AllTeams} />
      <Route path='/Media' component={MediaIndex} />
      <Route path='/Partners' component={Partners} />
      <Route path='/About' component={About} />
      <Route path='/PlayerProfile' component={PlayerProfile} />

      <IndexRoute component={Home} />
      </Route>
  </Router>
)

export default routes
