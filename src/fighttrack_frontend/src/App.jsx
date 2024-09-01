import React from "react";
import { Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from './ProtectedRoute';
import Header from "./Header";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";
import Footer from "./Footer";
import ScrollToTop from './ScrollToTop';
import Home from "./Home";
import Class from "./Class";
import Facilities from "./Facilities";
import Membership from "./Pricing";
import ContactUs from "./ContactUs";
import Pricing from "./Pricing"; 
import Purchase from "./Purchase";
import Calendar from "./Dashboard/ClassCalendar";
import TermsOfService from "./TermsOfService"; 
import PrivacyPolicy from "./PrivacyPolicy"; 
import Login from "./Login";
import Booking from './Booking';
import Dashboard from './Dashboard/Dashboard';
import Management from './Management/Management';
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe("pk_live_KBSmZBwrHn9ph7WVAclo6PVg");

const App = () => {
  return (
    <>
      <Header /> {/* Add Header component */}
      <ScrollToTop> {/* Add ScrollToTop component */}
      <div className="is-hidden-mobile">
        <NavBar /> {/* Desktop Navbar */}
      </div>
      <div className="is-hidden-tablet">
        <MobileNavBar /> {/* Mobile Navbar */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/management" 
          element={
            <ProtectedRoute adminOnly={true}>
              <Management />
            </ProtectedRoute>
          } 
        />
        <Route path="/class" element={<Class />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/pricing" element={<Pricing />} /> 
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/calendar" element={<Calendar />} /> 
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/checkout/6-month" element={
          <Elements stripe={stripePromise}>
            <CheckOutForm priceId="price_6month_membership" />
          </Elements>
        } />
        <Route path="/checkout/monthly" element={
          <Elements stripe={stripePromise}>
            <CheckOutForm priceId="price_monthly_membership" />
          </Elements>
        } /> 
        <Route path="*" element={<h3>Page not found!</h3>} />
      </Routes>
      </ScrollToTop>
      <Footer /> 
    </>
  );
};

export default App;
