import React from 'react';
import { Link } from 'react-router-dom';
import './Entrystyle.css'; 

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-8 p-8 w-full md:w-3/4 lg:w-1/2">
        {/* Dashboard Block */}
        <Link to="/dashboard">
        {/* <Link to="/home"> */}
          <div className="relative group cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-xl p-8 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold text-indigo-600 group-hover:text-indigo-400 transition-colors duration-200">Dashboard</h2>
            <p className="text-gray-500 mt-2">Your central hub for insights.</p>
            <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"></div>
          </div>
        </Link>

        {/* CreatePost Block */}
        <Link to="/createpost">
          <div className="relative group cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-xl p-8 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold text-pink-600 group-hover:text-pink-400 transition-colors duration-200">CreatePost</h2>
            <p className="text-gray-500 mt-2">Craft new posts with ease.</p>
            <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"></div>
          </div>
        </Link>

        {/* MarketPlace Block */}
        <Link to="/marketplace">
          <div className="relative group cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-xl p-8 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold text-green-600 group-hover:text-green-400 transition-colors duration-200">MarketPlace</h2>
            <p className="text-gray-500 mt-2">Discover new opportunities.</p>
            <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"></div>
          </div>
        </Link>

        {/* Insights Block */}
        <Link to="/insights">
          <div className="relative group cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-xl p-8 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold text-yellow-600 group-hover:text-yellow-400 transition-colors duration-200">Insights</h2>
            <p className="text-gray-500 mt-2">Gain valuable analytics.</p>
            <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
