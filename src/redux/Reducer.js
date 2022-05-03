import { combineReducers } from 'redux';

const INITIAL_STATE = {
  token: '',
  userId: '',
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
        const newToken = action.payload;
        const id = state.userId;
        return {token: newToken, userId: id};
    case 'SET_ID':
        const token = state.token;
        const newId = action.payload;
        return {token: token, userId: newId};

    default:
      return state
  }
};

export default combineReducers({
  token: tokenReducer
});