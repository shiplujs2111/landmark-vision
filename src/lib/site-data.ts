import residential from "@/assets/project-residential.jpg";
import commercial from "@/assets/project-commercial.jpg";
import mixed from "@/assets/project-mixed.jpg";
import construction from "@/assets/project-construction.jpg";
import penthouse from "@/assets/project-penthouse.jpg";
import aerial from "@/assets/project-aerial.jpg";

export type Project = {
  id: string;
  name: string;
  location: string;
  category: "Residential" | "Commercial" | "Mixed-Use";
  status: "Completed" | "Ongoing" | "Upcoming";
  year: string;
  image: string;
  description: string;
  amenities: string[];
};

export const projects: Project[] = [
  { id: "landmark-heights", name: "Landmark Heights", location: "Gulshan-2, Dhaka", category: "Residential", status: "Completed", year: "2023", image: residential, description: "A 28-storey luxury residential tower offering panoramic city views, private elevators, and resort-style amenities.", amenities: ["Sky Lounge", "Infinity Pool", "Smart Home", "Private Lift"] },
  { id: "siddique-tower", name: "Siddique Tower", location: "Mohakhali C/A, Dhaka", category: "Commercial", status: "Completed", year: "2018", image: commercial, description: "An iconic Grade-A office tower in the heart of Mohakhali Commercial Area with column-free floor plates.", amenities: ["Concierge", "Conference Center", "Triple-Glazed Facade", "EV Charging"] },
  { id: "banani-pavilion", name: "Banani Pavilion", location: "Banani, Dhaka", category: "Mixed-Use", status: "Ongoing", year: "2026", image: mixed, description: "A landmark mixed-use destination combining retail, lifestyle, and residences across a lush plaza.", amenities: ["Retail Boulevard", "Rooftop Garden", "Co-working", "Wellness Spa"] },
  { id: "purbachal-vista", name: "Purbachal Vista", location: "Purbachal New Town", category: "Residential", status: "Upcoming", year: "2027", image: aerial, description: "A 100-acre master-planned community in Purbachal with townhouses, mid-rise condos, and parks.", amenities: ["Lake Park", "Club House", "Tennis", "International School"] },
  { id: "bashundhara-galleria", name: "Bashundhara Galleria", location: "Bashundhara R/A", category: "Commercial", status: "Ongoing", year: "2025", image: construction, description: "A premium A-Grade business address with sky bridges, double-height lobbies, and LEED Gold certification.", amenities: ["Sky Bridge", "LEED Gold", "Wellness Floor", "Auditorium"] },
  { id: "uttara-residences", name: "Uttara Residences", location: "Uttara Sector-4", category: "Residential", status: "Completed", year: "2022", image: residential, description: "Boutique residences featuring artisanal finishes, private gardens, and modern wellness amenities.", amenities: ["Yoga Deck", "Cinema Room", "Library", "Concierge"] },
  { id: "dhanmondi-collection", name: "Dhanmondi Collection", location: "Dhanmondi Lake", category: "Residential", status: "Completed", year: "2021", image: penthouse, description: "Lakeside penthouse residences with curated interiors and bespoke joinery throughout.", amenities: ["Lake View", "Private Pool", "Wine Cellar", "Smart Lighting"] },
  { id: "mohakhali-square", name: "Mohakhali Square", location: "Mohakhali, Dhaka", category: "Mixed-Use", status: "Completed", year: "2020", image: mixed, description: "A lively urban square uniting commercial, food & beverage, and serviced residences.", amenities: ["F&B Promenade", "Event Plaza", "Serviced Suites", "24/7 Security"] },
  { id: "gulshan-skyline", name: "Gulshan Skyline", location: "Gulshan-1, Dhaka", category: "Commercial", status: "Upcoming", year: "2028", image: commercial, description: "A 35-storey signature corporate tower defining the next era of Gulshan's business district.", amenities: ["Helipad", "Executive Lounge", "Sky Garden", "Smart Building"] },
  { id: "purbachal-greens", name: "Purbachal Greens", location: "Purbachal, Sector-22", category: "Residential", status: "Ongoing", year: "2026", image: aerial, description: "Low-density villa enclave surrounded by greenery, water features, and walking trails.", amenities: ["Villas", "Equestrian Trail", "Organic Farm", "Private Beach"] },
  { id: "banani-grand", name: "Banani Grand Residence", location: "Banani Road-11", category: "Residential", status: "Completed", year: "2019", image: residential, description: "Heritage-inspired tower with hand-crafted facade detailing and a private members' club.", amenities: ["Members Club", "Wine Lounge", "Pool", "Valet"] },
  { id: "uttara-business-park", name: "Uttara Business Park", location: "Uttara Sector-9", category: "Commercial", status: "Ongoing", year: "2027", image: commercial, description: "A campus-style business park with low-rise blocks, courtyards, and abundant amenities.", amenities: ["Campus Layout", "Daycare", "Gym", "Cafeterias"] },
];

