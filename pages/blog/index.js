import Link from 'next/link';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { getGlobalData } from '../../utils/global-data';
import { getPosts } from '../../utils/mdx-utils';
import { 
  Search, 
  Zap, 
  Palette, 
  ShoppingCart, 
  TrendingUp, 
  Code, 
  Smartphone, 
  Globe, 
  Target, 
  Lightbulb,
  Rocket,
  Heart,
  Star,
  BookOpen,
  MessageSquare
} from 'lucide-react';

function getReadingTime(text = '') {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

function getPostIcon(data) {
  const tags = data.tags || [];
  const title = data.title?.toLowerCase() || '';
  
  // Icon mapping based on tags and content
  const iconMap = {
    'seo': Search,
    'performance': Zap,
    'design': Palette,
    'shopify': ShoppingCart,
    'conversion': TrendingUp,
    'code': Code,
    'mobile': Smartphone,
    'website': Globe,
    'marketing': Target,
    'tips': Lightbulb,
    'launch': Rocket,
    'love': Heart,
    'featured': Star,
    'guide': BookOpen,
    'social': MessageSquare
  };
  
  // Check tags first
  for (const tag of tags) {
    if (iconMap[tag.toLowerCase()]) {
      return iconMap[tag.toLowerCase()];
    }
  }
  
  // Check title keywords
  if (title.includes('seo') || title.includes('ranking')) return Search;
  if (title.includes('design') || title.includes('pretty')) return Palette;
  if (title.includes('performance') || title.includes('speed')) return Zap;
  if (title.includes('shopify') || title.includes('store')) return ShoppingCart;
  if (title.includes('conversion') || title.includes('sell')) return TrendingUp;
  if (title.includes('mobile') || title.includes('responsive')) return Smartphone;
  if (title.includes('website') || title.includes('site')) return Globe;
  if (title.includes('tips') || title.includes('guide')) return Lightbulb;
  if (title.includes('launch') || title.includes('start')) return Rocket;
  
  // Default fallback
  return BookOpen;
}

function getPostEmoji(data) {
  const tags = data.tags || [];
  const title = data.title?.toLowerCase() || '';
  
  // Emoji mapping
  const emojiMap = {
    'seo': '🔍',
    'performance': '⚡',
    'design': '🎨',
    'shopify': '🛒',
    'conversion': '📈',
    'code': '💻',
    'mobile': '📱',
    'website': '🌐',
    'marketing': '🎯',
    'tips': '💡',
    'launch': '🚀',
    'love': '❤️',
    'featured': '⭐',
    'guide': '📖',
    'social': '💬'
  };
  
  // Check tags first
  for (const tag of tags) {
    if (emojiMap[tag.toLowerCase()]) {
      return emojiMap[tag.toLowerCase()];
    }
  }
  
  // Check title keywords
  if (title.includes('seo') || title.includes('ranking')) return '🔍';
  if (title.includes('design') || title.includes('pretty')) return '🎨';
  if (title.includes('performance') || title.includes('speed')) return '⚡';
  if (title.includes('shopify') || title.includes('store')) return '🛒';
  if (title.includes('conversion') || title.includes('sell')) return '📈';
  if (title.includes('mobile') || title.includes('responsive')) return '📱';
  if (title.includes('website') || title.includes('site')) return '🌐';
  if (title.includes('tips') || title.includes('guide')) return '💡';
  if (title.includes('launch') || title.includes('start')) return '🚀';
  
  // Default fallback
  return '📝';
}

function getPostBackgroundColors(data) {
  const tags = data.tags || [];
  const title = data.title?.toLowerCase() || '';
  
  // Color mapping based on tags
  const colorMap = {
    'seo': 'from-green-50 via-emerald-50 to-teal-50',
    'performance': 'from-orange-50 via-amber-50 to-yellow-50',
    'design': 'from-pink-50 via-rose-50 to-purple-50',
    'shopify': 'from-blue-50 via-indigo-50 to-purple-50',
    'conversion': 'from-red-50 via-pink-50 to-rose-50',
    'code': 'from-gray-50 via-slate-50 to-zinc-50',
    'mobile': 'from-cyan-50 via-sky-50 to-blue-50',
    'website': 'from-violet-50 via-purple-50 to-fuchsia-50',
    'marketing': 'from-emerald-50 via-green-50 to-lime-50',
    'tips': 'from-yellow-50 via-amber-50 to-orange-50',
    'launch': 'from-purple-50 via-violet-50 to-indigo-50',
    'love': 'from-red-50 via-pink-50 to-rose-50',
    'featured': 'from-yellow-50 via-amber-50 to-orange-50',
    'guide': 'from-blue-50 via-indigo-50 to-purple-50',
    'social': 'from-cyan-50 via-teal-50 to-emerald-50'
  };
  
  // Check tags first
  for (const tag of tags) {
    if (colorMap[tag.toLowerCase()]) {
      return colorMap[tag.toLowerCase()];
    }
  }
  
  // Check title keywords
  if (title.includes('seo') || title.includes('ranking')) return 'from-green-50 via-emerald-50 to-teal-50';
  if (title.includes('design') || title.includes('pretty')) return 'from-pink-50 via-rose-50 to-purple-50';
  if (title.includes('performance') || title.includes('speed')) return 'from-orange-50 via-amber-50 to-yellow-50';
  if (title.includes('shopify') || title.includes('store')) return 'from-blue-50 via-indigo-50 to-purple-50';
  if (title.includes('conversion') || title.includes('sell')) return 'from-red-50 via-pink-50 to-rose-50';
  if (title.includes('mobile') || title.includes('responsive')) return 'from-cyan-50 via-sky-50 to-blue-50';
  if (title.includes('website') || title.includes('site')) return 'from-violet-50 via-purple-50 to-fuchsia-50';
  if (title.includes('tips') || title.includes('guide')) return 'from-yellow-50 via-amber-50 to-orange-50';
  if (title.includes('launch') || title.includes('start')) return 'from-purple-50 via-violet-50 to-indigo-50';
  
  // Default fallback
  return 'from-pink-50 via-purple-50 to-yellow-50';
}

function getThemeColor(data, type, variant = 'bg') {
  const tags = data.tags || [];
  const title = data.title?.toLowerCase() || '';
  
  // Color mapping for animated elements
  const colorMap = {
    'seo': {
      primary: 'bg-green-400',
      secondary: 'bg-emerald-400', 
      accent: 'bg-teal-400',
      border: 'border-green-400'
    },
    'performance': {
      primary: 'bg-orange-400',
      secondary: 'bg-amber-400',
      accent: 'bg-yellow-400',
      border: 'border-orange-400'
    },
    'design': {
      primary: 'bg-pink-400',
      secondary: 'bg-rose-400',
      accent: 'bg-purple-400',
      border: 'border-pink-400'
    },
    'shopify': {
      primary: 'bg-blue-400',
      secondary: 'bg-indigo-400',
      accent: 'bg-purple-400',
      border: 'border-blue-400'
    },
    'conversion': {
      primary: 'bg-red-400',
      secondary: 'bg-pink-400',
      accent: 'bg-rose-400',
      border: 'border-red-400'
    },
    'code': {
      primary: 'bg-gray-400',
      secondary: 'bg-slate-400',
      accent: 'bg-zinc-400',
      border: 'border-gray-400'
    },
    'mobile': {
      primary: 'bg-cyan-400',
      secondary: 'bg-sky-400',
      accent: 'bg-blue-400',
      border: 'border-cyan-400'
    },
    'website': {
      primary: 'bg-violet-400',
      secondary: 'bg-purple-400',
      accent: 'bg-fuchsia-400',
      border: 'border-violet-400'
    },
    'marketing': {
      primary: 'bg-emerald-400',
      secondary: 'bg-green-400',
      accent: 'bg-lime-400',
      border: 'border-emerald-400'
    },
    'tips': {
      primary: 'bg-yellow-400',
      secondary: 'bg-amber-400',
      accent: 'bg-orange-400',
      border: 'border-yellow-400'
    },
    'launch': {
      primary: 'bg-purple-400',
      secondary: 'bg-violet-400',
      accent: 'bg-indigo-400',
      border: 'border-purple-400'
    },
    'love': {
      primary: 'bg-red-400',
      secondary: 'bg-pink-400',
      accent: 'bg-rose-400',
      border: 'border-red-400'
    },
    'featured': {
      primary: 'bg-yellow-400',
      secondary: 'bg-amber-400',
      accent: 'bg-orange-400',
      border: 'border-yellow-400'
    },
    'guide': {
      primary: 'bg-blue-400',
      secondary: 'bg-indigo-400',
      accent: 'bg-purple-400',
      border: 'border-blue-400'
    },
    'social': {
      primary: 'bg-cyan-400',
      secondary: 'bg-teal-400',
      accent: 'bg-emerald-400',
      border: 'border-cyan-400'
    }
  };
  
  // Check tags first
  for (const tag of tags) {
    if (colorMap[tag.toLowerCase()]) {
      return colorMap[tag.toLowerCase()][type];
    }
  }
  
  // Check title keywords
  if (title.includes('seo') || title.includes('ranking')) return colorMap.seo[type];
  if (title.includes('design') || title.includes('pretty')) return colorMap.design[type];
  if (title.includes('performance') || title.includes('speed')) return colorMap.performance[type];
  if (title.includes('shopify') || title.includes('store')) return colorMap.shopify[type];
  if (title.includes('conversion') || title.includes('sell')) return colorMap.conversion[type];
  if (title.includes('mobile') || title.includes('responsive')) return colorMap.mobile[type];
  if (title.includes('website') || title.includes('site')) return colorMap.website[type];
  if (title.includes('tips') || title.includes('guide')) return colorMap.tips[type];
  if (title.includes('launch') || title.includes('start')) return colorMap.launch[type];
  
  // Default fallback
  return colorMap.design[type];
}

export default function BlogIndex({ posts }) {
  return (
    <Layout>
      <SEO title="Blog" description="Articles from Moxie Themes" canonical="/blog" />
      <section className="px-6 py-16 max-w-4xl mx-auto text-charcoal" data-netlify-collection="git:posts" data-netlify-sidebar-shortcuts='[{"label":"New post","action":"create","collection":"git:posts"}]'>
        <h1 className="text-4xl md:text-5xl font-bold font-heading  mb-8">Blog</h1>
        {posts.length === 0 && (
          <p className="">No posts yet. Check back soon.</p>
        )}
        <ul className="space-y-8">
          {posts.map(({ data, content, filePath }, index) => {
            const slug = filePath.replace(/\.mdx?$/, '');
            const IconComponent = getPostIcon(data);
            const emoji = getPostEmoji(data);
            const backgroundColors = getPostBackgroundColors(data);
            const isEven = index % 2 === 0;
            
            return (
               <li key={filePath} className="pb-2" data-netlify-document={`git:posts/${slug}.mdx`}>
                 <Link href={`/blog/${slug}`} className="group block rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative">
                   <div className={`grid md:grid-cols-3 ${!isEven ? 'md:grid-flow-col-dense' : ''}`}>
                     <div className={`md:col-span-1 ${!isEven ? 'md:col-start-3' : ''}`}>
                       <div className={`h-full w-full bg-gradient-to-br ${backgroundColors} flex items-center justify-center relative overflow-hidden`}>
                         {/* Animated background patterns */}
                         <div className="absolute inset-0 opacity-20">
                           {/* Dynamic floating circles based on theme */}
                           <div className={`absolute top-2 left-2 w-4 h-4 rounded-full animate-float-custom ${getThemeColor(data, 'primary')}`} style={{animationDelay: '0s'}}></div>
                           <div className={`absolute top-6 right-3 w-3 h-3 rounded-full animate-float-custom ${getThemeColor(data, 'secondary')}`} style={{animationDelay: '0.5s'}}></div>
                           <div className={`absolute bottom-4 left-6 w-5 h-5 rounded-full animate-float-custom ${getThemeColor(data, 'accent')}`} style={{animationDelay: '1s'}}></div>
                           <div className={`absolute bottom-2 right-2 w-2 h-2 rounded-full animate-float-custom ${getThemeColor(data, 'primary')}`} style={{animationDelay: '1.5s'}}></div>
                           
                           {/* Dynamic floating squares */}
                           <div className={`absolute top-8 left-8 w-3 h-3 rotate-45 animate-pulse ${getThemeColor(data, 'secondary')}`} style={{animationDelay: '0.3s'}}></div>
                           <div className={`absolute bottom-8 right-8 w-4 h-4 rotate-45 animate-pulse ${getThemeColor(data, 'accent')}`} style={{animationDelay: '0.8s'}}></div>
                           
                           {/* Dynamic floating triangles */}
                           <div className={`absolute top-4 right-6 w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent animate-ping ${getThemeColor(data, 'primary', 'border')}`} style={{animationDelay: '0.2s'}}></div>
                           <div className={`absolute bottom-6 left-4 w-0 h-0 border-l-2 border-r-2 border-b-3 border-l-transparent border-r-transparent animate-ping ${getThemeColor(data, 'secondary', 'border')}`} style={{animationDelay: '1.2s'}}></div>
                           
                           {/* Dynamic sparkle effects */}
                           <div className={`absolute top-3 left-1/2 w-1 h-1 rounded-full animate-sparkle ${getThemeColor(data, 'accent')}`} style={{animationDelay: '0.4s'}}></div>
                           <div className={`absolute bottom-3 right-1/3 w-1 h-1 rounded-full animate-sparkle ${getThemeColor(data, 'primary')}`} style={{animationDelay: '0.9s'}}></div>
                           <div className={`absolute top-1/2 left-3 w-1 h-1 rounded-full animate-sparkle ${getThemeColor(data, 'secondary')}`} style={{animationDelay: '1.4s'}}></div>
                           
                           {/* Wavy lines */}
                           <div className="absolute top-0 left-0 w-full h-full">
                             <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                               <path d="M0,20 Q25,5 50,20 T100,20" stroke="url(#gradient1)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                               <path d="M0,80 Q25,65 50,80 T100,80" stroke="url(#gradient2)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{animationDelay: '1.1s'}}/>
                               <defs>
                                 <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                   <stop offset="0%" stopColor="#ec4899" />
                                   <stop offset="100%" stopColor="#8b5cf6" />
                                 </linearGradient>
                                 <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                   <stop offset="0%" stopColor="#8b5cf6" />
                                   <stop offset="100%" stopColor="#eab308" />
                                 </linearGradient>
                               </defs>
                             </svg>
                           </div>
                         </div>
                         
                         {/* Icon/Emoji Display */}
                         <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
                           {/* Large emoji with enhanced effects */}
                           <div className="text-6xl md:text-7xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative">
                             <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                             <div className="relative z-10">{emoji}</div>
                           </div>
                          
                           
                           {/* Floating mini emojis around main emoji */}
                           <div className="absolute top-2 left-2 text-lg opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 animate-wiggle" style={{animationDelay: '0.2s'}}>
                             ✨
                           </div>
                           <div className="absolute top-2 right-2 text-lg opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 animate-wiggle" style={{animationDelay: '0.4s'}}>
                             💫
                           </div>
                           <div className="absolute bottom-2 left-2 text-lg opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 animate-wiggle" style={{animationDelay: '0.6s'}}>
                             🌟
                           </div>
                         </div>
                         
                         {/* Enhanced hover effect overlay */}
                         <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 via-purple-400/20 to-yellow-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                         
                         {/* Animated border on hover */}
                         <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-300/50 rounded-lg transition-all duration-500"></div>
                       </div>
                     </div>
                     <div className={`md:col-span-2 p-6 ${!isEven ? 'md:col-start-1' : ''}`}>
                       <div className="flex flex-wrap items-center gap-3 text-sm text-charcoal/70">
                         {data.date && (
                           <span data-netlify-field="date">{new Date(data.date).toLocaleDateString()}</span>
                         )}
                         <span aria-hidden>•</span>
                         <span>{getReadingTime(content)}</span>
                       </div>
                       <h2 className="mt-2 text-2xl md:text-3xl font-bold text-charcoal group-hover:text-pink transition-colors" data-netlify-field="title">{data.title}</h2>
                       {data.description && (
                         <p className="mt-3 text-charcoal/80" data-netlify-field="description">{data.description}</p>
                       )}
                       {data.tags && Array.isArray(data.tags) && (
                         <div className="mt-4 flex flex-wrap gap-2">
                           {data.tags.map((tag) => (
                             <span key={tag} className="text-xs rounded-full border border-charcoal/10 px-3 py-1 text-charcoal/80" data-netlify-field="tags">{tag}</span>
                           ))}
                         </div>
                       )}
                     </div>
                   </div>
                 </Link>
               </li>
            );
          })}
        </ul>
      </section>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-5px) rotate(-3deg); }
          75% { transform: translateY(-15px) rotate(2deg); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(236, 72, 153, 0.3); }
          50% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.6), 0 0 30px rgba(139, 92, 246, 0.4); }
        }
        
        .animate-float-custom {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .group:hover .animate-float-custom {
          animation-duration: 2s;
        }
        
        .group:hover .animate-sparkle {
          animation-duration: 1s;
        }
      `}</style>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();
  return { props: { posts, globalData } };
}


