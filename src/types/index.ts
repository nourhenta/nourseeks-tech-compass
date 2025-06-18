
export interface Company {
  id: string;
  name: string;
  logo?: string;
  description: string;
  location: string;
  techStack: string[];
  openRoles: string[];
  website?: string;
  linkedin?: string;
  size: string;
  workType: string[];
}

export interface SearchFilters {
  role: string;
  location: string;
  workType: string;
  companySize: string;
  techStack: string[];
}
