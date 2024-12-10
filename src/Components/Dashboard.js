import React from "react";
import StatusCard from "./StatusCard";
import OverViewChart from "./OverViewChart"
import UserTable from "./UserTable"
import CarsTable from "./CarsTable"
import Sidebar from "./Sidebar";


const Dashboard = () => {
  return (
    <div className="container-fluid p-4">
      <div className="col-md-12 d-flex">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
         <div className="">
         <h2>Dashboard</h2>
         <p>Welcome !</p>
         </div>
          <StatusCard />
          <OverViewChart />
          <UserTable />
          <CarsTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
