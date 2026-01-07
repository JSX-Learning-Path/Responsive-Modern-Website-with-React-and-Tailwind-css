import React from "react";
import logo from "../assets/donut-chart.png";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div>
            <img src={logo} alt="CodeFlow" className="h-10 sm:h-14 md:-12" />
          </div>
          <span className="text-lg sm:text-xl md:text-2xl font-medium">
            <span className="text-white">Code</span>
            <span className="text-blue-400">Flowing</span>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
