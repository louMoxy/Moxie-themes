import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary', 
  className = '',
  onClick,
  ...props 
}) {
  const baseClasses = "relative px-8 py-4 rounded-lg font-bold font-body text-lg transition-all duration-300 inline-block overflow-hidden group";
  
  const variantClasses = {
    primary: "bg-purple text-white border-2 border-purple hover:bg-white hover:text-purple",
    secondary: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const ButtonContent = (
    <>
      {/* Animated background element */}
      <motion.div
        className={`absolute left-0 top-0 w-6 h-full rounded-r-full transform -translate-x-full scale-x-0 group-hover:translate-x-0 group-hover:scale-x-150 transition-all duration-300 ease-out ${
          variant === 'primary' ? 'bg-purple/20' : 'bg-white/20'
        }`}
        style={{ transformOrigin: "left center" }}
      />
      
      {/* Arrow icon */}
      <motion.span
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 -translate-x-2 text-sm font-bold opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-100 ${
          variant === 'primary' ? 'text-purple' : 'text-white'
        }`}
      >
        <ChevronRight />
      </motion.span>
      
      {/* Button text */}
      <motion.span
        className="relative z-10 block group-hover:translate-x-2 transition-transform duration-300"
      >
        {children}
      </motion.span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {ButtonContent}
      </Link>
    );
  }

  return (
    <button 
      className={buttonClasses} 
      onClick={onClick}
      {...props}
    >
      {ButtonContent}
    </button>
  );
}
