import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Introduction from 'app/components/Introduction'
import DesignTemplates from 'app/routes/DesignTemplates'
import NotFound from 'app/components/NotFound'

export default () => (
  <Switch>
    <Route exact path="/ch2" component={Introduction} />
    <Route path="/ch2/design-templates" component={DesignTemplates} />
    <Route component={NotFound} />
  </Switch>
)
