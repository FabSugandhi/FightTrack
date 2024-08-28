import React from "react";

const ManagerNav = ({ setActiveSection, activeSection }) => {
  const menuItems = [
    { section: "Dashboard", label: "Dashboard"},
    { section: "ClassManagement", label: "Class Management"}
  ];

  return (
    <aside className="menu">
      <p className="menu-label">
        <span className="icon-text">
          <span className="icon">
            <i className="fas fa-building"></i>
          </span>
          <span>Gym Management</span>
        </span>
      </p>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.section}>
            <a 
              onClick={() => setActiveSection(item.section)}
              className={activeSection === item.section ? 'is-active' : ''}
            >
              <span className="icon-text">
                <span className="icon">
                  <i className={item.icon}></i>
                </span>
                <span>{item.label}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ManagerNav;