export const ventures = [
  { name: "Landmark Town Ltd.", tagline: "Real Estate Development", desc: "Flagship real estate arm crafting iconic residences and master-planned communities across Bangladesh.", icon: "Building2" },
  { name: "Landmark Consortium & Asset", tagline: "Property Management & Asset Solutions", desc: "Full-spectrum asset, facility, and property management for premium portfolios.", icon: "Briefcase" },
  { name: "GSSL", tagline: "Industrial & Business Services", desc: "Engineering-led industrial services powering modern enterprise across multiple sectors.", icon: "Factory" },
  { name: "Orleans Leather", tagline: "Leather Manufacturing & Export", desc: "World-class leather goods manufactured for global brands, exporting to 20+ countries.", icon: "Scissors" },
  { name: "Projonmo Sangbad", tagline: "Media & News Platform", desc: "Independent journalism platform delivering credible news and contemporary storytelling.", icon: "Newspaper" },
  { name: "SS Bajaj", tagline: "Automotive Solutions", desc: "Authorized partner delivering Bajaj mobility products, parts, and service nationwide.", icon: "Bike" },
];

export const stats = [
  { value: "5000+", label: "Happy Clients" },
  { value: "50+", label: "Projects Delivered" },
  { value: "100+", label: "Acres Developed" },
  { value: "20+", label: "Years Experience" },
];

export const timeline = [
  { year: "2004", title: "The Foundation", desc: "Landmark Group is founded with a vision to redefine urban living in Bangladesh." },
  { year: "2009", title: "Real Estate Expansion", desc: "Launch of flagship residential developments across Gulshan, Banani, and Uttara." },
  { year: "2013", title: "Diversification", desc: "Entry into leather manufacturing and industrial services through Orleans Leather and GSSL." },
  { year: "2017", title: "Media & Mobility", desc: "Founding of Projonmo Sangbad and SS Bajaj, expanding into media and automotive." },
  { year: "2021", title: "Iconic Milestones", desc: "Delivery of award-winning towers including Landmark Heights and Dhanmondi Collection." },
  { year: "2026", title: "Next Horizon", desc: "100-acre Purbachal Vista community and Gulshan Skyline corporate tower break ground." },
];

export const articles = [
  { slug: "bd-real-estate-outlook-2026", title: "Bangladesh Real Estate Outlook 2026", excerpt: "How macro fundamentals, infrastructure investment, and a maturing buyer profile are reshaping the market.", date: "May 12, 2026", category: "Market", image: aerial },
  { slug: "smart-cities-purbachal", title: "Inside Purbachal: A Blueprint for Smart Cities", excerpt: "Lessons from one of South Asia's most ambitious urban projects.", date: "April 28, 2026", category: "Urban Planning", image: mixed },
  { slug: "investment-opportunities-dhaka", title: "Where Smart Capital is Moving in Dhaka", excerpt: "A neighborhood-by-neighborhood guide to investment-grade real estate.", date: "April 14, 2026", category: "Investment", image: commercial },
  { slug: "sustainable-construction", title: "Sustainable Construction: From LEED to Local Materials", excerpt: "Building greener: technologies and materials transforming construction.", date: "March 30, 2026", category: "Sustainability", image: construction },
  { slug: "luxury-living-redefined", title: "Luxury Living, Redefined for the Next Decade", excerpt: "What today's discerning homeowners actually want from premium residences.", date: "March 18, 2026", category: "Lifestyle", image: penthouse },
  { slug: "office-of-the-future", title: "The Office of the Future is Already Here", excerpt: "How A-Grade workplaces are evolving for hybrid teams and ESG mandates.", date: "March 02, 2026", category: "Commercial", image: commercial },
  { slug: "leather-export-bd", title: "The Quiet Rise of Bangladesh's Leather Export", excerpt: "How local manufacturers are climbing the global value chain.", date: "February 19, 2026", category: "Industry", image: aerial },
  { slug: "urban-planning-dhaka", title: "Master Plans That Make Dhaka Liveable", excerpt: "From mobility to public space, the moves cities need to make.", date: "February 05, 2026", category: "Urban Planning", image: residential },
];
