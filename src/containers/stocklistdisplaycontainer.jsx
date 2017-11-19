import React from 'react';
import PropTypes from 'prop-types';
import { denormalize } from 'normalizr';
import { connect } from 'react-redux';
import StockListDisplay from '../components/stocklistdisplay';
import { stockSchema } from '../reducers/userReducer';
import { getUsers } from '../actions/user';

function getStockList(state) {
  const userStocks = state.userReducer.stocks;
  const entities = { stocks: state.userReducer.stock };
  let forCurrent = state.userReducer.stock || [];
  const hydratedStocks = denormalize(userStocks, [stockSchema], entities);
  forCurrent = Object.values(forCurrent);
  return forCurrent;
}

const mapStateToProps = (state) => {
  return {
    stock_list: getStockList(state),
  };
};

const mapDispatchToProps = dispatch => ({
  getUsers: () => {
    dispatch(getUsers());
  },
});

class StockListDisplayContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <StockListDisplay stock_list={this.props.stock_list}/>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockListDisplayContainer);

StockListDisplayContainer.propTypes = {
  getUsers: PropTypes.func.isRequired,
  stock_list: PropTypes.arrayOf(StockListDisplay).isRequired,
};

