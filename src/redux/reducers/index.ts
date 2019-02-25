import { combineReducers } from 'redux'
import user, { UserState } from 'src/redux/reducers/user';

export interface State {
  user: UserState;
}

export default combineReducers<State>({
  user,
});
