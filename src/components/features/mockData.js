// Mock Stories Data
export const mockStories = [
  {
    id: 1,
    userId: "eljo_shurdhi",
    username: "eljo_shurdhi",
    profilePic:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
    stories: [],
    hasUnviewedStories: false,
    isOwnStory: true,
  },
  {
    id: 2,
    userId: "john_doe",
    username: "john_doe",
    profilePic:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_2",
        mediaUrl:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
        isViewed: false,
      },
    ],
    hasUnviewedStories: true,
    isOwnStory: false,
  },
  {
    id: 3,
    userId: "jane_smith",
    username: "jane_smith",
    profilePic:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_4",
        mediaUrl:
          "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
        isViewed: true,
      },
    ],
    hasUnviewedStories: false,
    isOwnStory: false,
  },
  {
    id: 4,
    userId: "mike_wilson",
    username: "mike_wilson",
    profilePic:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_5",
        mediaUrl:
          "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
        isViewed: false,
      },
    ],
    hasUnviewedStories: true,
    isOwnStory: false,
  },
  {
    id: 5,
    userId: "sarah_connor",
    username: "sarah_connor",
    profilePic:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_6",
        mediaUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
        isViewed: false,
      },
    ],
    hasUnviewedStories: true,
    isOwnStory: false,
  },
  {
    id: 6,
    userId: "alex_johnson",
    username: "alex_johnson",
    profilePic:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_7",
        mediaUrl:
          "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
        isViewed: true,
      },
    ],
    hasUnviewedStories: false,
    isOwnStory: false,
  },
  {
    id: 7,
    userId: "emma_watson",
    username: "emma_watson",
    profilePic:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_8",
        mediaUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        isViewed: false,
      },
    ],
    hasUnviewedStories: true,
    isOwnStory: false,
  },
  {
    id: 8,
    userId: "david_brown",
    username: "david_brown",
    profilePic:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_9",
        mediaUrl:
          "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
        isViewed: false,
      },
    ],
    hasUnviewedStories: true,
    isOwnStory: false,
  },
  {
    id: 9,
    userId: "lisa_garcia",
    username: "lisa_garcia",
    profilePic:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_10",
        mediaUrl:
          "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 7 * 60 * 60 * 1000), // 7 hours ago
        isViewed: true,
      },
    ],
    hasUnviewedStories: false,
    isOwnStory: false,
  },
  {
    id: 10,
    userId: "chris_martin",
    username: "chris_martin",
    profilePic:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_11",
        mediaUrl:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 1.5 * 60 * 60 * 1000), // 1.5 hours ago
        isViewed: false,
      },
    ],
    hasUnviewedStories: true,
    isOwnStory: false,
  },
  {
    id: 11,
    userId: "anna_lee",
    username: "anna_lee",
    profilePic:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_12",
        mediaUrl:
          "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 4.5 * 60 * 60 * 1000), // 4.5 hours ago
        isViewed: true,
      },
    ],
    hasUnviewedStories: false,
    isOwnStory: false,
  },
  {
    id: 12,
    userId: "ryan_taylor",
    username: "ryan_taylor",
    profilePic:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_13",
        mediaUrl:
          "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 2.5 * 60 * 60 * 1000), // 2.5 hours ago
        isViewed: false,
      },
    ],
    hasUnviewedStories: true,
    isOwnStory: false,
  },
  {
    id: 13,
    userId: "sophie_wilson",
    username: "sophie_wilson",
    profilePic:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_14",
        mediaUrl:
          "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 6.5 * 60 * 60 * 1000), // 6.5 hours ago
        isViewed: false,
      },
    ],
    hasUnviewedStories: true,
    isOwnStory: false,
  },
  {
    id: 14,
    userId: "kevin_clark",
    username: "kevin_clark",
    profilePic:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_15",
        mediaUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 3.5 * 60 * 60 * 1000), // 3.5 hours ago
        isViewed: true,
      },
    ],
    hasUnviewedStories: false,
    isOwnStory: false,
  },
  {
    id: 15,
    userId: "maria_lopez",
    username: "maria_lopez",
    profilePic:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_16",
        mediaUrl:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 1.8 * 60 * 60 * 1000), // 1.8 hours ago
        isViewed: false,
      },
    ],
    hasUnviewedStories: true,
    isOwnStory: false,
  },
  {
    id: 16,
    userId: "james_white",
    username: "james_white",
    profilePic:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_17",
        mediaUrl:
          "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 5.5 * 60 * 60 * 1000), // 5.5 hours ago
        isViewed: true,
      },
    ],
    hasUnviewedStories: false,
    isOwnStory: false,
  },
  {
    id: 17,
    userId: "olivia_davis",
    username: "olivia_davis",
    profilePic:
      "https://images.unsplash.com/photo-1539571696986-d953ae88bb44?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_18",
        mediaUrl:
          "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 4.2 * 60 * 60 * 1000), // 4.2 hours ago
        isViewed: false,
      },
    ],
    hasUnviewedStories: true,
    isOwnStory: false,
  },
  {
    id: 18,
    userId: "robert_hill",
    username: "robert_hill",
    profilePic:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_19",
        mediaUrl:
          "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 7.5 * 60 * 60 * 1000), // 7.5 hours ago
        isViewed: false,
      },
    ],
    hasUnviewedStories: true,
    isOwnStory: false,
  },
  {
    id: 19,
    userId: "jessica_moore",
    username: "jessica_moore",
    profilePic:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_20",
        mediaUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 2.8 * 60 * 60 * 1000), // 2.8 hours ago
        isViewed: true,
      },
    ],
    hasUnviewedStories: false,
    isOwnStory: false,
  },
  {
    id: 20,
    userId: "daniel_adams",
    username: "daniel_adams",
    profilePic:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: "story_21",
        mediaUrl:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop",
        mediaType: "image",
        timestamp: new Date(Date.now() - 0.5 * 60 * 60 * 1000), // 30 minutes ago
        isViewed: false,
      },
    ],
    hasUnviewedStories: true,
    isOwnStory: false,
  },
];
