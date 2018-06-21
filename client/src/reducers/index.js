import { combineReducers } from 'redux-immutable'
import calculator from 'app/reducers/calculator'
import people from 'app/reducers/people'
import person from 'app/reducers/person'
import colleague from 'app/reducers/colleague'

export default combineReducers({
  calculator, people, person, colleague
})
