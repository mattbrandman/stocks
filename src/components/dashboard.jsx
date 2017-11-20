import React from 'react';
import StockListDisplayContainer from '../containers/stocklistdisplaycontainer';
import UserList from '../components/userList';

const Dashboard = () => (
  <div className="container-fluid mt-5">
    <div className="row">
      <div className="col-6">
        <StockListDisplayContainer />
      </div>
      <div className="col-6">
        <UserList />
      </div>
    </div>
  </div>
);

export default Dashboard;
