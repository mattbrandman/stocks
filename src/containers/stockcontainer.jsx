import { connect } from 'react-redux';
import Stock from '../components/stock';

const mapStateToProps = (state) => {
  const stock = state.stockReducer.stocks.filter(s => s.id == state.router.location.pathname.split('/').pop())[0];
  console.log(stock);
  return {
    name: stock.name,
    symbol: stock.symbol,
    price: stock.price,
  };
};

const StockContainer = connect(mapStateToProps, null)(Stock);

export default StockContainer;
