import React from "react";

const VerticalNav = ({ setActiveSection }) => {
  const menuItems = [
    { section: "AvailableClasses", label: "Available Classes"},
    { section: "MySchedule", label: "My Schedule" },
    { section: "ClassCalendar", label: "Class Calendar" },
    { section: "Profile", label: "Profile" },
    { section: "Pricing", label: "Membership Options" }, // Add Pricing to the menu items
  ];

  return (
    <aside className="menu">
      <p className="menu-label">
        <span className="icon-text">
          <span className="icon">
            <i className="fas fa-building"></i>
          </span>
          <span>User Dashboard</span>
        </span>
      </p>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.section}>
            <a onClick={() => setActiveSection(item.section)}>
              <span className="icon-text">
                <span className="icon">
                  <i className={item.icon}></i>
                </span>
                <span>{item.label}</span>
                {item.tag && <span className="tag is-dark is-rounded ml-auto">{item.tag}</span>}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default VerticalNav;
