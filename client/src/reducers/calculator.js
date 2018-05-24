import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'
import * as actions from 'app/actions/calculator'

const initialState = fromJS({
  factors: [2, 2],
})

export default handleActions(
  {
    [actions.ADD_FACTOR]: (state, action) =>
      state.update('factors', factors => factors.push(2)),

    [actions.REMOVE_FACTOR]: (state, action) =>
      state.update('factors', factors => factors.skipLast(1)),

    [actions.INCREMENT_FACTOR]: (state, action) =>
      state.updateIn(['factors', action.payload], factor => factor + 1),

    [actions.DECREMENT_FACTOR]: (state, action) =>
      state.updateIn(['factors', action.payload], factor => factor - 1),
  },
  initialState
)
