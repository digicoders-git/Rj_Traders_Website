import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, TrendingUp, Newspaper, Mail } from 'lucide-react';
import { BLOGS, CATEGORIES } from '../constants';

export default function BlogSidebar() {
  const recentPosts = BLOGS.slice(0, 3);
  const popularPosts = BLOGS.slice(3, 6);

  return (
    <div className="space-y-8 flex flex-col">
      {/* Search Widget */}
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
          <Search size={14} className="text-primary" />
          Search
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Explore topics..."
            className="w-full pl-4 pr-10 py-3 text-sm rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400"
          />
          <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
          <TrendingUp size={14} className="text-primary" />
          Categories
        </h3>
        <div className="space-y-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              to="/blog"
              className="flex items-center justify-between group py-2 px-3 rounded-lg hover:bg-slate-50 transition-all"
            >
              <span className="text-sm text-slate-600 font-medium group-hover:text-primary transition-colors">{cat}</span>
              <ChevronRight size={14} className="text-slate-300 group-hover:text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
          <TrendingUp size={14} className="text-primary" />
          Recent Posts
        </h3>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="flex gap-4 group items-center">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight line-clamp-2 group-hover:text-primary transition-colors mb-2">
                  {post.title}
                </h4>
                <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Articles Widget */}
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 bg-gradient-to-br from-white to-slate-50">
        <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
          <TrendingUp size={14} className="text-primary" />
          Popular Articles
        </h3>
        <div className="space-y-5">
          {popularPosts.map((post, idx) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="flex gap-4 group items-start">
              <span className="text-2xl font-black text-slate-100 group-hover:text-primary/20 transition-colors">0{idx + 1}</span>
              <div>
                <h4 className="text-xs font-bold text-slate-800 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Industry Updates Widget */}
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
          <Newspaper size={14} className="text-primary" />
          Industry Updates
        </h3>
        <div className="space-y-4">
          {[
            "New regulations for wastewater discharge in 2026",
            "Breakthrough in membrane nanotechnology",
            "Global water crisis solutions session highlights"
          ].map((news, i) => (
            <div key={i} className="pb-4 border-b border-slate-50 last:border-0 last:pb-0">
              <p className="text-xs text-slate-600 leading-relaxed hover:text-primary cursor-pointer transition-colors">
                {news}
              </p>
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter mt-1 block italic">Breaking News</span>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Widget */}
      <div className="bg-primary p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-700" />
        <Mail size={40} className="text-white/20 mb-6" />
        <h3 className="text-xl font-black mb-3 leading-tight">Stay Updated with Industry Insights</h3>
        <p className="text-white/70 text-xs mb-8 leading-relaxed font-medium">
          Join 5,000+ professionals receiving weekly water treatment guides.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm outline-none focus:bg-white/20 transition-all font-bold"
          />
          <button className="w-full bg-white text-primary font-black text-[10px] uppercase tracking-[0.2em] py-4 rounded-xl hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-lg">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}
