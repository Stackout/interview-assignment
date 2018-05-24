import { Map } from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from 'app/reducers'
import * as calculatorActions from 'app/actions/calculator'

const initialState = Map()

const enhancer = composeWithDevTools({
  actionCreators: { ...calculatorActions },
})(applyMiddleware(thunk))

export default createStore(reducer, initialState, enhancer)
