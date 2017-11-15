import createReducer from './createReducer';

const actionHandler = {
  LOGIN_USER: (state, action) => Object.assign({}, state, { logged_in: action.login_status }),
  GOT_USER: (state, action) => Object.assign({}, state, { user: action.user }),
};
const initialState = {
  logged_in: false,
  user: {
    username: 'anon',
    JWT: 0,
  },
};

const blogApp = createReducer(initialState, actionHandler);
export default blogApp;
