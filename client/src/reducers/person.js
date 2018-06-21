import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'
import { FETCH_PERSON_BEGIN, FETCH_PERSON_SUCCESS, FETCH_PERSON_FAILURE } from 'app/actions/people'

const initialState = {
    person: [],
    loading: false,
    error: null
};

export default function personReducer(state = initialState, action){
    switch(action.type){

        case FETCH_PERSON_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_PERSON_SUCCESS:
            return {
                ...state,
                loading: false,
                item: action.payload.person
            };

        case FETCH_PERSON_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                item: null,
            }
            break;
        default:
            return state;

    }
}