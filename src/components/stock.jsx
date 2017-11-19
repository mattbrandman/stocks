import React from 'react';
import PropTypes from 'prop-types';

const Stock = ({ name, price }) => (
  <div className="card">
    <div className="card-body">
      <h1> <strong> { name } </strong> </h1>
      <p>Price: { price } </p>
    </div>
  </div>
);

Stock.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Stock;
