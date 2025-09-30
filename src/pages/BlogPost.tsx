import React from "react";
import { useParams } from "react-router-dom";

const BlogPost: React.FC = () => {
  const { slug, id } = useParams();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Post</h1>
      {slug && <p>Slug: {slug}</p>}
      {id && <p>ID: {id}</p>}
      <p>Content coming soon.</p>
    </main>
  );
};

export default BlogPost;

