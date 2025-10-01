import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'CCBot',
          'anthropic-ai',
          'Claude-Web',
          'Omgilibot',
          'FacebookBot',
          'Diffbot',
          'Bytespider',
          'PerplexityBot',
          'Applebot-Extended',
        ],
        disallow: '/',
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'DuckDuckBot', 'Slurp'],
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: '/',
      },
    ],
  };
}
