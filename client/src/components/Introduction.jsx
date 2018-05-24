import React from 'react'
import { Link } from 'react-router-dom'
import Calculator from 'app/containers/Calculator'

export default () => (
  <div className="container">
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Chapter 2</h5>
        <p className="card-text">
          This simple multiplication calculator demonstrates the CQRS
          architecture and strict unidirectional data flow used by our product
          applications. This pattern is common in React/Redux implementations.
          Reducers are responsible for taking in actions and updating the store
          while selectors are responsible for querying the store and computing
          derived data.
        </p>
        <p>
          Review the code for the calculator until you have a good understanding
          of the the project structure and how it all works together. You will
          find a skeleton project structure under the <code>client </code>
          directory. After reviewing, continue with the chapter 2 guide and move
          on to the <Link to="/ch2/design-templates">design templates</Link>.
        </p>
        <Calculator />
      </div>
    </div>
  </div>
)
