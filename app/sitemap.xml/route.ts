// File: app/sitemap.xml/route.ts


export async function GET(): Promise<Response> {
  const baseUrl = 'https://www.domanitransport.com/'; // ✅ Update this to your real domain

  const staticPaths = [
    '',           // homepage
    '/home',
    '/contact',
    '/services',  // if created
    '/about',   // if created
  ];

  const urls = staticPaths.map((path) => {
    return `
      <url>
        <loc>${baseUrl}${path}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${path === '' ? '1.0' : '0.7'}</priority>
      </url>
    `;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    >
      ${urls.join('')}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
