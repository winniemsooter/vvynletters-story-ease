import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { BlogPost as BlogPostType, BlogCategory, BlogTag } from '@/types/blog';
import { wordpressService } from '@/services/wordpress';
import { BlogPostSkeleton } from '@/components/BlogPostSkeleton';
import { calculateReadingTime, formatReadingTime } from '@/lib/reading-time';

const BlogPost = () => {
  const { slug, id } = useParams<{ slug?: string; id?: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [tags, setTags] = useState<BlogTag[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug && !id) return;
      
      setLoading(true);
      try {
        // Fetch categories and tags
        const [fetchedCategories, fetchedTags] = await Promise.all([
          wordpressService.getCategories(),
          wordpressService.getTags()
        ]);
        
        setCategories(fetchedCategories);
        setTags(fetchedTags);

        // Fetch post
        let fetchedPost: BlogPostType | null = null;
        
        if (slug) {
          fetchedPost = await wordpressService.fetchPostBySlug(slug);
        } else if (id) {
          fetchedPost = await wordpressService.fetchPostById(parseInt(id));
        }
        
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug, id]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };



  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        // Fallback to copying URL to clipboard
        navigator.clipboard.writeText(window.location.href);
      }
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Navigation />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
              <BlogPostSkeleton />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Navigation />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Post Not Found
              </h1>
              <p className="text-muted-foreground mb-8">
                The blog post you're looking for doesn't exist or has been moved.
              </p>
              <Link to="/blog">
                <Button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="pt-20">
        <article className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link to="/blog" className="inline-block mb-8">
                <Button variant="ghost" className="p-0 h-auto hover:text-primary">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>

              {/* Featured Image */}
              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={post.featuredImage || "/placeholder.svg"}
                  alt={post.featuredImageAlt || post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Header */}
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {formatReadingTime(calculateReadingTime(post.content))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleShare}
                    className="p-0 h-auto text-muted-foreground hover:text-primary"
                  >
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>

                {/* Categories and Tags */}
                <div className="space-y-3">
                  {post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="text-sm font-medium text-muted-foreground">Categories:</span>
                      {post.categories.map(categoryId => {
                        const category = categories.find(cat => cat.id === categoryId);
                        return (
                          <Badge key={categoryId} variant="secondary">
                            {category ? category.name : 'Unknown Category'}
                          </Badge>
                        );
                      })}
                    </div>
                  )}
                  
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="text-sm font-medium text-muted-foreground">Tags:</span>
                      {post.tags.map(tagId => {
                        const tag = tags.find(t => t.id === tagId);
                        return (
                          <Badge key={tagId} variant="outline" className="text-xs">
                            {tag ? tag.name : 'Unknown Tag'}
                          </Badge>
                        );
                      })}
                    </div>
                  )}
                </div>
              </header>

              <Separator className="mb-8" />

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <Separator className="my-12" />

              {/* Call to Action */}
              <div className="bg-muted/50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Found this helpful?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Explore more stories and insights on our blog, or get in touch to share your own story.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/blog">
                    <Button variant="outline">
                      Read More Articles
                    </Button>
                  </Link>
                  <Link to="/#contact">
                    <Button>
                      Get In Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;