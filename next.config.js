/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Le quota Hobby est de 5 000 transformations par mois. Les emojis sont
    // `unoptimized` : em-content.zobj.net n'a plus rien à faire ici, son
    // `remotePatterns` laissait transformer des milliers d'emojis × 15 largeurs.
    // Restent les 44 fichiers de /images : 44 × 3 largeurs × 1 qualité × webp seul
    // (défaut), au plus 132 variantes. Les figures en `60vw`, `880px` ou `100vw`
    // prennent 640, 1200 ou 2048 selon l'écran, 2048 couvrant 60vw en 2x.
    // Sous-ensemble des défauts, donc les variantes déjà en cache resservent.
    localPatterns: [{ pathname: "/images/**", search: "" }],
    imageSizes: [],
    deviceSizes: [640, 1200, 2048],
    qualities: [75],
    // 31 jours, le plafond de cache Vercel pour les images locales (4 h par défaut).
    minimumCacheTTL: 2678400,
  },
};

module.exports = nextConfig;
