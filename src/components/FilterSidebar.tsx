
import { X } from "lucide-react";
import { SearchFilters } from "@/types";

interface FilterSidebarProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onClose: () => void;
}

export const FilterSidebar = ({ filters, onFiltersChange, onClose }: FilterSidebarProps) => {
  const workTypes = ["Remote", "On-site", "Hybrid"];
  const companySizes = ["Startup (1-50)", "Medium (51-500)", "Large (500+)"];
  const techStacks = ["AWS", "Azure", "Docker", "Kubernetes", "React", "Node.js", "Python", "Java"];

  const handleFilterChange = (key: keyof SearchFilters, value: string | string[]) => {
    const newFilters = { ...filters, [key]: value };
    onFiltersChange(newFilters);
  };

  const toggleTechStack = (tech: string) => {
    const currentTechStack = filters.techStack || [];
    const newTechStack = currentTechStack.includes(tech)
      ? currentTechStack.filter(t => t !== tech)
      : [...currentTechStack, tech];
    handleFilterChange("techStack", newTechStack);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button
          onClick={onClose}
          className="lg:hidden text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
      </div>

      <div className="space-y-6">
        {/* Work Type */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Work Type
          </label>
          <div className="space-y-2">
            {workTypes.map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="radio"
                  name="workType"
                  value={type}
                  checked={filters.workType === type}
                  onChange={(e) => handleFilterChange("workType", e.target.value)}
                  className="mr-2 text-blue-600"
                />
                <span className="text-sm text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Company Size */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Company Size
          </label>
          <div className="space-y-2">
            {companySizes.map((size) => (
              <label key={size} className="flex items-center">
                <input
                  type="radio"
                  name="companySize"
                  value={size}
                  checked={filters.companySize === size}
                  onChange={(e) => handleFilterChange("companySize", e.target.value)}
                  className="mr-2 text-blue-600"
                />
                <span className="text-sm text-gray-700">{size}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Tech Stack
          </label>
          <div className="flex flex-wrap gap-2">
            {techStacks.map((tech) => (
              <button
                key={tech}
                onClick={() => toggleTechStack(tech)}
                className={`px-3 py-1 rounded-full text-xs transition-colors ${
                  filters.techStack?.includes(tech)
                    ? "bg-blue-100 text-blue-800 border border-blue-200"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <button
          onClick={() => onFiltersChange({
            role: "",
            location: "",
            workType: "",
            companySize: "",
            techStack: []
          })}
          className="w-full text-sm text-gray-600 hover:text-gray-800 transition-colors"
        >
          Clear all filters
        </button>
      </div>
    </div>
  );
};
