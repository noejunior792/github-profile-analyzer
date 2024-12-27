"use client";

import { Card } from "@/components/ui/card";
import { GitHubRepo } from "@/lib/types";
import { Star } from "lucide-react";

interface TopRepositoriesProps {
  repos: GitHubRepo[];
}

export function TopRepositories({ repos }: TopRepositoriesProps) {
  // Sort repos by stars and take top 3
  const topRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 3);

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Top Repositories</h3>
      <div className="space-y-4">
        {topRepos.map((repo) => (
          <div
            key={repo.name}
            className="flex justify-between items-start p-3 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                {repo.name}
              </a>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {repo.description || "No description provided"}
              </p>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="w-4 h-4" />
              {repo.stargazers_count}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}