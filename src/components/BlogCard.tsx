import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BlogPost, BlogCategory } from '@/types/blog';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import { wordpressService } from '@/services/wordpress';
import { calculateReadingTime, formatReadingTime } from '@/lib/reading-time';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const [categories, setCategories] = useState<BlogCategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const cats = await wordpressService.getCategories();
      setCategories(cats);
    };
    fetchCategories();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };



  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
      <Link to={`/blog/${post.slug}`} className="block h-full">
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img
            src={post.featuredImage || "/placeholder.svg"}
            alt={post.featuredImageAlt || post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <CardHeader className="pb-3">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {formatReadingTime(calculateReadingTime(post.content))}
            </div>
          </div>
          
          <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </CardHeader>
        
        <CardContent className="pt-0">
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {stripHtml(post.excerpt)}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {post.categories.slice(0, 2).map(categoryId => {
              const category = categories.find(cat => cat.id === categoryId);
              return (
                <Badge key={categoryId} variant="secondary" className="text-xs">
                  {category ? category.name : 'Unknown Category'}
                </Badge>
              );
            })}
            {post.categories.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{post.categories.length - 2} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};