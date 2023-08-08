import { AuthState } from './';
import { AuthActionType } from './types';

const authReducer = (state: AuthState, action: AuthActionType): AuthState => {

  switch (action.type) {

  case '[AUTH] - Login':
    return {
      ...state,
      user: action.payload
    };

  case '[AUTH] - Signout':
    return {
      ...state,
      user: null,
    };

  default:
    return state;
  }
};

export default authReducer;
