import React from 'react';
import PropTypes from 'prop-types';

const UserSummary = ({ username }) => (
  <div className="col-12">
    <div className="card">
      <h3> { username } </h3>
      <UserStocksContainer />
    </div>
  </div>
);

UserSummary.propTypes = {
  username: PropTypes.string.isRequired,
};
