import React from "react";

const UsersTable = () => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5>User List</h5>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone No.</th>
              <th>Email ID</th>
              <th>Registration Date</th>
              <th>KYC</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Peter Thail</td>
              <td>+1 324 456 889</td>
              <td>peter@mail.com</td>
              <td>12 Aug 2023</td>
              <td>Verified</td>
              <td>
                <button className="btn btn-success btn-sm">Approve</button>
                <button className="btn btn-danger btn-sm ms-2">Reject</button>
              </td>
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
