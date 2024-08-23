import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Header from "./Header";  // Import Header
import NavBar from "./NavBar";  // Import NavBar for desktop
import MobileNavBar from "./MobileNavBar";  // Import MobileNavBar for mobile
import Home from "./Home";
import AboutUs from "./AboutUs";
import Facilities from "./Facilities";
import Membership from "./Membership";
import ContactUs from "./ContactUs";
import CategorySelection from "./CategorySelection";
import NewEntry from "./NewEntry";
import ShowEntry from "./ShowEntry";

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
      <Header /> {/* Add Header component here */}
      <div className="is-hidden-mobile">
        <NavBar /> {/* Desktop Navbar */}
      </div>
      <div className="is-hidden-tablet">
        <MobileNavBar /> {/* Mobile Navbar */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/category" element={<CategorySelection categories={categories} />} />
        <Route path="/entry">
          <Route path=":id" element={<ShowEntryWrapper />} />
          <Route path="new/:cat_id" element={<NewEntry categories={categories} addEntry={addEntry} />} />
        </Route>
        <Route path="*" element={<h3>Page not found!</h3>} />
      </Routes>
    </>
  );
};

export default App;
