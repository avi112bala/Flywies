import React from "react";

const CarsTable = () => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5>Most Popular Rental Cars</h5>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Image</th>
              <th>Owner Name</th>
              <th>Car</th>
              <th>Documentation</th>
              <th>Total Revenue</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="/assets/images/car-1.png" alt="Car" width="50" />
              </td>
              <td>John Abraham</td>
              <td>KIA Seltos</td>
              <td>Done</td>
              <td>+FCFA 380</td>
              <td>Available</td>
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarsTable;
