import React, { useState } from "react";
import VerticalNav from "./VerticalNav";
import AvailableClasses from "./AvailableClasses";
import MySchedule from "./MySchedule";
import ClassCalendar from "./ClassCalendar";
import Profile from "./Profile";
import Pricing from "../Pricing";

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState("AvailableClasses");
    
    const renderSection = () => {
        switch (activeSection) {
            case "AvailableClasses":
                return <AvailableClasses setActiveSection={setActiveSection} />;
            case "MySchedule":
                return <MySchedule />;
            case "ClassCalendar":
                return <ClassCalendar />;
            case "Profile":
                return <Profile />;
            case "Pricing":
                return <Pricing />;
            default:
                return <AvailableClasses setActiveSection={setActiveSection} />;
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