import React from 'react';
import PropTypes from 'prop-types';
import { denormalize } from 'normalizr';
import { connect } from 'react-redux';
import StockListDisplay from '../components/stocklistdisplay';
import { stockSchema } from '../reducers/userReducer';
import { getUsers } from '../actions/user';
import Stock from '../components/stock';

function getStockList(state, ownparams) {
  const uId = ownparams.match.params.id;
  if(state.userReducer.users === undefined) {
    return []
  }
  let userStocks = state.userReducer.users[uId].stock;
  const entities = { stock: state.userReducer.stock };
  const hydratedStocks = denormalize(userStocks, [stockSchema], entities);
  try {
    userStocks = Object.values(hydratedStocks);
  } catch (e) {
    userStocks = [];
  }
  return userStocks;
}

const mapStateToProps = (state, ownparams) => {
  return {
    stock_list: getStockList(state, ownparams),
  };
};


class UserStockDisplay extends React.Component {
  render() {
    return (
      <div className="col-6">
        <h3> Stocks </h3>
        <StockListDisplay stock_list={this.props.stock_list} />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  null,
)(UserStockDisplay);

UserStockDisplay.propTypes = {
  stock_list: PropTypes.arrayOf(Stock).isRequired,
};

