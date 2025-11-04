# Social Media Sharing Deployment Guide

## ✅ What We've Built

Your blog now has **dynamic social media sharing** that shows:
- ✅ **Correct blog post titles**
- ✅ **Post excerpts as descriptions**
- ✅ **Featured images from WordPress**
- ✅ **Proper meta tags for all platforms**

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)

1. **Connect your repository to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build settings** (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Environment variables**:
   - Add `VITE_WORDPRESS_API_URL` = `https://vvynletters.gamer.gd//wp-json/wp/v2`

4. **Deploy!**
   - Netlify will automatically handle the redirects for social media bots

### Option 2: Vercel

1. **Connect your repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Build settings** (auto-detected):
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Environment variables**:
   - Add `VITE_WORDPRESS_API_URL` = `https://vvynletters.gamer.gd//wp-json/wp/v2`

4. **Deploy!**
   - Vercel will use the `vercel.json` configuration

## 🔧 How It Works

### For Regular Users
- Visit `/blog/post-slug` → See your normal React app

### For Social Media Bots
- Visit `/blog/post-slug` → Get redirected to `/api/meta-tags?slug=post-slug`
- API fetches post data from WordPress
- Returns HTML with correct meta tags
- Social media platforms read the meta tags and show rich previews

### Bot Detection
The system detects these social media crawlers:
- Facebook (`facebookexternalhit`)
- Twitter (`Twitterbot`)
- LinkedIn (`LinkedInBot`)
- WhatsApp (`WhatsApp`)
- Telegram (`TelegramBot`)
- Slack (`SlackBot`)
- Discord (`DiscordBot`)

## 🧪 Testing Your Deployment

### 1. Test API Endpoint
After deployment, test the meta tag generation:
```
https://your-site.com/api/meta-tags?slug=your-post-slug
```

### 2. Social Media Debuggers
Test your blog post URLs:

**Facebook Sharing Debugger**
- URL: https://developers.facebook.com/tools/debug/
- Enter: `https://your-site.com/blog/your-post-slug`
- Click "Debug" to see what Facebook sees

**Twitter Card Validator**
- URL: https://cards-dev.twitter.com/validator
- Enter: `https://your-site.com/blog/your-post-slug`
- Click "Preview card" to see Twitter preview

**LinkedIn Post Inspector**
- URL: https://www.linkedin.com/post-inspector/
- Enter: `https://your-site.com/blog/your-post-slug`

### 3. Real-World Test
1. Share a blog post URL on social media
2. Check if the preview shows:
   - ✅ Blog post title (not site title)
   - ✅ Post excerpt (not site description)
   - ✅ Featured image (not default og-image)

## 🐛 Troubleshooting

### "Still showing default meta tags"
1. **Clear social media cache**:
   - Use the debug tools above to refresh cache
   - Wait 24-48 hours for natural cache expiry

2. **Check bot detection**:
   - Verify the redirect rules are working
   - Test the API endpoint directly

3. **WordPress API issues**:
   - Ensure WordPress API is accessible
   - Check featured images are properly set
   - Verify CORS settings allow your domain

### "Featured image not showing"
1. **Image accessibility**:
   - Ensure WordPress images use HTTPS
   - Check image URLs are publicly accessible
   - Verify images are at least 1200x630px

2. **WordPress media settings**:
   - Check featured images are set for posts
   - Ensure media library is working

### "API function not working"
1. **Check function logs**:
   - Netlify: Site dashboard → Functions → View logs
   - Vercel: Project dashboard → Functions → View logs

2. **Environment variables**:
   - Verify `VITE_WORDPRESS_API_URL` is set correctly
   - Check API URL is accessible from the function

## 📁 File Structure

```
├── netlify.toml              # Netlify configuration
├── vercel.json               # Vercel configuration
├── netlify/functions/        # Netlify Functions
│   └── meta-tags.js         # Meta tag generator
├── api/                     # Vercel API routes
│   └── meta-tags.js         # Meta tag generator
├── src/lib/
│   ├── seo.tsx              # Client-side SEO component
│   ├── url-utils.ts         # URL utilities
│   └── meta-debug.ts        # Debug utilities
└── test-meta-tags.js        # Test script
```

## 🎯 What Happens Next

1. **Deploy to your preferred platform**
2. **Test with social media debuggers**
3. **Share a blog post and verify the preview**
4. **Celebrate!** 🎉

Your blog posts will now show proper previews with titles, descriptions, and featured images when shared on social media platforms.

## 🔄 Future Maintenance

- **New blog posts**: Automatically work with proper meta tags
- **Cache refresh**: Use social media debug tools if needed
- **Image optimization**: Ensure featured images are 1200x630px for best results
- **Performance**: API responses are cached for 5 minutes to improve speed

## 📞 Support

If you encounter issues:
1. Check the function logs in your deployment platform
2. Test the API endpoint directly
3. Verify WordPress API accessibility
4. Use social media debug tools to refresh cache