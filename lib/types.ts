// GitHub API Types
export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  html_url: string;
}

export interface LanguageStats {
  [key: string]: number;
}

export interface ContributionDay {
  date: string;
  count: number;
}

export interface ProfileData {
  user: any;
  repos: any;
  languages: Record<string, number>;
  totalStars: number;
  contributions?: any;
}