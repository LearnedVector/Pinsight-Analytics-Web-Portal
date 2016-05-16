import { STARTING_REQUEST_OVERVIEW, FINISHED_REQUEST_OVERVIEW } from '../actions/actionTypes';

const INITIAL_STATE = {
  isFetching: false,
  data: []
}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case STARTING_REQUEST_OVERVIEW:
      return {...state, isFetching: true }
    case FINISHED_REQUEST_OVERVIEW:
      return {...state,
        isFetching: false,
        data: action.payload.data
      }
    default:
      return state;
  }
}
