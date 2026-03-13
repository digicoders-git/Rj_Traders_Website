import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, MessageSquare, Send } from 'lucide-react';
import { BLOGS } from '../constants';
import BlogSidebar from '../components/BlogSidebar';

const BLOG_CONTENT: Record<string, any> = {
  'boiler-water-treatment': {
    title: "Boiler Water Treatment: What It Is and How It Works",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200",
    introduction: "Boiler water treatment is a critical process in industrial operations. It involves the chemical and physical treatment of water used in boilers to prevent scale, corrosion, and carryover. Proper treatment ensures the longevity of the equipment and maintains operational efficiency.",
    sections: [
      {
        heading: "Step-by-Step Process of Boiler Feed Water Treatment",
        content: "The treatment process is comprehensive and involves several key stages to ensure the water is safe for high-pressure boiler operations.",
        steps: [
          {
            title: "Pre-Treatment of Water",
            desc: "The first step involves removing large particles and suspended solids through filtration and sedimentation."
          },
          {
            title: "Removal of Hardness",
            desc: "Water softeners or ion-exchange systems are used to remove calcium and magnesium ions that cause scale formation."
          },
          {
            title: "Deaeration for Oxygen Removal",
            desc: "Oxygen can cause severe pitting and corrosion in boilers. Deaerators remove dissolved gases through heating and mechanical agitation."
          },
          {
            title: "Reverse Osmosis or Demineralization",
            desc: "For high-pressure boilers, ultra-pure water is required. RO or DM plants remove almost all dissolved minerals."
          },
          {
            title: "Chemical Conditioning",
            desc: "Final adjustments are made using chemicals like oxygen scavengers, pH adjusters, and scale inhibitors."
          }
        ]
      },
      {
        heading: "Why Boiler Water Treatment Is Essential",
        content: "Neglecting water treatment can lead to catastrophic failures and massive financial losses.",
        list: [
          "Prevents Scale Formation: Scale acts as an insulator, reducing heat transfer efficiency and causing overheating.",
          "Corrosion Protection: Protects the metal surfaces from acidic or oxygen-rich water.",
          "Fuel Efficiency: Clean boilers require less fuel to generate the same amount of steam.",
          "Extended Equipment Life: Reduces the need for frequent repairs and premature replacements.",
          "Safety: Prevents boiler tube failures and potential explosions."
        ]
      }
    ]
  },
  'mbbr-in-stp': {
    title: "What is the full form of MBBR in STP",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
    introduction: "MBBR stands for Moving Bed Biofilm Reactor. It is a highly efficient biological wastewater treatment process that combines the advantages of activated sludge and trickling filters.",
    sections: [
      {
        heading: "How MBBR Works",
        content: "The process uses specialized plastic carriers (media) that provide a large surface area for bacteria to grow. These carriers are kept in constant motion by aeration or mixers.",
        list: [
          "Biofilm Growth: Microorganisms attach to the carriers and form a protective biofilm.",
          "High Efficiency: The large surface area allows for a high concentration of biomass in a small footprint.",
          "Robustness: The biofilm is resilient to fluctuations in load and toxic shocks.",
          "Low Maintenance: No need for sludge recycling or backwashing."
        ]
      }
    ]
  },
  'importance-of-wtp': {
    title: "What is a Water Treatment Plant and Its Importance in Preventing Water Pollution",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1200",
    introduction: "A Water Treatment Plant (WTP) is a facility designed to improve the quality of water to make it appropriate for a specific end-use, such as drinking, industrial supply, or irrigation.",
    sections: [
      {
        heading: "Importance in Preventing Pollution",
        content: "WTPs act as the first line of defense against environmental degradation.",
        list: [
          "Removal of Pathogens: Eliminates harmful bacteria and viruses.",
          "Chemical Neutralization: Removes toxic chemicals and heavy metals.",
          "Ecosystem Protection: Prevents contaminated water from entering rivers and oceans.",
          "Resource Recovery: Modern plants can recover energy and nutrients from waste."
        ]
      }
    ]
  },
  'demineralization-plant': {
    title: "What is a Demineralization Water Treatment Plant",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?auto=format&fit=crop&q=80&w=1200",
    introduction: "Demineralization (DM) is the process of removing dissolved mineral salts from water using ion exchange. A DM plant typically consists of cation and anion exchangers.",
    sections: [
      {
        heading: "The DM Process",
        content: "The water passes through resin beds that exchange ions for hydrogen and hydroxyl ions.",
        list: [
          "Cation Exchange: Removes positively charged ions like Calcium and Magnesium.",
          "Anion Exchange: Removes negatively charged ions like Sulfates and Chlorides.",
          "Mixed Bed: A final polishing stage for ultra-high purity water.",
          "Regeneration: Resins are periodically cleaned with acid and alkali to restore their capacity."
        ]
      }
    ]
  }
};

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const blog = BLOGS.find(b => b.id === id);
  const content = id ? BLOG_CONTENT[id] : null;

  if (!blog || !content) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h2 className="text-2xl font-bold">Blog post not found</h2>
        <Link to="/blog" className="text-primary mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest mb-8"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>

            <article>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                {content.title}
              </h1>

              <div className="flex items-center gap-6 text-xs text-slate-400 font-bold uppercase tracking-widest mb-8 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" />
                  {blog.date}
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-primary" />
                  {blog.author}
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-primary" />
                  0 Comments
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden mb-10 shadow-xl">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 leading-relaxed mb-8 italic border-l-4 border-primary pl-6">
                  {content.introduction}
                </p>

                {content.sections.map((section: any, idx: number) => (
                  <div key={idx} className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">{section.heading}</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">{section.content}</p>
                    
                    {section.steps && (
                      <div className="space-y-6 mb-8">
                        {section.steps.map((step: any, sIdx: number) => (
                          <div key={sIdx} className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black flex-shrink-0">
                              {sIdx + 1}
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                              <p className="text-sm text-slate-600">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.list && (
                      <ul className="space-y-4 mb-8">
                        {section.list.map((item: string, lIdx: number) => (
                          <li key={lIdx} className="flex gap-3 text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </article>

            {/* Comment Section */}
            <div className="mt-16 pt-16 border-t border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 mb-8">Leave a Comment</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Comment</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Website (Optional)</label>
                  <input
                    type="url"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="https://example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <button type="button" className="btn-primary flex items-center gap-2 px-8 py-4">
                    Post Comment
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
