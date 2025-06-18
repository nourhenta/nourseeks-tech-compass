
import { useState, useEffect } from "react";
import { SearchForm } from "@/components/SearchForm";
import { CompanyCard } from "@/components/CompanyCard";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FilterSidebar } from "@/components/FilterSidebar";
import { companies } from "@/data/companies";
import { Company, SearchFilters } from "@/types";

const Index = () => {
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>(companies);
  const [bookmarkedCompanies, setBookmarkedCompanies] = useState<Set<string>>(new Set());
  const [filters, setFilters] = useState<SearchFilters>({
    role: "",
    location: "",
    workType: "",
    companySize: "",
    techStack: []
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Load bookmarks from localStorage
    const savedBookmarks = localStorage.getItem("nourseeks-bookmarks");
    if (savedBookmarks) {
      setBookmarkedCompanies(new Set(JSON.parse(savedBookmarks)));
    }
  }, []);

  useEffect(() => {
    // Save bookmarks to localStorage
    localStorage.setItem("nourseeks-bookmarks", JSON.stringify(Array.from(bookmarkedCompanies)));
  }, [bookmarkedCompanies]);

  const handleSearch = (searchFilters: SearchFilters) => {
    setFilters(searchFilters);
    filterCompanies(searchFilters);
  };

  const filterCompanies = (searchFilters: SearchFilters) => {
    let filtered = companies;

    if (searchFilters.role) {
      filtered = filtered.filter(company => 
        company.openRoles.some(role => 
          role.toLowerCase().includes(searchFilters.role.toLowerCase())
        ) ||
        company.techStack.some(tech => 
          tech.toLowerCase().includes(searchFilters.role.toLowerCase())
        )
      );
    }

    if (searchFilters.location) {
      filtered = filtered.filter(company =>
        company.location.toLowerCase().includes(searchFilters.location.toLowerCase())
      );
    }

    if (searchFilters.workType) {
      filtered = filtered.filter(company =>
        company.workType.includes(searchFilters.workType)
      );
    }

    if (searchFilters.companySize) {
      filtered = filtered.filter(company =>
        company.size === searchFilters.companySize
      );
    }

    if (searchFilters.techStack.length > 0) {
      filtered = filtered.filter(company =>
        searchFilters.techStack.some(tech =>
          company.techStack.some(companyTech =>
            companyTech.toLowerCase().includes(tech.toLowerCase())
          )
        )
      );
    }

    setFilteredCompanies(filtered);
  };

  const toggleBookmark = (companyId: string) => {
    const newBookmarks = new Set(bookmarkedCompanies);
    if (newBookmarks.has(companyId)) {
      newBookmarks.delete(companyId);
    } else {
      newBookmarks.add(companyId);
    }
    setBookmarkedCompanies(newBookmarks);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        
        <div className="mb-8">
          <SearchForm onSearch={handleSearch} />
        </div>
        
        <div className="flex gap-8">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg z-10 hover:bg-blue-700 transition-colors"
          >
            Filters
          </button>
          
          {/* Sidebar filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block lg:w-80 flex-shrink-0`}>
            <FilterSidebar 
              filters={filters} 
              onFiltersChange={handleSearch}
              onClose={() => setShowFilters(false)}
            />
          </div>
          
          {/* Company results */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredCompanies.length} Companies Found
              </h2>
              <div className="text-sm text-gray-600">
                Showing results for {filters.role || "all roles"} 
                {filters.location && ` in ${filters.location}`}
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
              {filteredCompanies.map((company) => (
                <CompanyCard
                  key={company.id}
                  company={company}
                  isBookmarked={bookmarkedCompanies.has(company.id)}
                  onToggleBookmark={() => toggleBookmark(company.id)}
                />
              ))}
            </div>
            
            {filteredCompanies.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg mb-4">No companies found matching your criteria</div>
                <p className="text-gray-400">Try adjusting your search filters or location</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
