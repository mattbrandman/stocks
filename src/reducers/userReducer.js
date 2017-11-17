import { denormalize, normalize, schema } from 'normalizr';
import createReducer from './createReducer';

export const stockSchema = new schema.Entity('stocks', {}, { idAttribute: 'name' }  );
export const userSchema = new schema.Entity('users', {
  stocks: [stockSchema],
});

const actionHandler = {
  LOGIN_USER: (state, action) => Object.assign({}, state, { logged_in: action.login_status }),
  GOT_USER: (state, action) => {
    const normalizedData = normalize({username: "test", id: 1, stocks: [{name: "nv", price: 100}, {name: "fb", price: 200}]}, userSchema);
    const { user, stocks } = normalizedData.entities;
    Object.assign({}, state, { user, stocks });
  },
  UPDATE_STOCKS: (state, action) => Object.assign({}, state, { stocks: action.stocks }),
};
const normalizedDatas = normalize({username: "test", id: 1, stocks: [{name: "nv", price: 100}, {name: "fb", price: 200}]}, userSchema);
const { users, stocks } = normalizedDatas.entities;
const initialState = {
  logged_in: false,
  users,
  stocks,
};

export const userReducer = createReducer(initialState, actionHandler);

