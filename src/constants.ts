/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BlogPost, Product } from './types';

// Blog Images
import mbbrImg from './assets/images/blog/mbbr-technology.jpg';
import wtpImg from './assets/images/blog/water-treatment-plant-overview.jpg';
import roImg from './assets/images/blog/reverse-osmosis-guide.jpg';
import stpImg from './assets/images/blog/sewage-treatment-plant.jpg';
import etpImg from './assets/images/blog/effluent-treatment-plant.jpg';
import iwwImg from './assets/images/blog/industrial-wastewater-treatment.jpg';
import ufImg from './assets/images/blog/ultrafiltration-technology.jpg';
import dmImg from './assets/images/blog/demineralization-plant.jpg';
import boilerImg from './assets/images/blog/boiler-water-treatment.jpg';

export const COMPANY_DETAILS = {
  name: "RJ Traders",
  industry: "Water Treatment Plant and Industrial Water Solutions",
  address: "IIIrd Floor, Office No. 303, A-14, Devika Chamber, RDC, Raj Nagar, Ghaziabad, UP 201002",
  phone: "07017079891",
  phones: ["07017079891", "07983834548", "01203260413"],
  whatsapp: "+917017079891",
  email: "enquiry@rjjalraksha.com",
};

export const STATS = [
  { label: 'Years of Experience', value: 8, suffix: '+' },
  { label: 'Projects Completed', value: 1200, suffix: '+' },
  { label: 'Company Workers', value: 50, suffix: '+' },
  { label: 'Satisfied Customers', value: 500, suffix: '+' },
];

export const INDUSTRIES = [
  { name: 'Pharmaceutical', icon: 'Pill' },
  { name: 'Food & Beverage', icon: 'Utensils' },
  { name: 'Chemical Industry', icon: 'Beaker' },
  { name: 'Municipal Water', icon: 'Building' },
  { name: 'Oil & Gas', icon: 'Fuel' },
  { name: 'Agriculture', icon: 'Sprout' },
];

export const MISSION_VISION = [
  {
    title: 'Our Mission',
    desc: 'To provide innovative and sustainable water treatment solutions that empower industries and protect our environment.',
    icon: 'Target',
  },
  {
    title: 'Our Vision',
    desc: 'To be the global leader in water technology, setting benchmarks for quality, reliability, and environmental stewardship.',
    icon: 'Eye',
  },
  {
    title: 'Quality',
    desc: 'We adhere to the highest international standards, ensuring every drop treated meets the most stringent quality criteria.',
    icon: 'Award',
  },
  {
    title: 'Customer Satisfaction',
    desc: 'Our success is measured by the success and satisfaction of our clients, built on trust and long-term partnership.',
    icon: 'Heart',
  },
];

