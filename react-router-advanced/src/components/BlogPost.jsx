import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { Id } = useParams();

  return (
    <div>
      <h2>Blog Post {Id}</h2>
      {/* Fetch and display the blog post content using the postId */}
    </div>
  );
}

export default BlogPost;