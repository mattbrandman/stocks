import React from 'react';
import { connect } from 'react-redux';
import StockListDisplay from '../components/stocklistdisplay';
import goToStock from '../actions/routing';

const mapStateToProps = (state) => {
  return {
    stock_list: [{ id: 3, name: 'hi', symbol: 'bob', price: 10 }],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStockClick: (id) => {
      dispatch(goToStock(id));
    },
  };
};

const StockListDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(StockListDisplay);

export default StockListDisplayContainer;
