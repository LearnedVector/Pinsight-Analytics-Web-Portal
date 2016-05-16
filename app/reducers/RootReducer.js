import { combineReducers } from 'redux';
import OverviewReducer from './OverviewReducer';
import UserReducer from './UserReducer';
import SessionReducer from './SessionReducer'
;
const rootReducer = combineReducers({
  overview: OverviewReducer,
  UserData: UserReducer,
  SessionData: SessionReducer
});

export default rootReducer;
