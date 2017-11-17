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
  stocks: [
    { id: 3, name: 'hi', symbol: 'bob', price: 10 },
  ],
};

const stockReducer = createReducer(initialState, actionHandler);
export default stockReducer;
