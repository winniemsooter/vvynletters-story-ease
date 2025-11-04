# Social Media Sharing Setup

This document explains how social media sharing with featured images has been implemented for the VVYNLETTERS blog.

## What Was Implemented

### 1. Dynamic Meta Tags
- **Open Graph tags** for Facebook, LinkedIn, and other platforms
- **Twitter Card tags** for Twitter/X sharing
- **Structured data** (JSON-LD) for better SEO and rich snippets
- **Dynamic title and description** based on blog post content

### 2. SEO Component (`src/lib/seo.tsx`)
A React component that dynamically updates meta tags when blog posts load:
- Updates `og:title`, `og:description`, `og:image`, `og:url`
- Sets Twitter Card meta tags
- Adds structured data for search engines
- Handles both article and website types

### 3. URL Utilities (`src/lib/url-utils.ts`)
Helper functions for consistent URL generation:
- `getFullUrl()` - Generate absolute URLs
- `getImageUrl()` - Handle image URLs with fallbacks
- `stripHtml()` - Clean HTML from descriptions
- `truncateText()` - Ensure descriptions fit social media limits

### 4. Updated Components
- **BlogPost page**: Dynamic meta tags for each blog post
- **Blog listing page**: Proper meta tags for the blog index
- **Home page**: Consistent meta tag structure

## How It Works

### For Individual Blog Posts
When a user visits `/blog/post-slug`, the system:

1. **Fetches the blog post** from WordPress API
2. **Extracts key information**:
   - Post title
   - Post excerpt (cleaned of HTML)
   - Featured image URL
   - Publication date
   - Tags/categories

3. **Updates meta tags dynamically**:
   ```html
   <meta property="og:title" content="Blog Post Title | VVYNLETTERS" />
   <meta property="og:description" content="Clean excerpt from the post..." />
   <meta property="og:image" content="https://vvynletters.com/featured-image.jpg" />
   <meta property="og:url" content="https://vvynletters.com/blog/post-slug" />
   <meta property="og:type" content="article" />
   ```

4. **Adds structured data** for search engines:
   ```json
   {
     "@type": "BlogPosting",
     "headline": "Blog Post Title",
     "image": ["https://vvynletters.com/featured-image.jpg"],
     "datePublished": "2024-01-01T00:00:00Z",
     "author": {"@type": "Person", "name": "Winifred Liam"}
   }
   ```

### Social Media Platform Behavior

When someone shares a blog post URL:

- **Facebook/LinkedIn**: Reads Open Graph tags to show title, description, and featured image
- **Twitter/X**: Uses Twitter Card tags for rich previews
- **WhatsApp/Telegram**: Uses Open Graph tags for link previews
- **Slack/Discord**: Uses Open Graph tags for unfurling

## Testing Your Setup

### 1. Browser Console Debug
In development mode, open browser console on any blog post to see:
```javascript
// These functions are automatically available
debugMetaTags();        // Shows all current meta tags
validateSocialMetaTags(); // Validates required tags are present
```

### 2. Social Media Debuggers
Test your URLs with these official tools:

- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: https://www.linkedin.com/post-inspector/

### 3. Manual Testing
1. Share a blog post URL in a social media platform
2. Check if the preview shows:
   - Correct title
   - Blog post excerpt
   - Featured image
   - Proper branding

## Troubleshooting

### Featured Image Not Showing
1. **Check image URL**: Ensure the WordPress featured image URL is accessible
2. **Image size**: Social media prefers images 1200x630px or larger
3. **HTTPS**: Ensure all image URLs use HTTPS
4. **Cache**: Social media platforms cache previews - use their debug tools to refresh

### Wrong Title/Description
1. **Check WordPress data**: Verify the post title and excerpt in WordPress
2. **HTML in excerpt**: The system strips HTML tags automatically
3. **Length limits**: Descriptions are truncated to 160 characters

### Cache Issues
Social media platforms cache link previews. To refresh:
1. Use the platform's debug/validator tool
2. Wait 24-48 hours for natural cache expiry
3. Slightly modify the URL (add ?v=1) to force refresh

## File Structure

```
src/
├── lib/
│   ├── seo.tsx           # Main SEO component
│   ├── url-utils.ts      # URL generation utilities
│   └── meta-debug.ts     # Debug utilities
├── pages/
│   ├── BlogPost.tsx      # Individual blog post (with dynamic SEO)
│   ├── Blog.tsx          # Blog listing page
│   └── Index.tsx         # Home page
└── types/
    └── blog.ts           # TypeScript interfaces

public/
├── og-image.png          # Default social media image
├── robots.txt            # Allows social media crawlers
└── sitemap.xml           # For search engines
```

## Best Practices

### 1. Featured Images
- **Size**: 1200x630px (Facebook recommended)
- **Format**: JPG or PNG
- **Content**: Include text overlay with post title if possible
- **Fallback**: Always have a default og-image.png

### 2. Descriptions
- **Length**: 150-160 characters for optimal display
- **Content**: Clear, engaging summary of the post
- **No HTML**: System automatically strips HTML tags

### 3. Titles
- **Format**: "Post Title | VVYNLETTERS"
- **Length**: Under 60 characters for best display
- **Keywords**: Include relevant keywords naturally

## Future Enhancements

1. **Author profiles**: Add author-specific meta tags and structured data
2. **Category images**: Use category-specific default images
3. **A/B testing**: Test different image sizes and descriptions
4. **Analytics**: Track social media referral traffic
5. **Auto-generation**: Generate social media images automatically from post content

## Support

If you encounter issues with social media sharing:

1. Check the browser console for debug information
2. Use social media debug tools to validate meta tags
3. Verify WordPress API is returning correct featured image URLs
4. Ensure all URLs use HTTPS and are publicly accessible