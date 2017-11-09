import createReducer from './createReducer';

const actionHandler = {
  ADD_POST: (state, action) => Object.assign({}, state, [...state, action.post]),
};
const initialState = {
  posts: [],
};

const blogApp = createReducer(initialState, actionHandler);
export default blogApp;
