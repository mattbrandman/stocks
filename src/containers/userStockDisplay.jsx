import { connect } from 'react-redux';
import StockListDisplay from '../components/stocklistdisplay';

const mapStateToProps = (state) => {
  return {
    stock_list: state.userReducer.stocks,
  };
};

const UserStockDisplay = connect(mapStateToProps, null)(StockListDisplay);
export default UserStockDisplay;
