import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Overview from 'app/components/design-templates/Overview'
import Initial from 'app/components/design-templates/Initial'
import Loading from 'app/components/design-templates/Loading'
import Person from 'app/components/design-templates/Person'
import NotFound from 'app/components/NotFound'

export default ({ match }) => (
  <Switch>
    <Route exact path={match.url} component={Overview} />
    <Route exact path={`${match.url}/no-person`} component={Initial} />
    <Route exact path={`${match.url}/person-loading`} component={Loading} />
    <Route exact path={`${match.url}/person`} component={Person} />
    <Route component={NotFound} />
  </Switch>
)
