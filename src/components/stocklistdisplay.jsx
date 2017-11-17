import React from 'react';
import PropTypes from 'prop-types';
import Stock from './stock';

const StockListDisplay = ({ stock_list, onStockClick }) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="card">
          {
            stock_list.map(stock =>
              (<Stock
                key={stock.id}
                {...stock}
                onClick={
                  () => onStockClick(stock.id)
                        }
              />))
          }
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
