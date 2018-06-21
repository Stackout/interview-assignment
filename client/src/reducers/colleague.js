import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'
import { FETCH_COLLEAGUE_BEGIN, FETCH_COLLEAGUE_SUCCESS, FETCH_COLLEAGUE_FAILURE } from '../actions/people'

const initialState = {
    item: [],
    loading: false,
    error: null
};

export default function peopleReducer(state = initialState, action){
    switch(action.type){

        case FETCH_COLLEAGUE_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_COLLEAGUE_SUCCESS:
            return {
                ...state,
                loading: false,
                item: action.payload.colleague
            };

        case FETCH_COLLEAGUE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                item: [],
            }
        default:

            return state;

    }
}