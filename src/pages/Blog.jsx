import React from 'react';
import { blogPosts } from '../data/blog.js';

export default function Blog() {
  return (
    <div>
      <div className="page-header">
        <span className="eyebrow">07 — Writing</span>
        <h1 className="page-title">Tech Blog</h1>
        <p className="page-subtitle">Articles, tutorials, and writeups — coming soon</p>
      </div>

      <div className="grid grid-2">
        {blogPosts.map((post) => (
          <div className="card blog-card" key={post.id}>
            <div className="blog-emoji">{post.emoji}</div>
            <div className="blog-meta-row">
              <span className="blog-cat">{post.category}</span>
              <span className="blog-status">{post.status}</span>
            </div>
            <div className="blog-title">{post.title}</div>
            <p className="blog-excerpt">{post.excerpt}</p>
            <div className="project-tech-row">
              {post.tags.map((t) => <span className="tech-pill" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
