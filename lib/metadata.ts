import { Metadata } from 'next';
import { SITE_URL, SITE_NAME, SOCIAL } from './constants';

const SITE_DESCRIPTION = 'Personal portfolio of Jeremy Philipson - Staff Software Engineer at FanDuel specializing in full-stack development with a retro 80s Memphis design aesthetic.';

export function createMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = '',
  ogImage = '/og-image.png',
}: {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: [
      'Jeremy Philipson',
      'Software Engineer',
      'Full Stack Developer',
      'React',
      'TypeScript',
      'Next.js',
      'FanDuel',
      'Portfolio',
    ],
    authors: [{ name: 'Jeremy Philipson' }],
    creator: 'Jeremy Philipson',
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: SOCIAL.TWITTER,
      images: [`${SITE_URL}${ogImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
    },
  };
}
