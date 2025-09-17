/**
 * Calculate estimated reading time for content
 * @param content - HTML or plain text content
 * @param wordsPerMinute - Average reading speed (default: 200 wpm)
 * @returns Reading time in minutes
 */
export function calculateReadingTime(content: string, wordsPerMinute: number = 200): number {
  if (!content || content.trim().length === 0) {
    return 1; // Minimum 1 minute for empty content
  }

  // Strip HTML tags more thoroughly
  const plainText = content
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '') // Remove script tags and content
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '') // Remove style tags and content
    .replace(/<[^>]*>/g, '') // Remove all other HTML tags
    .replace(/&[^;]+;/g, ' ') // Replace HTML entities with space
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  // Count words (split on whitespace and filter out empty strings)
  const words = plainText.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  // Calculate reading time (minimum 1 minute)
  const readingTime = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  
  return readingTime;
}

/**
 * Format reading time for display
 * @param minutes - Reading time in minutes
 * @returns Formatted string like "5 min read" or "1 min read"
 */
export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}

/**
 * Get reading time with different speeds for different content types
 */
export const ReadingSpeed = {
  SLOW: 150,      // Slower readers or complex content
  AVERAGE: 200,   // Average adult reading speed
  FAST: 250,      // Fast readers or simple content
  TECHNICAL: 100, // Technical documentation or complex topics
} as const;