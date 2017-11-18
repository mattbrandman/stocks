import React from 'react';
import PropTypes from 'prop-types';

const StockItemDisplay = ({
  id, name, symbol, price, onClick,
}) => (
  <button onClick={onClick} className="list-group-item">
    { name }, {`'${symbol}'`}, : { price }
  </button>
);

StockItemDisplay.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  symbol: PropTypes.string,
  price: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

StockItemDisplay.defaultProps = {
  name: 'N/A',
  symbol: 'N/A',
  id: -1,
  price: 0,
};

export default StockItemDisplay;
