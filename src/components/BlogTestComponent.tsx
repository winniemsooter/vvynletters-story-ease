import { useState, useEffect } from 'react';
import { mockBlogApi } from '@/lib/mock-blog-api';
import { BlogPost } from '@/types/blog';

export const BlogTestComponent = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const testApi = async () => {
      try {
        const result = await mockBlogApi.fetchPosts({ per_page: 3 });
        setPosts(result.posts);
        console.log('Mock API test successful:', result);
      } catch (error) {
        console.error('Mock API test failed:', error);
      } finally {
        setLoading(false);
      }
    };

    testApi();
  }, []);

  if (loading) return <div>Testing mock API...</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Mock API Test Results</h2>
      <p className="mb-4">Found {posts.length} posts</p>
      {posts.map(post => (
        <div key={post.id} className="mb-4 p-4 border rounded">
          <h3 className="font-semibold">{post.title}</h3>
          <p className="text-sm text-gray-600">{post.slug}</p>
        </div>
      ))}
    </div>
  );
};