const { readFileSync } = require('fs');
const { join } = require('path');

// WordPress API configuration
const WORDPRESS_API_URL = process.env.VITE_WORDPRESS_API_URL || "https://vvynletters.gamer.gd//wp-json/wp/v2";

// Helper functions
function decodeHtml(html) {
  const entities = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&#x27;': "'",
    '&#x2F;': '/',
    '&#x60;': '`',
    '&#x3D;': '='
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

// Fetch post data from WordPress
async function fetchPostData(slug) {
  try {
    const fetch = (await import('node-fetch')).default;
    
    const response = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=true`);
    if (!response.ok) return null;
    
    const posts = await response.json();
    if (posts.length === 0) return null;
    
    const post = posts[0];
    
    // Get featured image
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
    
    <!-- Redirect to actual page for human users -->
    <script>
      // Only redirect if not a bot
      if (!/bot|crawler|spider|crawling/i.test(navigator.userAgent)) {
        window.location.href = '${url}';
      }
    </script>
    
    <!-- Fallback refresh for bots that execute JS -->
    <meta http-equiv="refresh" content="0;url=${url}">
</head>
<body>
    <h1>${title}</h1>
    <p>${description}</p>
    ${postData ? `<img src="${image}" alt="${imageAlt}" style="max-width: 100%; height: auto;">` : ''}
    <p><a href="${url}">Continue to full article</a></p>
</body>
</html>`;
}

exports.handler = async (event, context) => {
  const { slug } = event.queryStringParameters || {};
  
  if (!slug) {
    return {
      statusCode: 400,
      body: 'Missing slug parameter'
    };
  }
  
  try {
    const postData = await fetchPostData(slug);
    
    if (!postData) {
      return {
        statusCode: 404,
        headers: {
          'Content-Type': 'text/html'
        },
        body: generateHtmlWithMetaTags(null) // Fallback to site defaults
      };
    }
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
      },
      body: generateHtmlWithMetaTags(postData)
    };
  } catch (error) {
    console.error('Error in meta-tags function:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/html'
      },
      body: generateHtmlWithMetaTags(null) // Fallback to site defaults
    };
  }
};