import React, { useEffect, useState } from "react";
import { allcount } from "../Routes";

const StatsCards = () => {
  const [data,setData]=useState([])
   const getalldata = async (e) => {
     try {
       const response = await allcount();
       console.log("Admin Logged In:", response);
     } catch (error) {
       console.error("Error Logging In:", error);
     }
   };

  useEffect(()=>{
    getalldata();
  },[data])

  return (
    <div className="row g-3">
      {data.map((stat, index) => (
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
