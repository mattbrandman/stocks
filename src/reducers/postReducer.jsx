import createReducer from './createReducer';

const actionHandler = {
  ADD_STOCK: (state, action) => Object.assign({}, state, [...state, action.post]),
};
const initialState = {
  stocks: [],
};

const blogApp = createReducer(initialState, actionHandler);
export default blogApp;
