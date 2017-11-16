import React from 'react';
import PropTypes from 'prop-types';
import StockDisplay from './stockdisplay';

const StockListDisplay = ({ stock_list, onStockClick }) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="card">
          <h3> Stock Search </h3>
          <input type="text" className="form-control" id="hi" />
          <ul className="list-group list-group-flush mt-2">
            { stock_list.map(stock => <StockDisplay key={stock.id} {...stock} onClick={() => onStockClick(stock.id)} />) }
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default StockListDisplay;


StockListDisplay.propTypes = {
  stock_list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    symbol: PropTypes.string,
    price: PropTypes.number,
  })),
  onStockClick: PropTypes.func.isRequired,
};

StockListDisplay.defaultProps = {
  stock_list: [],
};
