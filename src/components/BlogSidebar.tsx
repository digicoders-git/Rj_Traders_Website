import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import { BLOGS, CATEGORIES } from '../constants';

export default function BlogSidebar() {
  const recentPosts = BLOGS.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full pl-4 pr-10 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
          <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Categories</h3>
        <div className="space-y-2">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              to="/blog"
              className="flex items-center justify-between group py-1"
            >
              <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">{cat}</span>
              <ChevronRight size={14} className="text-slate-300 group-hover:text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Recent Posts</h3>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="flex gap-4 group">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-primary transition-colors mb-1">
                  {post.title}
                </h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
