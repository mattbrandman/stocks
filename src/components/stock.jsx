import React from 'react';
import PropTypes from 'prop-types';

const Stock = ({ name = 'My First Blog Post', symbol = 'XYZ', price = 10 }) => (
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-6">
        <h1> <strong> { name } </strong> </h1>
        <p>{ symbol } { price } </p>
      </div>
    </div>
  </div>
);

Stock.propTypes = {
  name: PropTypes.string,
  symbol: PropTypes.string,
  price: PropTypes.number,
};

Stock.defaultProps = {
  name: 'My First Blog Post',
  symbol: 'Hello World!',
  price: 10,
};
export default Stock;
