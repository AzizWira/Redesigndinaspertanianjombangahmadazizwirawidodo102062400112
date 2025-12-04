import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, Leaf } from "lucide-react";

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WelcomePopup({ isOpen, onClose }: WelcomePopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, type: "spring", damping: 25 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-[500px]"
          >
            <div className="bg-white dark:bg-gray-800 rounded-[24px] shadow-2xl overflow-hidden border-2 border-[#039855] dark:border-[#027a43]">
              {/* Header with Gradient */}
              <div className="relative h-[180px] bg-gradient-to-br from-[#039855] to-[#027a43] dark:from-[#027a43] dark:to-[#015c32] overflow-hidden">
                {/* Decorative Elements */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-10 -right-10 w-[150px] h-[150px] bg-white/10 rounded-full blur-xl"
                />
                <motion.div
                  animate={{ 
                    rotate: [360, 0],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ 
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-10 -left-10 w-[120px] h-[120px] bg-white/10 rounded-full blur-xl"
                />

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.2,
                      duration: 0.6,
                      type: "spring",
                      damping: 15
                    }}
                    className="relative"
                  >
                    <div className="w-[80px] h-[80px] bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                      <Leaf className="w-[40px] h-[40px] text-[#039855]" />
                    </div>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -top-2 -right-2"
                    >
                      <Sparkles className="w-[24px] h-[24px] text-yellow-300" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-[16px] right-[16px] w-[36px] h-[36px] bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <X className="w-[20px] h-[20px] text-white group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Content */}
              <div className="p-[32px] text-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h2 className="font-['Poppins:Bold',sans-serif] text-[28px] text-[#1f1f1f] dark:text-white mb-[12px]">
                    Selamat Datang! 👋
                  </h2>
                  <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#039855] dark:text-[#10b981] mb-[16px]">
                    Dinas Pertanian Kabupaten Jombang
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-[#6b7280] dark:text-gray-400 leading-relaxed mb-[24px]">
                    Terima kasih telah mengunjungi website kami. Temukan informasi terkini seputar pertanian, program unggulan, dan inovasi untuk kemajuan pertanian Jombang.
                  </p>
                  
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="w-full bg-gradient-to-r from-[#039855] to-[#027a43] hover:from-[#027a43] hover:to-[#015c32] dark:from-[#027a43] dark:to-[#015c32] dark:hover:from-[#039855] dark:hover:to-[#027a43] text-white font-['Poppins:SemiBold',sans-serif] text-[16px] px-[32px] py-[14px] rounded-[12px] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Jelajahi Website
                  </motion.button>
                </motion.div>
              </div>

              {/* Bottom Decoration */}
              <div className="h-[4px] bg-gradient-to-r from-[#039855] via-[#10b981] to-[#039855]" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
