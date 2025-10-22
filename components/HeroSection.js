import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import CTAButton from './CTAButton';


const content = [
  {
    title: 'Websites that don\'t just sit there — they bloody work',
    subtitle: 'I build SEO-optimised Shopify themes and fully custom, editable websites for small businesses who want to look great and grow.',
    cta: 'Shop Templates',
    ctaLink: '/templates/y2k-theme',
    cta2: 'Lets Chat',
    cta2Link: '/contact',
  },
  {
    title: 'Shopify Templates With Bite',
    subtitle: 'Unique, fast, and SEO-friendly themes for small businesses who want more than the same old Shopify look..',
    cta: 'Shop Templates',
    ctaLink: '/templates/y2k-theme'
  },
  {
    title: 'SEO Audits — No Jargon, No Fluff',
    subtitle: 'A clear, no-nonsense report that shows what\'s broken, what\'s holding you back, and how to fix it.',
    cta: 'Book an SEO Audit',
    ctaLink: '/contact',
  },
]

const terminalContent = {
  0: [ // Default tab
    'moxie@themes:~$ booting up...',
    '✓ Shopify templates loaded',
    '✓ SEO toolkit initialised',
    '💬 Note: pretty sites are nice, but profitable ones are better.',
    '🚀 Ready to build something that actually bloody works?'
  ],
  1: [ // Shopify tab
    'moxie@themes:~$ loading template assets...',
    '🎨 injecting style...',
    '⚡ optimising code for speed...',
    '💅 applying ✨ personality ✨',
    '🛒 Done. Your Shopify store just got a glow-up.'
  ],
  2: [ // SEO tab
    'moxie@themes:~$ scanning site for sins...',
    '🔎 Broken links detected',
    '🐢 Slow pages found',
    '🤖 Missing metadata (again)',
    '📈 Fixes queued → visibility upgrade incoming',
    '💬 Tip: Google rewards the graft, not the guesswork.'
  ]
};

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [tabPositions, setTabPositions] = useState([]);
  const [terminalText, setTerminalText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const heroRef = useRef(null);
  const tabRefs = useRef([]);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      // Clamp values to stay within bounds
      const clampedX = Math.max(0, Math.min(100, x));
      const clampedY = Math.max(0, Math.min(100, y));
      
      setMousePosition({ x: clampedX, y: clampedY });
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Calculate tab positions
  useEffect(() => {
    if (tabRefs.current.length > 0) {
      const positions = tabRefs.current.map((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const containerRect = ref.parentElement.getBoundingClientRect();
          return {
            left: rect.left - containerRect.left,
            width: rect.width
          };
        }
        return { left: 0, width: 0 };
      });
      setTabPositions(positions);
    }
  }, [activeTab, isClient]);

  // Typewriter effect for terminal
  useEffect(() => {
    if (!isClient) return;

    const currentTerminalLines = terminalContent[activeTab] || terminalContent[0];
    
    let timeout;
    const typeNextChar = () => {
      if (currentLine < currentTerminalLines.length) {
        const currentLineText = currentTerminalLines[currentLine];
        if (terminalText.length < currentLineText.length) {
          setTerminalText(currentLineText.slice(0, terminalText.length + 1));
          timeout = setTimeout(typeNextChar, Math.random() * 10 + 50);
        } else {
          // Move to next line after a pause
          timeout = setTimeout(() => {
            setCurrentLine(prev => prev + 1);
            setTerminalText('');
          }, 1000);
        }
      } else {
        // Restart the sequence
        timeout = setTimeout(() => {
          setCurrentLine(0);
          setTerminalText('');
        }, 3000);
      }
    };

    timeout = setTimeout(typeNextChar, 100);
    return () => clearTimeout(timeout);
  }, [isClient, currentLine, terminalText, activeTab]);

  // Reset terminal when tab changes
  useEffect(() => {
    setCurrentLine(0);
    setTerminalText('');
  }, [activeTab]);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center px-2 py-2 overflow-hidden md:cursor-none">
      {/* Mobile animated gradient background */}
      <div className="absolute inset-0 md:hidden mobile-gradient-bg" />
      
      {/* Desktop Conic Gradient Background with Mouse Tracking */}
      {isClient ? (
        <motion.div 
          className="absolute inset-0 hidden md:block"
          style={{
            background: `conic-gradient(from 0deg at ${mousePosition.x}% ${mousePosition.y}%, 
              #f15bb5 0deg, 
              #FEE440 90deg, 
              #f15bb5 180deg, 
              #FEE440 270deg, 
              #f15bb5 360deg)`,
          }}
        />
      ) : (
        <div 
          className="absolute inset-0 hidden md:block bg-gradient-to-br from-yellow via-yellow/80 to-teal"
        />
      )}
      
      
      {/* Main Content in a Fake Desktop/Browser Window (desktop only) */}
      <motion.div 
        className="hidden md:block relative z-10 w-full max-w-2xl cursor-grab active:cursor-grabbing ml-8"
        drag
        dragMomentum={false}
        dragElastic={1}
        dragConstraints={{
          top: -300,
          left: -50,
          right: 400, // change dependent on screen size
          bottom: 300
        }}
      >
        <div className="bg-white/50 backdrop-blur-2xl backdrop-saturate-150 border border-white/30 rounded-2xl shadow-2xl overflow-hidden">
          {/* Browser top bar */}
            <div className="flex items-center justify-between gap-2 pr-4 bg-charcoal/5 border-b border-black/10 relative">
              <div className="hidden md:flex items-center gap-2 text-xs relative">
                {content.map((item, index) => (
                  <button
                    key={index}
                    ref={(el) => (tabRefs.current[index] = el)}
                    onClick={() => setActiveTab(index)}
                    className={`px-3 py-2 rounded-t-lg transition-all duration-200 relative ${
                      activeTab === index
                        ? 'bg-white/80 text-charcoal shadow-sm'
                        : 'bg-charcoal/5 text-charcoal/60 hover:bg-charcoal/10 hover:text-charcoal/80'
                    }`}
                  >
                    {index === 0 && 'Websites That Don\'t Just Sit There'}
                    {index === 1 && 'Shopify, But Make It Sexy'}
                    {index === 2 && 'The SEO Reality Check'}
                  </button>
                ))}
                {/* Sliding purple indicator */}
                {tabPositions.length > 0 && tabPositions[activeTab] && (
                  <motion.div
                    className="absolute bottom-0 h-0.5 bg-purple rounded-full z-20"
                    initial={false}
                    animate={{
                      x: tabPositions[activeTab].left,
                      width: tabPositions[activeTab].width
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />
                )}
                </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
                <span className="w-3 h-3 rounded-full bg-[#28C840]"></span>
              </div>
          </div>
          {/* Window content */}
          <div className="p-6 md:p-8">
            {/* Dynamic Content Based on Active Tab */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Headline - Left Aligned */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-charcoal mb-6 leading-tight text-left">
                {content[activeTab].title}
              </h1>
              {/* Subhead - Left Aligned */}
              <p className="text-base md:text-lg font-body text-charcoal/80 mb-8 leading-relaxed text-left max-w-xl">
                {content[activeTab].subtitle}
              </p>
              {/* CTA Buttons - Left Aligned */}
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  href={content[activeTab].ctaLink}
                  variant="primary"
                >
                  {content[activeTab].cta}
                </CTAButton>
                {content[activeTab].cta2 && (
                  <CTAButton 
                    href={content[activeTab].cta2Link}
                    variant="secondary"
                  >
                    {content[activeTab].cta2}
                  </CTAButton>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Simplified mobile content */}
      <div className="block md:hidden relative z-10 w-full max-w-xl mx-auto">
        <div className="bg-white/50 backdrop-blur-lg backdrop-saturate-150 border border-white/40 rounded-2xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold font-heading text-charcoal mb-4 leading-tight text-left">
            {content[0].title}
          </h1>
          <p className="text-base font-body text-charcoal/80 mb-8 leading-relaxed text-left">
            {content[0].subtitle}
          </p>
          <div className="flex flex-col gap-4">
            <CTAButton href={content[0].ctaLink} variant="primary">
              {content[0].cta}
            </CTAButton>
            {content[0].cta2 && (
              <CTAButton href={content[0].cta2Link} variant="secondary">
                {content[0].cta2}
              </CTAButton>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom Terminal (desktop only) */}
      <motion.div 
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 w-100 h-80 cursor-grab active:cursor-grabbing"
        drag
        dragMomentum={false}
        dragElastic={1}
        dragConstraints={{
          top: -400,
          left: -100,
          right: 900, // change dependent on screen size
          bottom: 400
        }}
        initial={{ x: "40%", y: 0 }}
      >
        <div className="bg-black/90 border border-green-400/30 rounded-lg shadow-2xl backdrop-blur-sm overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/50 border-b border-green-400/20">
            <div className="text-green-400/60 text-xs font-mono">terminal@moxie:~$</div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-4 h-64 overflow-hidden">
            <div className="font-mono text-sm text-green-400 leading-relaxed">
              {/* Previous lines */}
              {(terminalContent[activeTab] || terminalContent[0]).slice(0, currentLine).map((line, index) => (
                <div key={index} className="mb-1">
                  {line}
                </div>
              ))}
              
              {/* Current typing line */}
              {currentLine < (terminalContent[activeTab] || terminalContent[0]).length && (
                <div className="mb-1">
                  {terminalText}
                  <span className="animate-pulse text-green-300">_</span>
                </div>
              )}
              
              {/* Cursor blink effect */}
              <div className="text-green-300 animate-pulse">█</div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Mobile animated gradient styles */}
      <style jsx>{`
        .mobile-gradient-bg {
          background: linear-gradient(-45deg, #f15bb5, #FEE440, #00F5D4, #f15bb5, #FEE440);
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
