import type { NextApiRequest, NextApiResponse } from 'next'

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Repo[] | { error: string }>
) {
  // Remplace 'Njaparuben' par ton nom d'utilisateur GitHub si besoin
  const username = req.query.username as string || 'Njaparuben';

  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!response.ok) {
    return res.status(500).json({ error: 'Erreur lors de la récupération des dépôts.' });
  }

  const data = await response.json();

  // Définir un type pour les objets repo de l'API GitHub
  type GitHubRepo = {
    id: number;
    name: string;
    html_url: string;
    description: string;
    language: string;
    stargazers_count: number;
    [key: string]: unknown; // pour ignorer les autres propriétés
  };

  // On extrait seulement les infos utiles
  const repos: Repo[] = (data as GitHubRepo[]).map((repo) => ({
    id: repo.id,
    name: repo.name,
    html_url: repo.html_url,
    description: repo.description,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
  }));

  res.status(200).json(repos);
}