import { createAction } from 'redux-actions'

export const FETCH_PEOPLE_BEGIN = 'FETCH_PEOPLE_BEGIN'
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS'
export const FETCH_PEOPLE_FAILURE = 'FETCH_PEOPLE_FAILURE'

export const FETCH_PERSON_BEGIN = 'FETCH_PERSON_BEGIN'
export const FETCH_PERSON_SUCCESS = 'FETCH_PERSON_SUCCESS'
export const FETCH_PERSON_FAILURE = 'FETCH_PERSON_FAILURE'

export const FETCH_COLLEAGUE_BEGIN = 'FETCH_COLLEAGUE_BEGIN'
export const FETCH_COLLEAGUE_SUCCESS = 'FETCH_COLLEAGUE_SUCCESS'
export const FETCH_COLLEAGUE_FAILURE = 'FETCH_COLLEAGUE_FAILURE'

export function fetchPeople(){
    return dispatch => {
        dispatch(fetchPeopleBegin());
        return fetch("http://localhost/api/people")
            .then(handleErrors)
            .then(res => res.json())
            .then(people => {

                dispatch(fetchPeopleSuccess(people));
                return people;
            })
            .catch(error => dispatch(fetchPeopleFailure(error)));
    };


}
 
export function fetchPerson(id = 1){
    return dispatch => {
        dispatch(fetchPersonBegin());
        return fetch("http://localhost/api/people/" + id)
            .then(handleErrors)
            .then(res => res.json())
            .then(person => {
                dispatch(fetchPersonSuccess(person));
                return person;
            })
            .catch(error => dispatch(fetchPersonFailure(error)));
    };

}

export function fetchColleague(id){
    return dispatch => {
        dispatch(fetchColleagueBegin());
        return fetch("http://localhost/api/people/" + id)
            .then(handleErrors)
            .then(res => res.json())
            .then(person => {
                dispatch(fetchColleagueSuccess(person));
                return person;
            })
            .catch(error => dispatch(fetchColleagueFailure(error)));
    };

}


function handleErrors(response)
{
    if(!response.ok)
        throw Error(response.statusText);
    

    return response;
}

/**
 * Fetch a list of all people from our
 * Laravel API.
 */
export const fetchPeopleBegin = () => ({
    type: FETCH_PEOPLE_BEGIN
});

export const fetchPeopleSuccess = (people) => ({
    type: FETCH_PEOPLE_SUCCESS,
    payload: { people }
});

export const fetchPeopleFailure = (error) => ({
    type: FETCH_PEOPLE_FAILURE,
    payload: { error }
});

/**
 * Fetch a specific person from our
 * Laravel API.
 */
export const fetchPersonBegin = () => ({
    type: FETCH_PEOPLE_BEGIN
});

export const fetchPersonSuccess = (person) => ({
    type: FETCH_PERSON_SUCCESS,
    payload: { person }
});

export const fetchPersonFailure = (error) => ({
    type: FETCH_PERSON_FAILURE,
    payload: { error }
});

/**
 * Fetch a specific person from our
 * Laravel API.
 */
export const fetchColleagueBegin = () => ({
    type: FETCH_COLLEAGUE_BEGIN
});

export const fetchColleagueSuccess = (colleague) => ({
    type: FETCH_COLLEAGUE_SUCCESS,
    payload: { colleague }
});

export const fetchColleagueFailure = (error) => ({
    type: FETCH_COLLEAGUE_FAILURE,
    payload: { error }
});