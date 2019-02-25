import { fetchUserData, normalizeUserResponseData } from 'src/apis/getUser';
import makeActionCreator from 'src/lib/makeActionCreator';
import { State } from 'src/redux/reducers';

export const SET_USER_DATA = 'SET_USER_DATA';
export const setUserData = makeActionCreator(SET_USER_DATA);

export const getUserDataAction: () => ThunkedAction<State> =
    () => async (dispatch, getState) => {
      try {
        const response = await fetchUserData()
        if (response.ok) {
          const userData = normalizeUserResponseData(response.data)
          dispatch(setUserData(userData))
        }
      }
      catch (e) { /* Log the error here */ }
    }
