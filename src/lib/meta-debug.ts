// Debug utility to help verify meta tags are set correctly

export const debugMetaTags = () => {
  if (typeof window === 'undefined') return;

  const metaTags = {
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.getAttribute('content'),
    ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content'),
    ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute('content'),
    ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute('content'),
    ogUrl: document.querySelector('meta[property="og:url"]')?.getAttribute('content'),
    ogType: document.querySelector('meta[property="og:type"]')?.getAttribute('content'),
    twitterCard: document.querySelector('meta[name="twitter:card"]')?.getAttribute('content'),
    twitterTitle: document.querySelector('meta[name="twitter:title"]')?.getAttribute('content'),
    twitterDescription: document.querySelector('meta[name="twitter:description"]')?.getAttribute('content'),
    twitterImage: document.querySelector('meta[name="twitter:image"]')?.getAttribute('content'),
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
  };

  console.group('🔍 Meta Tags Debug');
  console.table(metaTags);
  console.groupEnd();

  return metaTags;
};

// Function to validate required meta tags for social sharing
export const validateSocialMetaTags = () => {
  const required = [
    'og:title',
    'og:description', 
    'og:image',
    'og:url',
    'twitter:card',
    'twitter:title',
    'twitter:description',
    'twitter:image'
  ];

  const missing: string[] = [];
  const present: string[] = [];

  required.forEach(tag => {
    const isName = tag.startsWith('twitter:');
    const selector = isName ? `meta[name="${tag}"]` : `meta[property="${tag}"]`;
    const element = document.querySelector(selector);
    
    if (element && element.getAttribute('content')) {
      present.push(tag);
    } else {
      missing.push(tag);
    }
  });

  console.group('✅ Social Media Meta Tags Validation');
  if (present.length > 0) {
    console.log('✅ Present:', present);
  }
  if (missing.length > 0) {
    console.warn('❌ Missing:', missing);
  }
  console.groupEnd();

  return { present, missing, isValid: missing.length === 0 };
};

// Add to window for easy debugging in browser console
if (typeof window !== 'undefined') {
  (window as any).debugMetaTags = debugMetaTags;
  (window as any).validateSocialMetaTags = validateSocialMetaTags;
}