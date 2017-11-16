import React from 'react';
import StockListDisplayContainer from '../containers/stocklistdisplaycontainer';

const Dashboard = () => (
  <div className="container-fluid mt-5">
    <div className="row">
      <div className="col-6">
        <StockListDisplayContainer />
      </div>
    </div>
  </div>
);

export default Dashboard;
