"use client";

import { Card } from "@/components/ui/card";
import { GitHubUser } from "@/lib/types";
import { MapPin, Users, GitFork } from "lucide-react";

interface ProfileCardProps {
  user: GitHubUser;
  totalStars: number;
}

export function ProfileCard({ user, totalStars }: ProfileCardProps) {
  return (
    <Card className="w-full max-w-2xl p-6">
      <div className="flex items-start space-x-6">
        <img
          src={user.avatar_url}
          alt={user.name}
          className="w-24 h-24 rounded-full"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:underline"
          >
            @{user.login}
          </a>
          {user.bio && <p className="mt-2 text-muted-foreground">{user.bio}</p>}
          <div className="mt-4 flex flex-wrap gap-4">
            {user.location && (
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-1" />
                {user.location}
              </div>
            )}
            <div className="flex items-center text-muted-foreground">
              <Users className="w-4 h-4 mr-1" />
              {user.followers} seguidores · {user.following} seguindo
            </div>
            <div className="flex items-center text-muted-foreground">
              <GitFork className="w-4 h-4 mr-1" />
              {totalStars} estrelas
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}