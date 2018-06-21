import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PeopleIndex from 'app/components/People/index'
import PeopleIndex from 'app/components/People/show'
import NotFound from 'app/components/NotFound'

export default () => (
  <Switch>
    <Route exact path="/ch2/people" component={PeopleIndex} />
    <Route path="/ch2/people/" component={ShowPerson} />
    <Route component={NotFound} />
  </Switch>
)
