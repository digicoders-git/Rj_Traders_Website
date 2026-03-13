import React from 'react';
import { motion } from 'motion/react';
import { BLOGS } from '../constants';
import BlogCard from '../components/BlogCard';
import BlogSidebar from '../components/BlogSidebar';

export default function Blog() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2">Our Blog</h1>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
            Insights & <span className="text-primary">Updates</span>
          </h2>
          <p className="text-slate-600 text-sm">
            Stay informed with the latest trends, guides, and technical insights in the water treatment industry.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Blog Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {BLOGS.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
