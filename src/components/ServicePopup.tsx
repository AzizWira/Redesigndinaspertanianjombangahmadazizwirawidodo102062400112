import { motion, AnimatePresence } from "motion/react";
import { X, Info } from "lucide-react";
import { useEffect } from "react";

interface ServicePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ServicePopup({ isOpen, onClose }: ServicePopupProps) {
  // Auto close after 3 seconds
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="fixed top-[120px] left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[450px]"
          >
            <div className="bg-white dark:bg-gray-800 rounded-[16px] shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Header */}
              <div className="relative px-[24px] py-[20px] bg-gradient-to-r from-[#0284c7] to-[#0369a1] dark:from-[#0369a1] dark:to-[#075985]">
                <div className="flex items-center gap-[12px]">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1, duration: 0.4, type: "spring" }}
                  >
                    <Info className="w-[32px] h-[32px] text-white" strokeWidth={2.5} />
                  </motion.div>
                  <h3 className="font-['Poppins:Bold',sans-serif] text-[20px] text-white">
                    Informasi
                  </h3>
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-[16px] right-[16px] w-[32px] h-[32px] bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <X className="w-[18px] h-[18px] text-white group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Content */}
              <div className="px-[24px] py-[24px]">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#1f1f1f] dark:text-white mb-[8px]">
                    Tidak Ditemukan Layanan Lainnya
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#6b7280] dark:text-gray-400">
                    Saat ini belum ada layanan publik lainnya yang tersedia. Silakan cek kembali nanti.
                  </p>
                </motion.div>
              </div>

              {/* Progress Bar */}
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 3, ease: "linear" }}
                className="h-[3px] origin-left bg-[#0284c7] dark:bg-[#0ea5e9]"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
