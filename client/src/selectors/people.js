import { createSelector } from 'reselect'

export const getPeople = state => state.getIn(['people']);