"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProfileCard } from "@/components/profile-card";
import { LanguageStats } from "@/components/language-stats";
import { TopRepositories } from "@/components/top-repositories";
import { fetchUserProfile } from "@/lib/github";
import { ProfileData } from "@/lib/types";
import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserProfile(username);
      setProfileData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha ao buscar perfil");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Analisador de Perfil GitHub</h1>
          <p className="text-muted-foreground">
            Digite um nome de usuário do GitHub para analisar seu perfil
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex gap-2 items-center"
        >
          <Input
            type="text"
            placeholder="Digite o nome de usuário do GitHub"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={loading}>
            {loading ? (
              "Carregando..."
            ) : (
              <>
                <Search className="w-4 h-4 mr-2" />
                Analisar
              </>
            )}
          </Button>
        </form>

        {error && (
          <Card className="p-4 text-center text-destructive bg-destructive/10">
            {error}
          </Card>
        )}

        {profileData && (
          <div className="space-y-8">
            <ProfileCard
              user={profileData.user}
              totalStars={profileData.totalStars}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <LanguageStats languages={profileData.languages} />
              <TopRepositories repos={profileData.repos} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}