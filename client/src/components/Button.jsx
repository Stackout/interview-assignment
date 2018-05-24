import React from 'react'

export default ({ onClick, children, disabled = false }) => (
  <button
    type="button"
    className="btn btn-outline-secondary btn-sm"
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
)
