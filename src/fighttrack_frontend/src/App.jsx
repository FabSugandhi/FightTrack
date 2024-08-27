import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";
import Footer from "./Footer";
import Home from "./Home";
import Class from "./Class";
import Facilities from "./Facilities";
import Membership from "./Membership";
import ContactUs from "./ContactUs";
import CategorySelection from "./CategorySelection";
import NewEntry from "./NewEntry";
import ShowEntry from "./ShowEntry";
import Pricing from "./Pricing"; // Import Pricing Table
import Purchase from "./Purchase";
import Calendar from "./Calendar"; // Import Calendar
import TermsOfService from "./TermsOfService"; // Import Terms
import PrivacyPolicy from "./PrivacyPolicy"; // Import Terms
import Login from "./Login"; // Import Login
import Booking from './Booking'; // Import BookingPage
import Dashboard from './Dashboard/Dashboard'; // Import Dashboard
// import Management from './Management'; // Import Management

const App = () => {
  const [entries, setEntries] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://journal-api-2024-ld1p.onrender.com/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));

    fetch("https://journal-api-2024-ld1p.onrender.com/entries")
      .then((res) => res.json())
      .then((data) => setEntries(data));
  }, []);

  const addEntry = async (cat_id, content) => {
    const newEntry = { category: cat_id, content: content };
    const res = await fetch("https://journal-api-2024-ld1p.onrender.com/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    });
    const returnedEntry = await res.json();
    setEntries([...entries, returnedEntry]);
    return returnedEntry._id;
  };

  const ShowEntryWrapper = () => {
    const { id } = useParams();
    const entry = entries.find((e) => e._id == id);
    const cat = entry ? categories.find((c) => c._id == entry.category) : "";
    return entry ? <ShowEntry content={entry.content} category={cat.name} /> : <h3>Entry not found!</h3>;
  };

  return (
    <>
      <Header /> {/* Add Header component */}
      <div className="is-hidden-mobile">
        <NavBar /> {/* Desktop Navbar */}
      </div>
      <div className="is-hidden-tablet">
        <MobileNavBar /> {/* Mobile Navbar */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add Login Route */}
        <Route path="/management" element={<management />} /> {/* Add Login Route */}
        <Route path="/class" element={<Class />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/pricing" element={<Pricing />} /> {/* Add PricingTable Route */}
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/category" element={<CategorySelection categories={categories} />} />
        <Route path="/calendar" element={<Calendar />} /> {/* Add Calendar Route */}
        <Route path="/booking/:day/:event" element={<Booking />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/entry">
          <Route path=":id" element={<ShowEntryWrapper />} />
          <Route path="new/:cat_id" element={<NewEntry categories={categories} addEntry={addEntry} />} />
        </Route>
        <Route path="*" element={<h3>Page not found!</h3>} />
      </Routes>
      <Footer /> {/* Add Footer component */}
    </>
  );
};

export default App;
