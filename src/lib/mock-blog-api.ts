import { BlogPost } from '@/types/blog';
import { sampleBlogPosts, sampleCategories, sampleTags } from '@/data/sampleBlogPosts';

export class MockBlogAPI {
  private posts: BlogPost[] = sampleBlogPosts;

  async fetchPosts(params: {
    page?: number;
    per_page?: number;
    search?: string;
    categories?: string;
    tags?: string;
  } = {}): Promise<{ posts: BlogPost[]; totalPages: number; total: number }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    let filteredPosts = [...this.posts];

    // Apply search filter
    if (params.search) {
      const searchTerm = params.search.toLowerCase();
      filteredPosts = filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm)
      );
    }

    // Apply category filter
    if (params.categories) {
      const categoryIds = params.categories.split(',').map(id => parseInt(id));
      filteredPosts = filteredPosts.filter(post => 
        post.categories.some(catId => categoryIds.includes(catId))
      );
    }

    // Apply tag filter
    if (params.tags) {
      const tagIds = params.tags.split(',').map(id => parseInt(id));
      filteredPosts = filteredPosts.filter(post => 
        post.tags.some(tagId => tagIds.includes(tagId))
      );
    }

    // Sort by date (newest first)
    filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const total = filteredPosts.length;
    const perPage = params.per_page || 10;
    const page = params.page || 1;
    const totalPages = Math.ceil(total / perPage);

    // Apply pagination
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    return {
      posts: paginatedPosts,
      totalPages,
      total
    };
  }

  async fetchPostBySlug(slug: string): Promise<BlogPost | null> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));

    const post = this.posts.find(p => p.slug === slug);
    return post || null;
  }

  async fetchPostById(id: number): Promise<BlogPost | null> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));

    const post = this.posts.find(p => p.id === id);
    return post || null;
  }

  getCategories() {
    return sampleCategories;
  }

  getTags() {
    return sampleTags;
  }

  getCategoryName(id: number): string {
    const category = sampleCategories.find(cat => cat.id === id);
    return category?.name || 'Unknown Category';
  }

  getTagName(id: number): string {
    const tag = sampleTags.find(t => t.id === id);
    return tag?.name || 'Unknown Tag';
  }
}

export const mockBlogApi = new MockBlogAPI();