export const SERVICES = [
  {
    id: "industrial-ro",
    title: "Industrial RO Plant",
    description: "High-capacity Reverse Osmosis systems designed for heavy-duty industrial applications.",
    icon: "Droplets",
  },
  {
    id: "commercial-ro",
    title: "Commercial RO Plant",
    description: "Efficient water purification solutions for offices, schools, and commercial complexes.",
    icon: "Building2",
  },
  {
    id: "water-softener",
    title: "Water Softener",
    description: "Advanced ion-exchange systems to remove hardness from water for industrial use.",
    icon: "Waves",
  },
  {
    id: "etp",
    title: "Effluent Treatment Plant",
    description: "Sustainable solutions for treating industrial wastewater before discharge.",
    icon: "FlaskConical",
  },
  {
    id: "stp",
    title: "Sewage Treatment Plant",
    description: "Complete biological treatment systems for domestic and commercial sewage.",
    icon: "Recycle",
  },
  {
    id: "filtration",
    title: "Water Filtration System",
    description: "Multi-grade and activated carbon filters for superior water clarity.",
    icon: "Filter",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "effluent-treatment-plant",
    title: "Effluent Treatment Plant",
    description: "Industrial wastewater treatment systems for environmental compliance.",
    image: "image1.jpg",
    icon: "FlaskConical",
    fullDescription: "Effluent Treatment Plant (ETP) is a specialized system designed to treat industrial wastewater before it is discharged into the environment. It is essential for industries to remove toxic and non-toxic materials, ensuring compliance with environmental regulations.\n\nOur ETP solutions are tailored to the specific needs of various industries, including chemicals, pharmaceuticals, and textiles. By using advanced physical, chemical, and biological processes, we ensure that the treated effluent meets the required standards for safe disposal or reuse.",
    benefits: [
      "Removes harmful contaminants from industrial waste",
      "Ensures compliance with pollution control board norms",
      "Reduces the environmental footprint of industries",
      "Cost-effective wastewater management",
      "Enables water recycling for industrial processes"
    ],
    features: [
      "Customized design based on effluent characteristics",
      "High-efficiency removal of BOD, COD, and TSS",
      "Robust construction for industrial environments",
      "Automated control systems for ease of operation",
      "Minimal chemical consumption"
    ]
  },
  {
    id: "bio-stp-plant",
    title: "Bio STP Plant",
    description: "Advanced biological sewage treatment for sustainable water recycling.",
    image: "image2.jpg",
    icon: "Recycle",
    fullDescription: "Bio Sewage Treatment Plant (Bio STP Plant) is an eco-friendly system that uses natural biological processes to treat wastewater. Instead of using harmful chemicals, Bio STP plants use bacteria and microorganisms to break down organic waste, ensuring safe and clean discharge of treated water.",
    benefits: [
      "Water recycling and reuse",
      "Environment friendly solution",
      "Low maintenance cost",
      "Compliance with pollution control regulations",
      "Improves sanitation and hygiene"
    ],
    features: [
      "Compact design",
      "Energy efficient operation",
      "Odor-free functioning",
      "Durable construction",
      "Advanced biological treatment technology"
    ],
    detailedExplanation: "The treated water can be reused for various non-potable applications such as gardening, flushing systems, cooling towers, and landscaping, making it an effective solution for water conservation.\n\nAs a leading Bio STP Plant Manufacturer, RJ Traders focuses strongly on quality standards. Each plant is designed and tested using advanced technologies and strict quality parameters to ensure reliable performance.\n\nThese plants are manufactured according to environmental regulations and Pollution Control Board standards, ensuring safe wastewater management with low power consumption and minimal maintenance.\n\nOur primary goal is customer satisfaction and delivering efficient wastewater treatment results. We offer a wide range of treatment solutions including sewage treatment plants, effluent treatment plants, bio ETP plants, and other advanced water purification systems.\n\nIf you are searching for a trusted Bio STP Plant Manufacturer, RJ Traders offers innovative, sustainable, and cost-effective wastewater treatment solutions suitable for residential, commercial, and industrial applications."
  },
  {
    id: "bio-etp-plant",
    title: "Bio ETP Plant",
    description: "Biological effluent treatment for complex industrial wastewater.",
    image: "image3.jpg",
    icon: "Microscope",
    fullDescription: "Bio ETP Plant combines biological treatment with traditional effluent treatment processes to handle complex industrial wastewater. It uses specialized microbial cultures to degrade organic pollutants, making it highly effective for industries with high organic loads.\n\nThis system is particularly beneficial for food processing, breweries, and dairy industries where organic waste is predominant. The biological process is not only efficient but also more sustainable compared to purely chemical treatments.",
    benefits: [
      "Superior degradation of organic pollutants",
      "Lower operating costs compared to chemical treatment",
      "Reduced sludge production",
      "Eco-friendly and sustainable process",
      "Consistent performance under varying loads"
    ],
    features: [
      "Advanced aerobic and anaerobic biological reactors",
      "Specialized microbial cultures for targeted treatment",
      "Energy-efficient aeration systems",
      "Compact footprint with high treatment capacity",
      "Easy integration with existing ETP systems"
    ]
  },
  {
    id: "sewage-treatment-plant",
    title: "Sewage Treatment Plant",
    description: "Complete sewage management solutions for residential and commercial use.",
    image: "image4.jpg",
    icon: "Recycle",
    fullDescription: "Sewage Treatment Plant (STP) is designed to treat domestic wastewater, removing contaminants to produce an environmentally safe fluid waste stream. It is a critical infrastructure for residential complexes, hotels, and commercial buildings.\n\nOur STP systems utilize modern technologies like MBBR, SBR, and MBR to ensure high-quality treated water. This water can be reused for non-potable purposes, significantly reducing the demand for fresh water and promoting sustainability.",
    benefits: [
      "Effective removal of pathogens and organic matter",
      "Produces high-quality water for reuse in gardening and flushing",
      "Prevents groundwater contamination",
      "Odor-free and hygienic operation",
      "Complies with municipal and environmental standards"
    ],
    features: [
      "Available in various capacities (KLD)",
      "Modular and scalable design",
      "Low power consumption and noise levels",
      "User-friendly operation and maintenance",
      "Durable and corrosion-resistant materials"
    ]
  },
  {
    id: "water-treatment-plant",
    title: "Water Treatment Plant",
    description: "Comprehensive water purification systems for diverse applications.",
    image: "image5.jpg",
    icon: "Droplets",
    fullDescription: "Water Treatment Plant (WTP) encompasses a variety of processes used to make water more acceptable for a specific end-use, such as drinking, industrial processes, or irrigation. It involves the removal of suspended solids, microorganisms, and dissolved minerals.\n\nRJ Traders provides comprehensive WTP solutions that include filtration, disinfection, and softening. Our plants are designed to handle different source water qualities, providing consistent and reliable output for our clients.",
    benefits: [
      "Ensures safe and clean water for all applications",
      "Protects industrial equipment from scaling and corrosion",
      "Improves the taste and quality of water",
      "Reduces health risks from waterborne diseases",
      "Versatile solutions for different water sources"
    ],
    features: [
      "Multi-stage filtration process",
      "Advanced disinfection systems (UV/Ozone/Chlorination)",
      "High-quality filter media and membranes",
      "Robust and long-lasting components",
      "Customizable to specific water quality requirements"
    ]
  },
  {
    id: "ultra-filtration-plant",
    title: "Ultra Filtration Plant",
    description: "Advanced membrane filtration for superior water clarity.",
    image: "image6.jpg",
    icon: "Filter",
    fullDescription: "Ultra Filtration (UF) Plant uses advanced membrane technology to remove suspended solids, bacteria, and viruses from water. It is a pressure-driven process that provides a high degree of purification while maintaining essential minerals.\n\nUF is widely used as a pre-treatment for Reverse Osmosis (RO) or as a standalone system for drinking water and industrial process water. It is highly effective in producing water with very low turbidity and SDI (Silt Density Index).",
    benefits: [
      "Consistent removal of bacteria and viruses",
      "High recovery rate of water",
      "Low energy consumption compared to other membrane processes",
      "Compact and modular design",
      "Reduces the load on downstream RO systems"
    ],
    features: [
      "High-quality hollow fiber membranes",
      "Automated backwash and chemical cleaning systems",
      "Real-time monitoring of pressure and flow",
      "Robust skid-mounted construction",
      "Easy to operate and maintain"
    ]
  },
  {
    id: "water-softener-plant",
    title: "Water Softener Plant",
    description: "Ion-exchange systems to eliminate water hardness effectively.",
    image: "image7.jpg",
    icon: "Waves",
    fullDescription: "Water Softener Plant is designed to remove calcium and magnesium ions from water, which cause hardness. Hard water can lead to scaling in pipes, boilers, and other industrial equipment, reducing efficiency and lifespan.\n\nOur softening systems use high-capacity ion-exchange resins to replace hardness ions with sodium ions. This process ensures that the water is 'soft' and safe for use in boilers, cooling towers, and various industrial processes.",
    benefits: [
      "Prevents scale buildup in pipes and equipment",
      "Improves the efficiency of boilers and heat exchangers",
      "Reduces soap and detergent consumption",
      "Extends the life of plumbing and appliances",
      "Provides consistent soft water quality"
    ],
    features: [
      "Automatic and manual regeneration options",
      "High-quality food-grade ion-exchange resin",
      "Durable FRP or stainless steel pressure vessels",
      "Precise brine tank for efficient regeneration",
      "Simple and reliable control valves"
    ]
  },
  {
    id: "demineralization-plant",
    title: "Demineralization Plant",
    description: "High-purity water production for industrial and laboratory use.",
    image: "image8.jpg",
    icon: "Beaker",
    fullDescription: "Demineralization (DM) Plant is used to remove dissolved solids and minerals from water through ion exchange. It produces high-purity water with very low conductivity, essential for high-pressure boilers and sensitive industrial processes.\n\nThe process typically involves a cation exchanger followed by an anion exchanger. For even higher purity, a mixed-bed polisher can be added. RJ Traders offers DM plants that are robust, efficient, and capable of producing water that meets the most stringent industrial standards.",
    benefits: [
      "Produces ultra-pure water with low conductivity",
      "Essential for high-pressure boiler feed water",
      "Prevents mineral deposits in sensitive equipment",
      "Reliable and consistent water quality",
      "Cost-effective for high-purity requirements"
    ],
    features: [
      "Two-stage or mixed-bed ion exchange configurations",
      "High-quality cation and anion resins",
      "Corrosion-resistant regeneration systems",
      "Precise monitoring of water conductivity",
      "Robust construction for long-term reliability"
    ]
  },
  {
    id: "zero-liquid-discharge-plant",
    title: "Zero Liquid Discharge Plant",
    description: "Total water recovery systems for zero environmental impact.",
    image: "image9.jpg",
    icon: "RefreshCw",
    fullDescription: "Zero Liquid Discharge (ZLD) Plant is an advanced wastewater treatment process that eliminates liquid waste discharge from an industrial facility. It involves a combination of processes like RO, evaporation, and crystallization to recover all water for reuse.\n\nZLD is the ultimate solution for environmental sustainability and compliance with 'Zero Discharge' mandates. It not only protects the environment but also helps industries recover valuable salts and minerals from the waste stream.",
    benefits: [
      "Eliminates environmental impact from liquid waste",
      "Ensures 100% compliance with zero-discharge regulations",
      "Maximizes water recovery and reuse",
      "Recovers valuable by-products from wastewater",
      "Reduces the need for fresh water intake"
    ],
    features: [
      "Integrated multi-stage treatment process",
      "High-efficiency evaporators and crystallizers",
      "Advanced membrane systems for pre-concentration",
      "Automated control for complex process management",
      "Robust design for handling high-salinity waste"
    ]
  },
  {
    id: "chemicals",
    title: "Chemicals",
    description: "Specialized water treatment chemicals for various industrial needs.",
    image: "image10.jpg",
    icon: "Beaker",
    fullDescription: "RJ Traders offers a wide range of high-performance water treatment chemicals designed to optimize the performance of your systems. Our chemicals are formulated to prevent scaling, corrosion, and biological growth in boilers, cooling towers, and RO systems.\n\nWe provide specialized solutions for different water qualities and industrial requirements. Our team of experts can help you select the right chemical program to ensure the longevity and efficiency of your water treatment infrastructure.",
    benefits: [
      "Prevents scaling and corrosion in critical equipment",
      "Optimizes system efficiency and reduces energy costs",
      "Extends the life of membranes and heat exchangers",
      "Reduces maintenance and downtime",
      "Environmentally responsible formulations"
    ],
    features: [
      "High-concentration formulations for cost-effectiveness",
      "Compatible with a wide range of system materials",
      "Easy-to-use liquid and powder forms",
      "Consistent quality and performance",
      "Expert technical support for application"
    ]
  },
  {
    id: "boiler-water-treatment-plant",
    title: "Boiler Water Treatment Plant",
    description: "Prevent scale and corrosion in boiler systems with expert treatment.",
    image: "image11.jpg",
    icon: "Flame",
    fullDescription: "Boiler Water Treatment Plant is essential for maintaining the efficiency and safety of steam-generating systems. Untreated water can lead to scale formation and oxygen corrosion, which can cause boiler failure and significant energy loss.\n\nOur treatment solutions include external treatment (softening/demineralization) and internal chemical treatment to ensure that the boiler feed water meets the required specifications. This protects the boiler from damage and ensures consistent steam quality.",
    benefits: [
      "Prevents scale and sludge formation in boilers",
      "Protects against oxygen and acid corrosion",
      "Improves heat transfer efficiency and fuel savings",
      "Ensures safe and reliable boiler operation",
      "Reduces the frequency of boiler blowdown"
    ],
    features: [
      "Integrated softening or DM systems",
      "Precise chemical dosing pumps and controllers",
      "Deaeration systems for oxygen removal",
      "Continuous monitoring of water parameters",
      "Customized treatment programs for different boiler types"
    ]
  },
  {
    id: "reverse-osmosis",
    title: "Reverse Osmosis",
    description: "High-efficiency RO systems for pure water production.",
    image: "image12.jpg",
    icon: "Droplets",
    fullDescription: "Reverse Osmosis (RO) is a water purification technology that uses a semi-permeable membrane to remove ions, molecules, and larger particles from water. It is one of the most effective methods for producing high-purity water for drinking and industrial use.\n\nOur RO systems are designed for high recovery and energy efficiency. They are equipped with advanced pre-filtration and monitoring systems to ensure consistent performance and protect the membranes from fouling. RJ Traders provides RO solutions for a wide range of capacities and applications.",
    benefits: [
      "Removes up to 99% of dissolved solids and contaminants",
      "Produces high-quality water for diverse applications",
      "Scalable solutions from small to large capacities",
      "Low operating costs and high reliability",
      "Compact and space-saving design"
    ],
    features: [
      "High-performance thin-film composite membranes",
      "Multi-stage pre-filtration (Sand/Carbon/Micron)",
      "High-pressure pumps with variable frequency drives",
      "Automated flushing and cleaning systems",
      "Real-time monitoring of TDS and flow rates"
    ]
  },
  {
    id: "ro-antiscalant",
    title: "RO Antiscalant",
    description: "Premium chemicals to protect RO membranes from scaling.",
    image: "image13.jpg",
    icon: "Shield",
    fullDescription: "RO Antiscalant is a specialized chemical used to prevent the scaling of Reverse Osmosis membranes. Scaling occurs when dissolved salts exceed their solubility limits and precipitate on the membrane surface, reducing flow and increasing pressure.\n\nOur antiscalants are highly effective against a wide range of scales, including calcium carbonate, calcium sulfate, and silica. Using the right antiscalant can significantly extend the life of your RO membranes and reduce the frequency of chemical cleanings.",
    benefits: [
      "Prevents membrane scaling and fouling",
      "Reduces the frequency of membrane cleaning",
      "Extends the service life of RO membranes",
      "Maintains system recovery and permeate quality",
      "Cost-effective protection for expensive membranes"
    ],
    features: [
      "Highly effective at low dosage rates",
      "Compatible with all types of RO membranes",
      "Stable over a wide range of pH and temperature",
      "Easy to dose and monitor",
      "Complies with international safety standards"
    ]
  },
  {
    id: "wastewater-treatment",
    title: "Wastewater Treatment",
    description: "Sustainable solutions for industrial and municipal wastewater.",
    image: "image14.jpg",
    icon: "Wind",
    fullDescription: "Wastewater Treatment is a process used to convert wastewater into an effluent that can be either returned to the water cycle with minimal environmental impact or reused. It involves physical, chemical, and biological processes to remove contaminants.\n\nRJ Traders offers a broad spectrum of wastewater treatment technologies, from primary clarification to advanced tertiary treatment. Our goal is to provide sustainable and cost-effective solutions that help our clients meet their environmental responsibilities.",
    benefits: [
      "Protects public health and the environment",
      "Enables the reuse of water for non-potable purposes",
      "Reduces the volume of waste discharged",
      "Complies with stringent environmental regulations",
      "Promotes a circular economy in water management"
    ],
    features: [
      "Comprehensive range of treatment technologies",
      "Customized solutions for different wastewater types",
      "High-efficiency removal of pollutants",
      "Robust and reliable system performance",
      "Expert design and engineering support"
    ]
  },
  {
    id: "membrane-technologies",
    title: "Membrane Technologies",
    description: "Advanced membrane solutions for precise water separation.",
    image: "image15.jpg",
    icon: "Grid",
    fullDescription: "Membrane Technologies involve the use of semi-permeable membranes to separate substances from water. This includes Microfiltration (MF), Ultrafiltration (UF), Nanofiltration (NF), and Reverse Osmosis (RO).\n\nThese technologies are at the forefront of modern water treatment, offering precise separation and high-purity output. RJ Traders leverages the latest membrane innovations to provide solutions for desalination, wastewater recycling, and industrial process water purification.",
    benefits: [
      "Precise and consistent separation performance",
      "Capable of removing a wide range of contaminants",
      "Modular and easily expandable systems",
      "Lower chemical usage compared to traditional methods",
      "High-quality output suitable for sensitive processes"
    ],
    features: [
      "State-of-the-art membrane elements",
      "Advanced pressure vessel designs",
      "Integrated monitoring and control systems",
      "Efficient energy recovery options",
      "Comprehensive membrane management programs"
    ]
  },
  {
    id: "recycling-and-reuse",
    title: "Recycling and Reuse",
    description: "Maximize water efficiency with our recycling and reuse systems.",
    image: "image16.jpg",
    icon: "Recycle",
    fullDescription: "Water Recycling and Reuse is the process of treating wastewater so that it can be used for another purpose. This is a key strategy for addressing water scarcity and reducing the environmental impact of industrial operations.\n\nOur recycling systems are designed to treat wastewater to the specific quality required for its intended reuse, such as cooling tower makeup, irrigation, or industrial processes. RJ Traders helps industries close the water loop and achieve significant savings in fresh water costs.",
    benefits: [
      "Reduces dependence on fresh water sources",
      "Lowers water procurement and discharge costs",
      "Demonstrates commitment to sustainability",
      "Mitigates risks from water scarcity",
      "Improves the overall water footprint of the facility"
    ],
    features: [
      "Custom-engineered treatment trains for specific reuse needs",
      "Advanced filtration and disinfection technologies",
      "Real-time monitoring of recycled water quality",
      "Seamless integration with existing water systems",
      "Scalable solutions for growing water demands"
    ]
  },
];

