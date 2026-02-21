export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  details: string[];
  skills: string[];
  logo?: string;
  arcadeRank?: string; // e.g., "Level 42", "Boss Battle", "Final Stage"
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
  arcadeRank?: string;
}
