"use client";
import { Lobster } from "next/font/google";
import { Plus } from "lucide-react";
import ThemeDropdown from "./ThemeDropdown";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Navbar() {
  const handleAddStory = () => {
    // Navigate to upload story page
    window.location.href = "/uploadstory";
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto flex items-center justify-between">
        {/* Left side - Add Story Button */}
        <div className="flex items-center">
          <button
            onClick={handleAddStory}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <Plus color="white" size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Center - App Logo/Name */}
        <div className="flex items-center">
          <h1
            className={`text-3xl text-gray-900 dark:text-white ${lobster.className} drop-shadow-lg shadow-purple-500/25 hover:shadow-pink-500/50 transition-all duration-300`}>
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent drop-shadow-sm">
              StoriesAPP
            </span>
          </h1>
        </div>

        {/* Right side - Theme Dropdown */}
        <div className="flex items-center">
          <ThemeDropdown />
        </div>
      </div>
    </nav>
  );
}
