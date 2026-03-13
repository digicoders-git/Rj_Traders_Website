import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, MessageSquare, Send } from 'lucide-react';
import { BLOGS } from '../constants';
import BlogSidebar from '../components/BlogSidebar';
import InquirySection from '../components/InquirySection';

// Blog Images
import boilerImg from '../assets/images/blog/boiler-water-treatment.jpg';
import mbbrImg from '../assets/images/blog/mbbr-technology.jpg';
import wtpImg from '../assets/images/blog/water-treatment-plant-overview.jpg';
import roImg from '../assets/images/blog/reverse-osmosis-guide.jpg';
import stpImg from '../assets/images/blog/sewage-treatment-plant.jpg';
import etpImg from '../assets/images/blog/effluent-treatment-plant.jpg';
import iwwImg from '../assets/images/blog/industrial-wastewater-treatment.jpg';
import ufImg from '../assets/images/blog/ultrafiltration-technology.jpg';
import dmImg from '../assets/images/blog/demineralization-plant.jpg';

const BLOG_CONTENT: Record<string, any> = {
  'boiler-water-treatment': {
    title: "Boiler Water Treatment: What It Is and How It Works",
    image: boilerImg,
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
    image: mbbrImg,
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
    title: "What is a Water Treatment Plant and Its Importance",
    image: wtpImg,
    introduction: "A Water Treatment Plant (WTP) is a facility designed to improve the quality of water to make it appropriate for a specific end-use, such as drinking or industrial supply.",
    sections: [
      {
        heading: "Importance in Preventing Pollution",
        content: "WTPs act as the first line of defense against environmental degradation by removing pathogens and toxic chemicals before water enters the community distribution.",
        list: [
          "Removal of Pathogens: Eliminates harmful bacteria and viruses.",
          "Chemical Neutralization: Removes toxic chemicals and heavy metals.",
          "Ecosystem Protection: Prevents contaminated water from entering natural water bodies.",
          "Public Health: Ensures safe drinking water and reduces waterborne diseases."
        ]
      }
    ]
  },
  'how-ro-works': {
    title: "How Reverse Osmosis Works: A Complete Guide",
    image: roImg,
    introduction: "Reverse Osmosis (RO) is a sophisticated water purification technology that uses a semi-permeable membrane to remove ions, molecules, and larger particles from drinking water.",
    sections: [
      {
        heading: "The Science Behind RO",
        content: "In reverse osmosis, an applied pressure is used to overcome osmotic pressure, forcing water from a high-solute concentration to a low-solute concentration.",
        steps: [
          { title: "Prefiltration", desc: "Removes sediment and chlorine to protect the sensitive RO membrane." },
          { title: "The RO Membrane", desc: "The heart of the system where nearly all dissolved solids are removed." },
          { title: "Postfiltration", desc: "Final polishing to remove any remaining taste or odor." },
          { title: "Storage & Delivery", desc: "Pure water is stored in a tank and delivered via a dedicated faucet." }
        ]
      }
    ]
  },
  'importance-of-stp': {
    title: "Importance of Sewage Treatment Plants in Urban Areas",
    image: stpImg,
    introduction: "Sewage Treatment Plants (STP) are essential urban infrastructure that treat domestic and municipal wastewater to remove contaminants before discharge.",
    sections: [
      {
        heading: "Key Benefits of STP",
        content: "STPs help maintain the delicate balance of the urban water cycle while preventing epidemics and environmental pollution.",
        list: [
          "Disease Prevention: Eliminates pathogens from human waste.",
          "Environmental Protection: Prevents organic matter from depleting oxygen in rivers.",
          "Water Reuse: Treated water can be used for landscaping and construction.",
          "Odor Control: Advanced biological processes neutralize unpleasant odors."
        ]
      }
    ]
  },
  'benefits-of-etp': {
    title: "Benefits of Effluent Treatment Plants for Industries",
    image: etpImg,
    introduction: "Effluent Treatment Plants (ETP) are mandatory for industrial units to treat wastewater contaminated with chemicals, oils, and other toxic substances.",
    sections: [
      {
        heading: "Why Industries Need ETP",
        content: "Implementing an ETP is not just a regulatory requirement but also a step towards sustainable and ethical manufacturing.",
        list: [
          "Regulatory Compliance: Avoid heavy penalties from pollution control boards.",
          "Brand Reputation: Demonstrate commitment to environmental safety.",
          "Operational Efficiency: Recycled water can be used in various cooling processes.",
          "Hazardous Waste Removal: Specifically targets toxic industrial pollutants."
        ]
      }
    ]
  },
  'industrial-wastewater-solutions': {
    title: "Industrial Wastewater Treatment Solutions",
    image: iwwImg,
    introduction: "Industrial wastewater treatment covers the mechanisms and processes used to treat water that has been contaminated by anthropogenic industrial or commercial activities.",
    sections: [
      {
        heading: "Modern Treatment Technologies",
        content: "Industry leaders are moving towards Zero Liquid Discharge (ZLD) and advanced oxidation processes to handle complex waste streams.",
        list: [
          "Advanced Oxidation: Uses chemical oxidants to break down resistant organic pollutants.",
          "Membrane Bioreactors (MBR): Combines biological treatment with membrane filtration.",
          "Evaporation & Crystallization: Key components of ZLD systems for total water recovery."
        ]
      }
    ]
  },
  'ultrafiltration-technology': {
    title: "Ultrafiltration Technology in Water Treatment",
    image: ufImg,
    introduction: "Ultrafiltration (UF) is a membrane filtration process that serves as a powerful barrier against bacteria, viruses, and ultra-fine particulates.",
    sections: [
      {
        heading: "Advantages of UF Systems",
        content: "UF provides high-quality water with consistent results, regardless of variations in source water quality.",
        list: [
          "Superior Clarification: Removes nearly all suspended solids and turbidity.",
          "Microbial Safety: Highly effective at removing pathogens including Giardia and Cryptosporidium.",
          "Low Footprint: Compact modular designs save valuable floor space.",
          "Chemical Free: Physical barrier reduces the need for extensive chemical treatment."
        ]
      }
    ]
  },
  'demineralization-plant': {
    title: "What is a Demineralization Water Treatment Plant",
    image: dmImg,
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
  },
  'industrial-water-treatment-quality': {
    title: "How Industrial Water Treatment Plants Improve Water Quality",
    image: "https://images.unsplash.com/photo-1513828583815-c4988c8984ff?q=80&w=1470&auto=format&fit=crop",
    introduction: "Industrial water treatment is a multifaceted process designed to remove impurities and contaminants from water used in manufacturing, processing, and cooling. By employing advanced technologies like filtration, chemical dosing, and biological reactors, these plants ensure that water quality meets the rigorous requirements of modern industry while protecting the environment.",
    sections: [
      {
        heading: "1. Primary Filtration and Solids Removal",
        content: "The first stage of improving water quality involves the physical removal of large particles, debris, and suspended solids. This protects sensitive downstream equipment and improves overall clarity.",
        list: [
          "Sedimentation: Allowing heavy solids to settle by gravity in large basins.",
          "Multi-Grade Sand Filtration: Trapping finer particles within layers of graded sand.",
          "Screening: Removing larger debris before it enters the primary treatment train."
        ]
      },
      {
        heading: "2. Chemical Treatment and pH Balancing",
        content: "Dissolved contaminants require chemical intervention. Precision dosing systems ensure the water chemistry is perfectly balanced for its intended industrial use.",
        list: [
          "Coagulation & Flocculation: Clumping small particles together for easier removal.",
          "pH Adjustment: Neutralizing acidic or alkaline water to prevent corrosion.",
          "Disinfection: Eliminating harmful bacteria and pathogens using UV or ozone."
        ]
      },
      {
        heading: "3. Membrane Purification Technology",
        content: "For ultra-high purity requirements, membrane technologies provide a molecular-level barrier against nearly all contaminants.",
        list: [
          "Reverse Osmosis (RO): Removing up to 99% of dissolved salts and ions.",
          "Ultrafiltration (UF): Blocking bacteria, viruses, and ultra-fine particulates.",
          "Nanofiltration: Specifically targeting hardness and heavy metals."
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
      <InquirySection />
    </motion.div>
  );
}
