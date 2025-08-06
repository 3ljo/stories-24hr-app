"use client";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { mockStories } from "@/components/features/mockData";
import { useRef } from "react";

export default function StoriesPage() {
  const scrollContainerRef = useRef(null);

  const handleStoryClick = (userId, storyIndex = 0) => {
    window.location.href = `/stories/${userId}?story=${storyIndex}`;
  };

  const handleAddStory = () => {
    window.location.href = "/uploadstory";
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const StoryAvatar = ({ user }) => {
    const hasStories = user.stories && user.stories.length > 0;
    const hasUnviewed = user.hasUnviewedStories;

    const onClick = () => {
      if (user.isOwnStory && (!user.stories || user.stories.length === 0)) {
        handleAddStory();
      } else {
        // Use the correct field - try userId first, then fallback to id
        const userIdToUse = user.userId || user.id;
        handleStoryClick(userIdToUse, 0);
      }
    };

    return (
      <div className="flex flex-col items-center space-y-2 min-w-[80px]">
        <div onClick={onClick} className="relative cursor-pointer">
          {/* Story Ring */}
          <div
            className={`w-20 h-20 rounded-full p-1 ${
              hasStories
                ? hasUnviewed
                  ? "bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400"
                  : "bg-gray-300 dark:bg-gray-600"
                : "bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400"
            }`}>
            {/* Profile Picture */}
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-0.5">
              <img
                src={user.profilePic}
                alt={user.username}
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${user.username}&background=6366f1&color=fff&size=150`;
                }}
              />
            </div>
          </div>

          {/* Add Button */}
          {user.isOwnStory && (!hasStories || user.stories.length === 0) && (
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
              <Plus size={16} color="white" strokeWidth={2.5} />
            </div>
          )}
        </div>

        {/* Username */}
        <span className="text-xs text-gray-700 dark:text-gray-300 max-w-[70px] truncate font-medium">
          {user.isOwnStory ? "Your story" : user.username}
        </span>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Stories Feed */}
      <div className="bg-white dark:bg-gray-800 py-3">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-white dark:bg-gray-700 rounded-full shadow-md border border-gray-200 dark:border-gray-600 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <ChevronLeft
              size={12}
              className="text-gray-600 dark:text-gray-300"
            />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-white dark:bg-gray-700 rounded-full shadow-md border border-gray-200 dark:border-gray-600 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <ChevronRight
              size={12}
              className="text-gray-600 dark:text-gray-300"
            />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 overflow-x-auto pb-1 px-8 sm:px-10 md:px-12"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}>
            <style jsx global>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {mockStories.map((user) => (
              <StoryAvatar key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
