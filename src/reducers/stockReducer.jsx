import createReducer from './createReducer';

const actionHandler = {
  ADD_STOCK: (state, action) => Object.assign({}, state, {
    stocks: [
      ...state.stocks,
      action.stock,
    ],
  }),
};

const initialState = {
  stocks: [],
};

const stockReducer = createReducer(initialState, actionHandler);
export default stockReducer;
