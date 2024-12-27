import { ProfileData } from "./types";

const GITHUB_API_BASE = "https://api.github.com";

interface GithubRepo {
  language: string | null;
  stargazers_count: number;
}

export async function fetchUserProfile(username: string): Promise<ProfileData> {
  const headers = {
    Accept: "application/vnd.github.v3+json",
  };

  try {
    // Buscar dados do usuário
    const userResponse = await fetch(`${GITHUB_API_BASE}/users/${username}`, {
      headers,
    });

    if (!userResponse.ok) {
      if (userResponse.status === 404) {
        throw new Error("Usuário não encontrado");
      }
      throw new Error(`Erro ao buscar usuário: ${userResponse.statusText}`);
    }

    const user = await userResponse.json();

    // Buscar repositórios
    const reposResponse = await fetch(
      `${GITHUB_API_BASE}/users/${username}/repos?per_page=100&sort=updated`,
      { headers }
    );

    if (!reposResponse.ok) {
      throw new Error("Falha ao buscar repositórios");
    }

    const repos = await reposResponse.json();

    // Buscar contribuições
    const contributionsResponse = await fetch(
      `${GITHUB_API_BASE}/users/${username}/contributions`,
      { headers }
    );
    
    const contributions = await contributionsResponse.json();

    // Calcular estatísticas
    const languages: Record<string, number> = {};
    let totalStars = 0;

    repos.forEach((repo: GithubRepo) => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
      totalStars += repo.stargazers_count;
    });

    return {
      user,
      repos,
      languages,
      totalStars,
      contributions,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Falha ao buscar dados do GitHub");
  }
}