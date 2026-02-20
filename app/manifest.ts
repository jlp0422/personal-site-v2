import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jeremy Philipson | Software Engineer',
    short_name: 'JP Portfolio',
    description: 'Personal portfolio of Jeremy Philipson - Lead Software Engineer with retro 80s arcade theme',
    start_url: '/about',
    display: 'standalone',
    background_color: '#0D0208',
    theme_color: '#FF10F0',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
