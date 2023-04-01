import React from "react";
import {  Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <ul>
       <li><Link to="/form">Add New Blog</Link></li>
      </ul> <ul>
       <li><Link to="Show">Show All Blogs</Link></li>
      </ul>

    </div>
  );
};
export default Dashboard;