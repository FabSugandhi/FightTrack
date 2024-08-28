import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ManagementNav from "./ManagementNav";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <div className="columns is-multiline">
            <div className="column is-one-third">
              <div className="box has-text-centered">
                <p className="title">1,234</p>
                <p className="subtitle">Total Members</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="box has-text-centered">
                <p className="title">78</p>
                <p className="subtitle">Memberships Sold This Month</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="box has-text-centered">
                <p className="title">32</p>
                <p className="subtitle">Free Trials (last 30 days)</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="box has-text-centered">
                <p className="title">18</p>
                <p className="subtitle">Average Class Size</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="box has-text-centered">
                <p className="title">54%</p>
                <p className="subtitle">Conversion Rate</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="box has-text-centered">
                <p className="title">$45,231</p>
                <p className="subtitle">Membership Revenue </p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="box has-text-centered">
                <p className="title">82%</p>
                <p className="subtitle">Attendance Rate</p>
              </div>
            </div>
          </div>
        );
      case "ClassManagement":
        return (
          <div className="columns is-multiline">
            <div className="column is-full">
              <div className="box has-text-centered">
                <p className="title">Class Management</p>
                <p className="subtitle">Manage your classes here</p>
                {/* Add additional class management content as needed */}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <ManagementNav setActiveSection={setActiveSection} activeSection={activeSection} />
      </div>
      <div className="column">
        {renderSection()}
      </div>
    </div>
  );
};

export default Dashboard;
