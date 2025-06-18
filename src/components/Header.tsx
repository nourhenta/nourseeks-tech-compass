
import { Bookmark } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-blue-600">
              NourSeeks
            </div>
            <div className="hidden sm:block text-sm text-gray-600">
              Discover Your Next Tech Career
            </div>
          </div>
          
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Companies
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Bookmark size={20} />
              <span className="hidden sm:inline">Bookmarks</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
