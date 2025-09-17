import { wordpressApi } from '@/lib/wordpress-api';
import { BlogPost, BlogCategory, BlogTag } from '@/types/blog';

export class WordPressService {
  private categories: BlogCategory[] = [];
  private tags: BlogTag[] = [];
  private categoriesLoaded = false;
  private tagsLoaded = false;

  async fetchPosts(params: {
    page?: number;
    per_page?: number;
    search?: string;
    categories?: string;
    tags?: string;
  } = {}): Promise<{ posts: BlogPost[]; totalPages: number; total: number }> {
    try {
      return await wordpressApi.fetchPosts(params);
    } catch (error) {
      console.error('Error fetching WordPress posts:', error);
      // Return empty result on error
      return { posts: [], totalPages: 0, total: 0 };
    }
  }

  async fetchPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      return await wordpressApi.fetchPostBySlug(slug);
    } catch (error) {
      console.error('Error fetching WordPress post by slug:', error);
      return null;
    }
  }

  async fetchPostById(id: number): Promise<BlogPost | null> {
    try {
      return await wordpressApi.fetchPostById(id);
    } catch (error) {
      console.error('Error fetching WordPress post by ID:', error);
      return null;
    }
  }

  async getCategories(): Promise<BlogCategory[]> {
    if (!this.categoriesLoaded) {
      try {
        this.categories = await wordpressApi.fetchCategories();
        this.categoriesLoaded = true;
      } catch (error) {
        console.error('Error fetching WordPress categories:', error);
        this.categories = [];
      }
    }
    return this.categories;
  }

  async getTags(): Promise<BlogTag[]> {
    if (!this.tagsLoaded) {
      try {
        this.tags = await wordpressApi.fetchTags();
        this.tagsLoaded = true;
      } catch (error) {
        console.error('Error fetching WordPress tags:', error);
        this.tags = [];
      }
    }
    return this.tags;
  }

  getCategoryName(categoryId: number): string {
    return wordpressApi.getCategoryName(categoryId, this.categories);
  }

  getTagName(tagId: number): string {
    return wordpressApi.getTagName(tagId, this.tags);
  }

  // Refresh cached data
  async refreshCategories(): Promise<void> {
    this.categoriesLoaded = false;
    await this.getCategories();
  }

  async refreshTags(): Promise<void> {
    this.tagsLoaded = false;
    await this.getTags();
  }
}

export const wordpressService = new WordPressService();