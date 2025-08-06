import { User, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-4 mt-auto">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4">
        <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-2">
            <User size={16} className="text-purple-500" />© 2025 Eljo Shurdhi.
            All rights reserved.
          </p>
          <p className="mt-1 flex items-center justify-center gap-2">
            <Mail size={16} className="text-purple-500" />
            <a
              href="mailto:eljoshurdhi@example.com"
              className="hover:text-purple-500 transition-colors">
              eljoshurdhi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
