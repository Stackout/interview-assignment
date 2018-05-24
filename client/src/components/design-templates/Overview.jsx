import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div className="container">
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Design Templates</h5>
        <p className="card-text">
          The following design templates provide UI for each discrete screen of
          the LinkedUp application. Your task is to decompose these templates to
          build out the application; implementing all necessary components,
          actions, reducers, and selectors. Reference
          <code> chapter-2/linkedup-ux-guide.pdf</code> to understand the
          expected user flow and experiences.
        </p>
        <ul className="list-unstyled">
          <li className="mb-4">
            <h5 className="mt-0 mb-1">Initial State / No Person</h5>
            <p className="m-0">
              When the user has yet to select a person to view.
            </p>
            <Link to="/ch2/design-templates/no-person">View template</Link>
          </li>
          <li className="mb-4">
            <h5 className="mt-0 mb-1">Loading</h5>
            <p className="m-0">
              Display while person data is being requested from the API.
            </p>
            <Link to="/ch2/design-templates/person-loading">View template</Link>
          </li>
          <li className="mb-4">
            <h5 className="mt-0 mb-1">Person</h5>
            <p className="m-0">
              Display a selected person's detailed information.
            </p>
            <Link to="/ch2/design-templates/person">View template</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)
