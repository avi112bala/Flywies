import React from "react";

const StatsCards = () => {
  const stats = [
    { title: "Total Users", count: "12,750", color: "primary" },
    { title: "Total Drivers", count: "7,920", color: "success" },
    { title: "Total Hosts", count: "3,460", color: "warning" },
    { title: "Total Bookings", count: "5,600", color: "info" },
  ];

  return (
    <div className="row g-3">
      {stats.map((stat, index) => (
        <div key={index} className="col-md-3">
          <div className={`card text-white bg-${stat.color}`}>
            <div className="card-body text-center">
              <h5>{stat.title}</h5>
              <h2>{stat.count}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;