import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Cette ligne est cruciale pour l'exportation statique
  images: {
    unoptimized: true, // Recommandé pour GitHub Pages car il ne supporte pas l'optimisation d'images de Next.js
  },
  // Si votre site GitHub Pages est hébergé dans un sous-répertoire (ex: username.github.io/repo-name)
  // alors vous devrez aussi configurer basePath et assetPrefix
  // basePath: '/nom-de-votre-repo',
  // assetPrefix: '/nom-de-votre-repo/',
};

module.exports = nextConfig;
export default nextConfig as NextConfig;
