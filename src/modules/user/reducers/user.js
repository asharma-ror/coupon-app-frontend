import { GOT_USER } from '../actions/userActions';

const user = (state = {}, action) => {
  switch (action.type) {
    case GOT_USER:
      return {
        ...state,
        ...action.user,
      };
    default:
      return state;
  }
};

export default user;
