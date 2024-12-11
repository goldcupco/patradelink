import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'How to Choose the Right Electrician for Your Home',
    excerpt: 'Learn the key factors to consider when hiring an electrician...',
    author: 'John Smith',
    date: '2024-02-20',
    imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400',
  },
  {
    id: 2,
    title: 'Spring Home Maintenance Tips from Pro Contractors',
    excerpt: 'Essential maintenance tasks to prepare your home for spring...',
    author: 'Sarah Johnson',
    date: '2024-02-18',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400',
  },
];

export function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Trade Insights Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}