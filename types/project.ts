export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  year: number;
  featured: boolean;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  arcadeTheme: {
    primaryColor: string;
    secondaryColor: string;
    icon?: string;
  };
}
