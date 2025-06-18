
import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { SearchFilters } from "@/types";

interface SearchFormProps {
  onSearch: (filters: SearchFilters) => void;
}

export const SearchForm = ({ onSearch }: SearchFormProps) => {
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      role,
      location,
      workType: "",
      companySize: "",
      techStack: []
    });
  };

  const popularRoles = ["DevOps", "Cloud Engineer", "Frontend", "Backend", "Full Stack", "AI/ML"];
  const popularLocations = ["Tunis", "Sfax", "Sousse", "Monastir", "Nabeul"];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="What role are you looking for? (e.g., DevOps, Cloud Engineer)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Location (city, governorate)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Search
        </button>
      </form>
      
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-sm text-gray-600">Popular searches:</span>
        {popularRoles.map((roleTag) => (
          <button
            key={roleTag}
            onClick={() => setRole(roleTag)}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded transition-colors"
          >
            {roleTag}
          </button>
        ))}
      </div>
    </div>
  );
};
