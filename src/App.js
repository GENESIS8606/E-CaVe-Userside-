import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Booking from "./components/Booking"; // Adjust the path accordingly
import Companys from "./seccomponents/Companys";
import About from "./seccomponents/About";
import One from "./seccomponents/One";
import Contact from "./seccomponents/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Routes>
                <Route
                  path="/*"
                  element={
                    <div>
                      <Hero />
                      <Analytics />
                      <Newsletter />
                      <Cards />
                      <Footer />
                    </div>
                  }
                />
              </Routes>
            </div>
          }
        />
        <Route path="/booking" element={<Booking />} />
        <Route path="/company" element={<Companys />} />
        <Route path="/about" element={<About/>} />
        <Route path="/one" element={<One/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
