import { STARTING_REQUEST_SESSION, FINISHED_REQUEST_SESSION } from '../actions/actionTypes';

const INITIAL_STATE = {
  isFetching: true,
  data: []
}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case STARTING_REQUEST_SESSION:
      return {...state, isFetching: true }
    case FINISHED_REQUEST_SESSION:
      return {...state,
        isFetching: false,
        data: action.payload.data
      }
    default:
      return state;
  }
}
