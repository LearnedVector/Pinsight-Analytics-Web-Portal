import { STARTING_REQUEST_USER, FINISHED_REQUEST_USER } from '../actions/actionTypes';

const INITIAL_STATE = {
  isFetching: true,
  data: []
}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case STARTING_REQUEST_USER:
      return {...state, isFetching: true }
    case FINISHED_REQUEST_USER:
      return {...state,
        isFetching: false,
        data: action.payload.data
      }
    default:
      return state;
  }
}
