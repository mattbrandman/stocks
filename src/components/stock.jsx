import React from 'react';
import PropTypes from 'prop-types';

const Stock = ({ name, symbol, price }) => (
  <div className="card">
    <div className="card-body">
      <h1> <strong> { name } </strong> </h1>
      <p>Symbol: { symbol } </p>
      <p>Price: { price } </p>
    </div>
  </div>
);

Stock.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Stock;
