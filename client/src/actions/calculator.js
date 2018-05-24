import { createAction } from 'redux-actions'

export const ADD_FACTOR = 'app/calculator/ADD_FACTOR'
export const REMOVE_FACTOR = 'app/calculator/REMOVE_FACTOR'
export const INCREMENT_FACTOR = 'app/calculator/INCREMENT_FACTOR'
export const DECREMENT_FACTOR = 'app/calculator/DECREMENT_FACTOR'

export const addFactor = createAction(ADD_FACTOR)
export const removeFactor = createAction(REMOVE_FACTOR)
export const incrementFactor = createAction(INCREMENT_FACTOR, index => index)
export const decrementFactor = createAction(DECREMENT_FACTOR, index => index)
