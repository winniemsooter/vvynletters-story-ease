import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  imageAlt,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  tags
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isName = false) => {
      const attribute = isName ? 'name' : 'property';
      let meta = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, property);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    if (description) {
      updateMetaTag('description', description, true);
    }

    if (author) {
      updateMetaTag('author', author, true);
    }

    if (tags && tags.length > 0) {
      updateMetaTag('keywords', tags.join(', '), true);
    }

    // Open Graph tags
    if (title) {
      updateMetaTag('og:title', title);
    }

    if (description) {
      updateMetaTag('og:description', description);
    }

    if (image) {
      updateMetaTag('og:image', image);
      updateMetaTag('og:image:width', '1200');
      updateMetaTag('og:image:height', '630');
    }

    if (imageAlt) {
      updateMetaTag('og:image:alt', imageAlt);
    }

    if (url) {
      updateMetaTag('og:url', url);
    }

    updateMetaTag('og:type', type);
    updateMetaTag('og:site_name', 'VVYNLETTERS');

    // Article-specific Open Graph tags
    if (type === 'article') {
      if (publishedTime) {
        updateMetaTag('article:published_time', publishedTime);
      }
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime);
      }
      if (author) {
        updateMetaTag('article:author', author);
      }
      if (tags && tags.length > 0) {
        // Remove existing article:tag meta tags
        const existingTags = document.querySelectorAll('meta[property="article:tag"]');
        existingTags.forEach(tag => tag.remove());
        
        // Add new article:tag meta tags
        tags.forEach(tag => {
          const meta = document.createElement('meta');
          meta.setAttribute('property', 'article:tag');
          meta.setAttribute('content', tag);
          document.head.appendChild(meta);
        });
      }
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', image ? 'summary_large_image' : 'summary', true);
    
    if (title) {
      updateMetaTag('twitter:title', title, true);
    }

    if (description) {
      updateMetaTag('twitter:description', description, true);
    }

    if (image) {
      updateMetaTag('twitter:image', image, true);
    }

    // Canonical URL
    if (url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', url);
    }

  }, [title, description, image, imageAlt, url, type, publishedTime, modifiedTime, author, tags]);

  return null; // This component doesn't render anything
};

// Helper function to generate structured data for blog posts
export const generateBlogPostStructuredData = (post: {
  title: string;
  description: string;
  image?: string;
  url: string;
  publishedTime: string;
  modifiedTime?: string;
  author: string;
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.image ? [post.image] : undefined,
    "url": post.url,
    "datePublished": post.publishedTime,
    "dateModified": post.modifiedTime || post.publishedTime,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "VVYNLETTERS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vvynletters.com/og-image.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": post.url
    }
  };

  return JSON.stringify(structuredData);
};

// Helper function to inject structured data
export const injectStructuredData = (structuredData: string) => {
  // Remove existing structured data for blog posts
  const existingScript = document.querySelector('script[type="application/ld+json"][data-blog-post]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-blog-post', 'true');
  script.textContent = structuredData;
  document.head.appendChild(script);
};