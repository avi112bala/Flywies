import React from "react";

const OverviewChart = () => {
  return (
    <div className="row g-3">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5>Overview</h5>
            {/* Replace with chart library */}
            <div className="mt-3">
              <div style={{ height: "200px", backgroundColor: "#f8f9fa" }}>
                Chart Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5>Mobile App</h5>
            <div className="mt-3 text-center">
              {/* Example Pie chart placeholder */}
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "conic-gradient(orange 65%, #f8f9fa 0)",
                  margin: "0 auto",
                }}
              ></div>
              <p>65% Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewChart;
