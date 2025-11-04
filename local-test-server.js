// Simple local test server to simulate the meta tag generation
import express from 'express';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

// WordPress API configuration
const WORDPRESS_API_URL = "https://vvynletters.gamer.gd//wp-json/wp/v2";

// Helper functions (same as in the API functions)
function decodeHtml(html) {
  const entities = {
    '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'",
    '&#x27;': "'", '&#x2F;': '/', '&#x60;': '`', '&#x3D;': '='
  };
  return html.replace(/&[#\w]+;/g, (entity) => entities[entity] || entity);
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '').trim();
}

function truncateText(text, maxLength = 160) {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > maxLength * 0.8) {
    return truncated.slice(0, lastSpace) + '...';
  }
  return truncated + '...';
}

async function fetchPostData(slug) {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=true`);
    if (!response.ok) return null;
    
    const posts = await response.json();
    if (posts.length === 0) return null;
    
    const post = posts[0];
    
    let featuredImage = 'https://vvynletters.com/og-image.png';
    let featuredImageAlt = 'VVYNLETTERS — Storytelling Meets Purpose';
    
    if (post._links?.["wp:featuredmedia"]) {
      try {
        const mediaResponse = await fetch(post._links["wp:featuredmedia"][0].href);
        if (mediaResponse.ok) {
          const media = await mediaResponse.json();
          featuredImage = media.source_url;
          featuredImageAlt = media.alt_text || post.title.rendered;
        }
      } catch (error) {
        console.warn('Failed to fetch featured media:', error);
      }
    }
    
    return {
      title: decodeHtml(post.title.rendered),
      excerpt: stripHtml(decodeHtml(post.excerpt.rendered)),
      featuredImage,
      featuredImageAlt,
      slug: post.slug,
      date: post.date,
      url: `https://vvynletters.com/blog/${post.slug}`
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

function generateHtmlWithMetaTags(postData) {
  const title = postData ? `${postData.title} | VVYNLETTERS` : 'VVYNLETTERS - Storytelling Meets Purpose';
  const description = postData ? truncateText(postData.excerpt) : 'Expert storytelling consultant helping with medical school applications, ADHD support, and creative strategy.';
  const image = postData ? postData.featuredImage : 'https://vvynletters.com/og-image.png';
  const imageAlt = postData ? postData.featuredImageAlt : 'VVYNLETTERS — Storytelling Meets Purpose';
  const url = postData ? postData.url : 'https://vvynletters.com';
  const type = postData ? 'article' : 'website';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${type}">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${image}">
    <meta property="og:image:alt" content="${imageAlt}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="VVYNLETTERS">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${url}">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${image}">
    
    <!-- Canonical -->
    <link rel="canonical" href="${url}">
    
    <style>
      body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
      .meta-preview { background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; }
      .meta-preview h3 { margin-top: 0; color: #333; }
      .meta-tag { background: #e8f4f8; padding: 5px 10px; margin: 2px 0; border-radius: 4px; font-family: monospace; font-size: 12px; }
      img { max-width: 100%; height: auto; border-radius: 8px; }
      .social-preview { border: 1px solid #ddd; padding: 15px; border-radius: 8px; margin: 10px 0; }
    </style>
</head>
<body>
    <h1>🧪 Meta Tag Test Preview</h1>
    <p><strong>Testing URL:</strong> ${url}</p>
    
    <div class="social-preview">
      <h3>📱 Social Media Preview</h3>
      ${postData ? `<img src="${image}" alt="${imageAlt}" style="max-width: 300px;">` : ''}
      <h4>${title}</h4>
      <p>${description}</p>
      <small style="color: #666;">vvynletters.com</small>
    </div>
    
    <div class="meta-preview">
      <h3>🏷️ Generated Meta Tags</h3>
      <div class="meta-tag">og:title = "${title}"</div>
      <div class="meta-tag">og:description = "${description}"</div>
      <div class="meta-tag">og:image = "${image}"</div>
      <div class="meta-tag">og:url = "${url}"</div>
      <div class="meta-tag">og:type = "${type}"</div>
    </div>
    
    <p><a href="${url}" style="background: #007cba; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">→ View Full Article</a></p>
    
    <hr>
    <p><small>This is a test preview of how social media platforms will see your blog post. In production, bots will see this page while humans get redirected to the full React app.</small></p>
</body>
</html>`;
}

// Serve static files
app.use(express.static('dist'));

// Test endpoint for meta tags
app.get('/api/meta-tags', async (req, res) => {
  const { slug } = req.query;
  
  if (!slug) {
    return res.status(400).json({ error: 'Missing slug parameter' });
  }
  
  console.log(`🔍 Testing meta tags for slug: ${slug}`);
  
  try {
    const postData = await fetchPostData(slug);
    
    if (!postData) {
      console.log('❌ Post not found');
      res.setHeader('Content-Type', 'text/html');
      return res.status(404).send(generateHtmlWithMetaTags(null));
    }
    
    console.log(`✅ Post found: ${postData.title}`);
    console.log(`🖼️  Featured image: ${postData.featuredImage}`);
    
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(generateHtmlWithMetaTags(postData));
  } catch (error) {
    console.error('❌ Error:', error);
    res.setHeader('Content-Type', 'text/html');
    return res.status(500).send(generateHtmlWithMetaTags(null));
  }
});

// Fallback to SPA
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Local test server running on http://localhost:${PORT}`);
  console.log(`🧪 Test meta tags: http://localhost:${PORT}/api/meta-tags?slug=YOUR_POST_SLUG`);
  console.log(`📱 Example: http://localhost:${PORT}/api/meta-tags?slug=the-deep-power-of-putting-pen-to-paper`);
});