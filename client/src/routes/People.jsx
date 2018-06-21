import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PeopleRoot from 'app/components/people/PeopleRoot'
import NotFound from 'app/components/NotFound'

export default ({ match }) => (
  <Switch>
    <Route exact path="/ch2/people" component={PeopleRoot} />
    <Route path="/ch2/people/:id" component={PeopleRoot} />
  )}/>
    <Route component={NotFound} />
  </Switch>
)
