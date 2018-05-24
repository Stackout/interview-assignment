import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from 'app/store'
import App from 'app/routes/App'

export default () => (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)
