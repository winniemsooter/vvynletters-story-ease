// Utility functions for URL generation and management

export const SITE_URL = 'https://vvynletters.com';

/**
 * Generate the full URL for a given path
 */
export const getFullUrl = (path: string = ''): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${SITE_URL}/${cleanPath}`;
};

/**
 * Get the current page URL
 */
export const getCurrentUrl = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.href;
  }
  return SITE_URL;
};

/**
 * Generate blog post URL
 */
export const getBlogPostUrl = (slug: string): string => {
  return getFullUrl(`blog/${slug}`);
};

/**
 * Generate image URL with fallback
 */
export const getImageUrl = (imagePath?: string, fallback: string = 'og-image.png'): string => {
  if (imagePath) {
    // If it's already a full URL, return as is
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    // If it's a relative path, make it absolute
    return getFullUrl(imagePath);
  }
  return getFullUrl(fallback);
};

/**
 * Clean HTML from text (for meta descriptions)
 */
export const stripHtml = (html: string): string => {
  if (typeof window !== 'undefined') {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }
  // Fallback for server-side or when DOM is not available
  return html.replace(/<[^>]*>/g, '');
};

/**
 * Truncate text to a specific length for meta descriptions
 */
export const truncateText = (text: string, maxLength: number = 160): string => {
  if (text.length <= maxLength) return text;
  
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  // If there's a space near the end, cut at the space to avoid cutting words
  if (lastSpace > maxLength * 0.8) {
    return truncated.slice(0, lastSpace) + '...';
  }
  
  return truncated + '...';
};