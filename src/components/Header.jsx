import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ handleToggleDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    handleToggleDarkMode((prevMode) => !prevMode); // Update the parent state
  };

  return (
    <header className="flex items-center w-[90%] md:w-[100%] justify-between p-4 bg-gray-100 dark:bg-gray-800 shadow-md mx-auto mb-5 rounded-lg ">
      {/* Logo and Title */}
      <div className="flex items-center w-[70%] space-x-4">
        <img src="/logofan.png" alt="Logo" className="h-12 w-24" />
        <h1 className="md:text-2xl font-bold text-gray-900 dark:text-white">
          Notes App
        </h1>
      </div>
      <nav className="w-[10%] flex justify-center items-center">
        {/* Toggle Button */}
        <button
          onClick={toggleMode}
          className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <span className="sr-only">Toggle Dark Mode</span>
          {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
