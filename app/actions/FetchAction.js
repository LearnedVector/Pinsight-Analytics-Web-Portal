import axios from 'axios';
// import { STARTING_REQUEST, FINISHED_REQUEST } from './actionTypes';

// const graphqlUrl = '/graphql';

function startingRequest(STARTING_REQUEST){
  return {
    type: STARTING_REQUEST
  }
}

function finishedRequest(response, FINISHED_REQUEST){
  return {
    type: FINISHED_REQUEST,
    payload: response
  }
}

export function fetchFromGraphQL(query, STARTING_REQUEST, FINISHED_REQUEST){

  return function(dispatch){
    
    dispatch(startingRequest(STARTING_REQUEST));

    return axios.post('/graphql', {
      query: query
    }).then( response => dispatch(finishedRequest(response, FINISHED_REQUEST)));

  }
}

// const request = axios.post(graphqlUrl, {
//   query: '{events{id}}'
// })
