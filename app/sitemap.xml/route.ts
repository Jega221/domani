// File: app/sitemap.xml/route.ts


export async function GET(): Promise<Response> {
  const baseUrl = 'https://www.domanitransport.com/';

  const staticPaths = [
    '',           // homepage
    '/how-we-work',
    '/contact',
    '/services',  
    '/about', 
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
      xmlns="Sitemap: http://www.sitemaps.org/schemas/sitemap/0.9" >
      ${urls.join('')}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
