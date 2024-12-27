"use client";

import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-6 mt-8 border-t">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between text-sm text-muted-foreground">
        <p>Created by Bolt</p>
        <a
          href="https://github.com/yourusername/github-profile-analyzer"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-foreground transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>View Source</span>
        </a>
      </div>
    </footer>
  );
}