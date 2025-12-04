import { motion, useScroll, useSpring } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#039855] dark:bg-[#04b866] origin-left z-[9999] transition-colors duration-300"
        style={{ scaleX }}
      />

      {/* Back to Top Button */}
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ 
            duration: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          whileHover={{ 
            scale: 1.15,
            rotate: 360,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[9998] w-[56px] h-[56px] rounded-full bg-[#039855] dark:bg-[#027a43] hover:bg-[#027a43] dark:hover:bg-[#039855] shadow-lg hover:shadow-2xl flex items-center justify-center cursor-pointer transition-colors duration-300 group"
          aria-label="Back to top"
        >
          {/* Ripple Effect Background */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white/20"
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ 
              scale: [1, 1.5, 2],
              opacity: [0.8, 0.4, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
          
          {/* Icon */}
          <motion.div
            animate={{ 
              y: [0, -3, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowUp className="w-[24px] h-[24px] text-white relative z-10" strokeWidth={2.5} />
          </motion.div>

          {/* Glow Effect on Hover */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </motion.button>
      )}
    </>
  );
}
