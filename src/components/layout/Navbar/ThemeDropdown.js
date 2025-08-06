"use client";
import { useState } from "react";
import { Sunrise, MoonStar, MonitorCog } from "lucide-react";

export default function ThemeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("System");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectTheme = (theme) => {
    setSelectedTheme(theme);
    setIsOpen(false);
    // Here you'll later add your dark mode logic
    console.log("Selected theme:", theme);
  };

  const getThemeIcon = () => {
    switch (selectedTheme) {
      case "Light":
        return <Sunrise color="#fea710" size={16} />;
      case "Dark":
        return <MoonStar color="#6366f1" size={16} />;
      case "System":
        return <MonitorCog color="#ec4899" size={16} />;
      default:
        return <MonitorCog color="#ec4899" size={16} />;
    }
  };

  return (
    <div className="relative inline-block">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group">
        <div className="flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-900 rounded-full transition-colors">
          {getThemeIcon()}
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 z-50 overflow-hidden backdrop-blur-lg bg-opacity-95 dark:bg-opacity-95">
          <div className="py-2">
            <button
              onClick={() => selectTheme("Light")}
              className={`flex items-center w-full px-4 py-3 text-left hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-200 ${
                selectedTheme === "Light"
                  ? "bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-gray-700 dark:to-gray-600"
                  : ""
              }`}>
              <span className="mr-4 p-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full">
                <Sunrise color="white" size={16} />
              </span>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  Light
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Bright theme
                </div>
              </div>
            </button>
            <button
              onClick={() => selectTheme("Dark")}
              className={`flex items-center w-full px-4 py-3 text-left hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-200 ${
                selectedTheme === "Dark"
                  ? "bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600"
                  : ""
              }`}>
              <span className="mr-4 p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full">
                <MoonStar color="white" size={16} />
              </span>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  Dark
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Dark theme
                </div>
              </div>
            </button>
            <button
              onClick={() => selectTheme("System")}
              className={`flex items-center w-full px-4 py-3 text-left hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-200 ${
                selectedTheme === "System"
                  ? "bg-gradient-to-r from-pink-50 to-rose-50 dark:from-gray-700 dark:to-gray-600"
                  : ""
              }`}>
              <span className="mr-4 p-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full">
                <MonitorCog color="white" size={16} />
              </span>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  System
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Auto theme
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
