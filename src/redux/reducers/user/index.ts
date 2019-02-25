import { Reducer } from 'redux'
import { UserModel } from 'src/models/UserModel'
import { SET_USER_DATA } from '../../actions/userAction';

export type UserState = UserModel

const DEFAULT: UserState = {} as UserModel;

const user: Reducer<UserState> = (state = DEFAULT, action) => {
  switch (action.type) {

    case SET_USER_DATA:
      return action.payload

    default:
      return state
  }
};

export default user
