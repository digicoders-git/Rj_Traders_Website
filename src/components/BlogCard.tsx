import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  blog: BlogPost;
  index: number;
  key?: string | number;
}

export default function BlogCard({ blog, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {blog.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={12} className="text-primary" />
            {blog.date}
          </div>
          <div className="flex items-center gap-1">
            <User size={12} className="text-primary" />
            {blog.author}
          </div>
        </div>
        
        <h3 className="text-lg font-black text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {blog.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {blog.excerpt}
        </p>
        
        <div className="mt-auto">
          <Link
            to={`/blog/${blog.id}`}
            className="inline-flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest group/btn"
          >
            Continue Reading
            <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