export const CATEGORIES = [
  "Boiler Water Treatment Plant",
  "Commercial RO Plant",
  "Demineralization Plant",
  "Waste Water Treatment",
  "Industrial Solutions"
];

export const BLOGS: BlogPost[] = [
  {
    id: "mbbr-in-stp",
    title: "What is the full form of MBBR in STP",
    excerpt: "Learn about Moving Bed Biofilm Reactor (MBBR) and its crucial role in modern Sewage Treatment Plants.",
    date: "March 12, 2026",
    image: mbbrImg,
    category: "Waste Water Treatment",
    author: "Admin"
  },
  {
    id: "importance-of-wtp",
    title: "What is a Water Treatment Plant and Its Importance",
    excerpt: "Discover why water treatment plants are essential for public health and environmental protection.",
    date: "March 10, 2026",
    image: wtpImg,
    category: "Industrial Solutions",
    author: "Admin"
  },
  {
    id: "how-ro-works",
    title: "How Reverse Osmosis Works: A Complete Guide",
    excerpt: "Understand the science behind RO technology and how it provides pure drinking water for industries.",
    date: "March 15, 2026",
    image: roImg,
    category: "Industrial Solutions",
    author: "Admin"
  },
  {
    id: "importance-of-stp",
    title: "Importance of Sewage Treatment Plants in Urban Areas",
    excerpt: "Why modern cities need advanced STP systems to maintain hygiene and sustainable water cycles.",
    date: "March 18, 2026",
    image: stpImg,
    category: "Waste Water Treatment",
    author: "Admin"
  },
  {
    id: "benefits-of-etp",
    title: "Benefits of Effluent Treatment Plants for Industries",
    excerpt: "How ETP helps industries stay compliant while protecting local water bodies from toxic waste.",
    date: "March 20, 2026",
    image: etpImg,
    category: "Industrial Solutions",
    author: "Admin"
  },
  {
    id: "industrial-wastewater-solutions",
    title: "Industrial Wastewater Treatment Solutions",
    excerpt: "Explore the latest technologies in treating heavy industrial waste effectively and economically.",
    date: "March 22, 2026",
    image: iwwImg,
    category: "Industrial Solutions",
    author: "Admin"
  },
  {
    id: "ultrafiltration-technology",
    title: "Ultrafiltration Technology in Water Treatment",
    excerpt: "The role of UF membranes in providing crystal clear water for specialized industrial applications.",
    date: "March 25, 2026",
    image: ufImg,
    category: "Industrial Solutions",
    author: "Admin"
  },
  {
    id: "demineralization-plant",
    title: "What is a Demineralization Water Treatment Plant",
    excerpt: "An in-depth look at DM plants and how they remove dissolved solids from water effectively.",
    date: "March 08, 2026",
    image: dmImg,
    category: "Demineralization Plant",
    author: "Admin"
  },
  {
    id: "boiler-water-treatment",
    title: "Boiler Water Treatment: What It Is and How It Works",
    excerpt: "Understand the step-by-step process of boiler feed water treatment for maximum efficiency.",
    date: "March 05, 2026",
    image: boilerImg,
    category: "Boiler Treatment",
    author: "Admin"
  },
  {
    id: "industrial-water-treatment-quality",
    title: "How Industrial Water Treatment Plants Improve Water Quality",
    excerpt: "Learn how modern industrial treatment plants use physical and chemical processes to ensure superior water quality for manufacturing.",
    date: "March 28, 2026",
    image: mbbrImg,
    category: "Industrial Solutions",
    author: "Admin"
  },
];
