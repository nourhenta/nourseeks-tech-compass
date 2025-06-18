
import { MapPin, Users, ExternalLink, Bookmark } from "lucide-react";
import { Company } from "@/types";

interface CompanyCardProps {
  company: Company;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const CompanyCard = ({ company, isBookmarked, onToggleBookmark }: CompanyCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            {company.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{company.name}</h3>
            <div className="flex items-center text-gray-600 text-sm space-x-4">
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" />
                {company.location}
              </div>
              <div className="flex items-center">
                <Users size={16} className="mr-1" />
                {company.size}
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={onToggleBookmark}
          className={`p-2 rounded-lg transition-colors ${
            isBookmarked 
              ? "bg-blue-100 text-blue-600" 
              : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Bookmark size={20} fill={isBookmarked ? "currentColor" : "none"} />
        </button>
      </div>
      
      <p className="text-gray-700 mb-4 leading-relaxed">{company.description}</p>
      
      {/* Work Type Badge */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {company.workType.map((type) => (
            <span 
              key={type}
              className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
      
      {/* Tech Stack */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {company.techStack.map((tech) => (
            <span 
              key={tech}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Open Roles */}
      {company.openRoles.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Open Positions</h4>
          <div className="space-y-1">
            {company.openRoles.slice(0, 3).map((role) => (
              <div key={role} className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                • {role}
              </div>
            ))}
            {company.openRoles.length > 3 && (
              <div className="text-sm text-gray-500">
                +{company.openRoles.length - 3} more positions
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Links */}
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex space-x-4">
          {company.website && (
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 text-sm transition-colors"
            >
              <ExternalLink size={16} className="mr-1" />
              Website
            </a>
          )}
          {company.linkedin && (
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 text-sm transition-colors"
            >
              LinkedIn
            </a>
          )}
        </div>
        
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
          View Details
        </button>
      </div>
    </div>
  );
};
