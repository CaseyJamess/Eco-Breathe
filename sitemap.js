const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: 'https://eco-breathe.netlify.app/'
  });

  sitemap.write({ url: '/' });
  sitemap.write({ url: '/latest' });
  sitemap.write({ url: '/airquality' });
  sitemap.write({ url: '/aboutus' });
  sitemap.write({ url: '/FAQs' });
  sitemap.write({ url: '/login' });


  sitemap.end();

  // Convert the stream to a promise
  const xmlString = await streamToPromise(sitemap).toString();

  // Save the XML file (replace 'sitemap.xml' with your desired filename)
  fs.writeFileSync('./public/sitemap.xml', xmlString);

  console.log('Sitemap generated successfully.');
}

generateSitemap();
