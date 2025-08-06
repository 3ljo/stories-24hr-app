// src/app/stories/[id]/page.js
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, X, Play, Pause } from "lucide-react";
import Image from "next/image";
import { mockStories } from "@/components/features/mockData";

export default function StoryViewer() {
  const params = useParams();
  const router = useRouter();
  const userId = params.id;

  const [currentUser, setCurrentUser] = useState(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Find current user and their stories
  useEffect(() => {
    const user = mockStories.find(
      (u) => u.id.toString() === userId || u.userId?.toString() === userId
    );
    if (user) {
      setCurrentUser(user);
      setCurrentStoryIndex(0);
      setImageLoaded(false);
    } else {
      router.push("/stories");
    }
  }, [userId, router]);

  // Auto-progress timer
  useEffect(() => {
    if (!currentUser || !isPlaying || !imageLoaded) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNextStory();
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [currentUser, currentStoryIndex, isPlaying, imageLoaded]);

  // Reset progress when story changes
  useEffect(() => {
    setProgress(0);
    setImageLoaded(false);
  }, [currentStoryIndex]);

  const handleNextStory = () => {
    if (!currentUser) return;

    if (currentStoryIndex < currentUser.stories.length - 1) {
      setCurrentStoryIndex((prev) => prev + 1);
    } else {
      const currentUserIndex = mockStories.findIndex(
        (u) => u.id.toString() === userId || u.userId?.toString() === userId
      );
      if (currentUserIndex < mockStories.length - 1) {
        const nextUser = mockStories[currentUserIndex + 1];
        const nextUserId = nextUser.userId || nextUser.id;
        router.push(`/stories/${nextUserId}`);
      } else {
        router.push("/stories");
      }
    }
  };

  const handlePrevStory = () => {
    if (!currentUser) return;

    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prev) => prev - 1);
    } else {
      const currentUserIndex = mockStories.findIndex(
        (u) => u.id.toString() === userId || u.userId?.toString() === userId
      );
      if (currentUserIndex > 0) {
        const prevUser = mockStories[currentUserIndex - 1];
        const prevUserId = prevUser.userId || prevUser.id;
        router.push(`/stories/${prevUserId}`);
      } else {
        router.push("/stories");
      }
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleClose = () => {
    router.push("/stories");
  };

  // Format timestamp for display
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "";
    if (typeof timestamp === "string") return timestamp;
    if (timestamp instanceof Date) {
      const now = new Date();
      const diff = now - timestamp;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      if (hours < 1) return "now";
      if (hours < 24) return `${hours}h`;
      const days = Math.floor(hours / 24);
      return `${days}d`;
    }
    return timestamp.toString();
  };

  if (!currentUser) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  const currentStory = currentUser.stories[currentStoryIndex];

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      {/* Story Container */}
      <div className="relative w-full max-w-sm h-[85vh] mx-auto">
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
          {/* Background Image */}
          <Image
            src={currentStory.mediaUrl}
            alt="Story"
            fill
            className="object-cover"
            onLoad={handleImageLoad}
            priority
            unoptimized
          />

          {/* Loading indicator */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Progress bars */}
          <div className="absolute top-4 left-4 right-4 flex gap-1 z-10">
            {currentUser.stories.map((_, index) => (
              <div
                key={index}
                className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-100 ease-linear"
                  style={{
                    width:
                      index < currentStoryIndex
                        ? "100%"
                        : index === currentStoryIndex
                        ? `${progress}%`
                        : "0%",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Header */}
          <div className="absolute top-12 left-4 right-4 flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <Image
                src={currentUser.profilePic}
                alt={currentUser.username}
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
                unoptimized
              />
              <div>
                <p className="text-white font-medium text-sm">
                  {currentUser.username}
                </p>
                <p className="text-white/70 text-xs">
                  {formatTimestamp(currentStory.timestamp)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={togglePlayPause}
                className="text-white hover:text-gray-300 transition-colors p-2">
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button
                onClick={handleClose}
                className="text-white hover:text-gray-300 transition-colors p-2">
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Navigation areas */}
          <button
            onClick={handlePrevStory}
            className="absolute left-0 top-0 w-1/3 h-full z-10"
          />

          <button
            onClick={handleNextStory}
            className="absolute right-0 top-0 w-1/3 h-full z-10"
          />

          {/* Center tap area to pause/play */}
          <button
            onClick={togglePlayPause}
            className="absolute inset-0 w-1/3 left-1/3 z-10"
          />
        </div>
      </div>

      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={handleClose} />
    </div>
  );
}
