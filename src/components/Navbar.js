import React, { useState } from "react";
import nirmalogo from "../assets/nirmalogo.png";
import aceslogo from "../assets/aceslogo.png";
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import  Contact  from './Contact';
import Events from './Events';
import Team from './Team';
import About from './About';
import Home from './Home';

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="nav px-4 py-5 ml-20 p-3 ">
        <div className="relative flex items-start">
          <ul className="flex items-center hidden space-x-8 lg:flex cursor-pointer dark:text-white">
            
       
            
            <li>
              < NavLink
                to="/"
          
                className="dark:text-white font-medium tracking-wide text-gray-700  transition-colors duration-200 hover:text-blue-700">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
          
          
                className="dark:text-white font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-700">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
          
                className="font-medium dark:text-white dark:text-white tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-700">
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
          
                className="font-medium dark:text-white dark:text-white tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-700">
                Team
              </NavLink>
            </li>

          {/* <NavLink
          to="/"
          aria-label="Company"
          title="Company"
        class="inline-flex items-center lg:mx-auto"> */}
      
            <li>
              <NavLink
                to="/contact"
             
                className="font-medium dark:text-white dark:text-white tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-700">
                Contact Us
              </NavLink>
            </li>
                  </ul>
          
           
        
          <div className="ml-auto lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}>
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                  
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}>
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium dark:text-white tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/about"
                         
                          className="font-medium dark:text-white tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/events"
                          
                          className="font-medium dark:text-white tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                          Events
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/team"
                        
                          className="font-medium dark:text-white tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                          Team
                        </NavLink>
                      </li>

                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/events" element={<Events state={true} />} />
        <Route exact path="/team" element={<Team state={true} />} />
        <Route exact path="/about" element={<About />} />
        {/* <Route exact path="/About us" element={</>}/> */}
      </Routes>
    </Router>
  );
};

export default Navbar2;
