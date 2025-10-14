import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsTransitioning(true);
    };

    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1200); // Match the wave animation duration
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <>
      <span className="theme-bejamas" />
      
      {/* Purple Wave Transition */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            exit={{ x: '100%' }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="fixed inset-0 z-100 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #8B5CF6 50%, transparent 100%)',
              clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
            }}
          />
        )}
      </AnimatePresence>

      {/* Page Content */}
      <motion.div
        key={router.asPath}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.4
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </>
  );
}

export default MyApp;
