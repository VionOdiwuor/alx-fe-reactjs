import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h2>Blog Post {postId}</h2>
      {/* Fetch and display the blog post content using the postId */}
    </div>
  );
}

export default BlogPost;