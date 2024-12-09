import React from "react";
import StatsCards from "./StatsCards";
import OverviewChart from "./OverviewChart";
import UsersTable from "./UsersTable";
import CarsTable from "./CarsTable";

const Dashboard = () => {
  return (
    <div className="container-fluid p-4">
      <StatsCards />
      <OverviewChart />
      <UsersTable />
      <CarsTable />
    </div>
  );
};

export default Dashboard;
