import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">UniverCity</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">
              About
            </a>
            <a href="#programs" className="text-gray-600 hover:text-blue-600">
              Programs
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </div>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center bg-gradient-to-r from-blue-50 to-indigo-50"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Welcome to UniverCity
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Empowering minds, shaping futures. Join us in our journey of
                excellence in education.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="/hero-image.jpg"
                alt="University Campus"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
