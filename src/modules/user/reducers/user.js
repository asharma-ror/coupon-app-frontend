import { GOT_USER } from '../actions/userActions';

const initialState = {
  user: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case GOT_USER:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};

export default user;
