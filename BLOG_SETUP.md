# Blog Setup Guide

This project includes a complete blog system that integrates with WordPress REST API.

## Features

- **Blog Listing Page** (`/blog`): Displays all blog posts with pagination and search
- **Individual Blog Post Page** (`/blog/[slug]`): Shows full blog post content
- **WordPress Integration**: Fetches content from WordPress REST API
- **Responsive Design**: Matches the existing site design system
- **SEO Friendly**: Proper meta tags and structured content
- **Search Functionality**: Search through blog posts
- **Loading States**: Skeleton loaders for better UX

## Setup Instructions

### 1. Configure WordPress API URL

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the `VITE_WORDPRESS_API_URL` in your `.env` file:
   ```env
   VITE_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
   ```

### 2. WordPress Configuration

Ensure your WordPress site has:
- REST API enabled (default in WordPress 4.7+)
- CORS configured if your site is on a different domain
- Featured images enabled for posts

### 3. CORS Setup (if needed)

If your WordPress site is on a different domain, add this to your WordPress `functions.php`:

```php
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
}
add_action('init','add_cors_http_header');
```

## API Endpoints Used

- `GET /wp/v2/posts` - Fetch blog posts with pagination and search
- `GET /wp/v2/posts?slug={slug}` - Fetch single post by slug
- `GET /wp/v2/media/{id}` - Fetch featured images

## File Structure

```
src/
├── pages/
│   ├── Blog.tsx              # Blog listing page
│   └── BlogPost.tsx          # Individual blog post page
├── types/
│   └── blog.ts               # TypeScript interfaces
├── lib/
│   └── wordpress-api.ts      # WordPress API client
└── components/
    └── BlogPostSkeleton.tsx  # Loading skeleton component
```

## Customization

### Styling
The blog pages use the same design system as the rest of the site:
- Custom CSS variables defined in `src/index.css`
- Tailwind classes for consistent spacing and colors
- Prose styles for blog content formatting

### API Configuration
You can customize the WordPress API client in `src/lib/wordpress-api.ts`:
- Change posts per page
- Add custom post types
- Modify data transformation

### Search and Filtering
The blog supports:
- Text search across post titles and content
- Pagination with configurable page size
- Category and tag filtering (can be extended)

## Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/blog` to see the blog listing
3. Click on any post to view the full content at `/blog/[slug]`

## Production Considerations

1. **Caching**: Consider implementing caching for API responses
2. **Error Handling**: The system includes basic error handling
3. **SEO**: Add meta tags for individual blog posts
4. **Performance**: Images are loaded lazily, consider adding image optimization
5. **Analytics**: Add tracking for blog post views

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure your WordPress site allows cross-origin requests
2. **404 Errors**: Check that your WordPress REST API is accessible
3. **Missing Images**: Verify featured images are set in WordPress
4. **Slow Loading**: Consider implementing caching or using a CDN

### Testing the API

You can test your WordPress API directly:
```bash
curl https://your-wordpress-site.com/wp-json/wp/v2/posts
```

This should return a JSON array of your blog posts.