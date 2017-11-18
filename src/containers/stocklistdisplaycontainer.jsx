import { denormalize } from 'normalizr';
import { connect } from 'react-redux';
import StockListDisplay from '../components/stocklistdisplay';
import goToStock from '../actions/routing';
import { stockSchema } from '../reducers/userReducer';

const mapStateToProps = (state) => {
  const userStocks = state.userReducer.users[1].stocks;
  const entities = { stocks: state.userReducer.stocks };
  const hydratedStocks = denormalize(userStocks, [stockSchema], entities);
  return {
    stock_list: hydratedStocks,
  };
};

const mapDispatchToProps = dispatch => ({
  onStockClick: (id) => {
    dispatch(goToStock(id));
  },
});

const StockListDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(StockListDisplay);

export default StockListDisplayContainer;
