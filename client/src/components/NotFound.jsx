import React from 'react'
import Button from 'app/components/Button'
import styled from 'react-emotion'

export default ({ location }) => (
  <p style={{ margin: 20 }}>
    <i>{location.pathname}</i> not found.
  </p>
)
