import React from "react";
import logo from "../assets/donut-chart.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img src={logo} alt="CodeFlow" className="h-10 sm:h-14 md:-12" />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Code</span>
              <span className="text-blue-400">Flowing</span>
            </span>
          </div>
          {/*Nav-links goes here  */}
          <div className="hidden md:flex items-center space-x-6 lg:-x-8">
            <a
              href="#features"
              className=" text-gray-300 hover:text-white text-small lg:text-base"
            >
              Features
            </a>
            <a
              href="#pricing"
              className=" text-gray-300 hover:text-white text-small lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-small lg:text-base"
            >
              Testimonials
            </a>
          </div>
          <button
            className="md:hidden p-2 text-grey hover:text-white"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <X />
            ) : (
              <>
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className=" block text-gray-300 hover:text-white text-small lg:text-base"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white text-small lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white text-small lg:text-base"
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
