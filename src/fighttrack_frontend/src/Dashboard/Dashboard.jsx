import React, { useState } from "react";
import VerticalNav from "./VerticalNav";
import AvailableClasses from "./AvailableClasses";
// // import MySchedule from "./MySchedule";
// // import ClassCalendar from "./ClassCalendar";
// // import Profile from "./Profile";

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState("availableClasses");

    const renderSection = () => {
        switch (activeSection) {
            case "availableClasses":
                return <AvailableClasses />;
            case "mySchedule":
                return <MySchedule />;
            case "classCalendar":
                return <ClassCalendar />;
            case "profile":
                return <Profile />;
            default:
                return <AvailableClasses />;
        }
    };

    return (
        <div className="columns">
            <div className="column is-one-quarter">
                <VerticalNav setActiveSection={setActiveSection} />
            </div>
            <div className="column">
                {renderSection()}
            </div>
        </div>
    );
};

export default Dashboard;
