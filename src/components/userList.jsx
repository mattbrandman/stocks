import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { goToUser } from '../actions/routing';

const UserList = ({ users, handleClick }) => (
  <div className="col-6">
  <h3> Users </h3>
  {
  users.map(user =>
    (
      <button key={user.id} onClick={() => handleClick(user.id)} className="btn btn-block btn-outline-primary"> {user.username} </button>
    ))
  }
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    handleClick: id => {
     dispatch(goToUser(id))
    }
  }
}; 

const mapStateToProps = state => {
  return {
    users: Object.values(state.userReducer.users || []),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
