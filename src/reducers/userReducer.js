import { normalize, schema } from 'normalizr';
import createReducer from './createReducer';

export const stockSchema = new schema.Entity('stock', {}, { idAttribute: 'name' });
export const userSchema = new schema.Entity('users', {
  stock: [stockSchema],
});

const actionHandler = {
  LOGIN_USER: (state, action) => Object.assign({}, state, { logged_in: action.status }),
  GOT_USER: (state, action) => {
    const normalizedData = normalize(action.data, userSchema);
    const { user, stocks } = normalizedData.entities;
    Object.assign({}, state, { currentUser: user });
  },
  UPDATE_STOCKS: (state, action) => Object.assign({}, state, { stocks: action.stocks }),
  GOT_USERS: (state, action) => {
    const normalizedData = normalize(action.users, [userSchema]);
    const { users, stock } = normalizedData.entities;
    return Object.assign({}, state, { users, stock });
  },
  SET_CURRENT_USER: (state, action) => Object.assign({}, state, { current_user: action.user }),

};
const initialState = {};

export const userReducer = createReducer(initialState, actionHandler);

