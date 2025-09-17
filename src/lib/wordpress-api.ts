import {
  WordPressPost,
  WordPressMedia,
  BlogPost,
  WordPressCategory,
  WordPressTag,
  BlogCategory,
  BlogTag,
} from "@/types/blog";

// Configure your WordPress site URL here
const WORDPRESS_API_URL = import.meta.env.VITE_WORDPRESS_API_URL || "https://vvynletters.gamer.gd//wp-json/wp/v2";


export class WordPressAPI {
  private baseUrl: string;

  constructor(baseUrl: string = WORDPRESS_API_URL) {
    this.baseUrl = baseUrl;
  }

  async fetchPosts(
    params: {
      page?: number;
      per_page?: number;
      search?: string;
      categories?: string;
      tags?: string;
    } = {}
  ): Promise<{ posts: BlogPost[]; totalPages: number; total: number }> {
    const searchParams = new URLSearchParams();

    if (params.page) searchParams.append("page", params.page.toString());
    if (params.per_page)
      searchParams.append("per_page", params.per_page.toString());
    if (params.search) searchParams.append("search", params.search);
    if (params.categories) searchParams.append("categories", params.categories);
    if (params.tags) searchParams.append("tags", params.tags);

    searchParams.append("_embed", "true"); // Include featured media and other embedded data

    const response = await fetch(
      `${this.baseUrl}/posts?${searchParams.toString()}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const posts: WordPressPost[] = await response.json();
    const totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "1");
    const total = parseInt(response.headers.get("X-WP-Total") || "0");

    const transformedPosts = await Promise.all(
      posts.map((post) => this.transformPost(post))
    );

    return {
      posts: transformedPosts,
      totalPages,
      total,
    };
  }

  async fetchPostBySlug(slug: string): Promise<BlogPost | null> {
    const response = await fetch(
      `${this.baseUrl}/posts?slug=${slug}&_embed=true`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.statusText}`);
    }

    const posts: WordPressPost[] = await response.json();

    if (posts.length === 0) {
      return null;
    }

    return this.transformPost(posts[0]);
  }

  async fetchPostById(id: number): Promise<BlogPost | null> {
    const response = await fetch(`${this.baseUrl}/posts/${id}?_embed=true`);

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch post: ${response.statusText}`);
    }

    const post: WordPressPost = await response.json();
    return this.transformPost(post);
  }

  private async transformPost(post: WordPressPost): Promise<BlogPost> {
    let featuredImage: string | undefined;
    let featuredImageAlt: string | undefined;

    // Extract featured image from embedded data
    if (post._links?.["wp:featuredmedia"]) {
      try {
        const mediaResponse = await fetch(
          post._links["wp:featuredmedia"][0].href
        );
        if (mediaResponse.ok) {
          const media: WordPressMedia = await mediaResponse.json();
          featuredImage = media.source_url;
          featuredImageAlt = media.alt_text;
        }
      } catch (error) {
        console.warn("Failed to fetch featured media:", error);
      }
    }

    return {
      id: post.id,
      title: this.decodeHtml(post.title.rendered),
      content: post.content.rendered,
      excerpt: this.decodeHtml(post.excerpt.rendered),
      slug: post.slug,
      date: post.date,
      author: post.author,
      featuredImage,
      featuredImageAlt,
      categories: post.categories,
      tags: post.tags,
    };
  }

  async fetchCategories(): Promise<BlogCategory[]> {
    const response = await fetch(`${this.baseUrl}/categories?per_page=100`);

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    const categories: WordPressCategory[] = await response.json();

    return categories.map((category) => ({
      id: category.id,
      name: this.decodeHtml(category.name),
      slug: category.slug,
      description: category.description,
      count: category.count,
    }));
  }

  async fetchTags(): Promise<BlogTag[]> {
    const response = await fetch(`${this.baseUrl}/tags?per_page=100`);

    if (!response.ok) {
      throw new Error(`Failed to fetch tags: ${response.statusText}`);
    }

    const tags: WordPressTag[] = await response.json();

    return tags.map((tag) => ({
      id: tag.id,
      name: this.decodeHtml(tag.name),
      slug: tag.slug,
      description: tag.description,
      count: tag.count,
    }));
  }

  getCategoryName(categoryId: number, categories: BlogCategory[]): string {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown Category";
  }

  getTagName(tagId: number, tags: BlogTag[]): string {
    const tag = tags.find((t) => t.id === tagId);
    return tag ? tag.name : "Unknown Tag";
  }

  private decodeHtml(html: string): string {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
}

export const wordpressApi = new WordPressAPI();
