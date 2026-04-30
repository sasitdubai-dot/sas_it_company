'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { blogPosts, categories, getFeaturedPosts } from '@/lib/blog-data';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = getFeaturedPosts();

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">IT Insights & News</h1>
          <p className="text-gray-400 text-lg mb-8">Expert IT guides, how-tos, and industry insights for Dubai businesses.</p>
          <div className="relative max-w-xl mx-auto">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search 30+ articles..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>
      </section>

      <section className="py-6 px-6 bg-gray-900 border-b border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {selectedCategory === 'All' && searchTerm === '' && (
        <section className="py-16 px-6 bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.slice(0, 3).map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-500/10 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors leading-snug">{post.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-gray-500 text-xs bg-gray-800 px-2 py-0.5 rounded">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs">{new Date(post.publishedAt).toLocaleDateString('en-AE', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className="text-blue-400 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">Read more →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-white">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
              <span className="text-gray-500 text-base font-normal ml-3">({filteredPosts.length})</span>
            </h2>
          </div>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400">No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-500/10 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-white font-bold text-base mb-2 group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">{post.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-gray-500 text-xs bg-gray-800 px-2 py-0.5 rounded">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs">{new Date(post.publishedAt).toLocaleDateString('en-AE', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className="text-blue-400 text-sm font-semibold">Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
