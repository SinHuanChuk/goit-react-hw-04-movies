import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import {routes} from '../../Services/Routes'
import {Suspense} from 'react'
import Nav from '../Nav/Nav'

export default class App extends Component {

  render() {

    return(
      <div>
      <Nav/>
      <Suspense fallback = {<h2>...loading</h2>}>
        <Switch>
          {routes.map(route => (
            <Route {...route}/>
          ))}
        </Switch>
      </Suspense>
      </div>
    )
  }
}