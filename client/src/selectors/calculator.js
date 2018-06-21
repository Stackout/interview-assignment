import { createSelector } from 'reselect'

export const getFactors = state => state.getIn(['calculator', 'factors'])

export const getProduct = createSelector([getFactors], factors =>
  factors.reduce((carry, factor) => carry * factor)
)

export const canRemoveFactor = createSelector(
  [getFactors],
  factors => factors.size > 2
)

export const canAddFactor = createSelector(
  [getFactors],
  factors => factors.size < 10
)
 