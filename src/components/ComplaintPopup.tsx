import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

interface ComplaintData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface ComplaintPopupProps {
  isOpen: boolean;
  onClose: () => void;
  complaintData: ComplaintData | null;
}

export function ComplaintPopup({ isOpen, onClose, complaintData }: ComplaintPopupProps) {
  // Auto close after 5 seconds
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!complaintData) return null;

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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="fixed top-[100px] left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[550px] max-h-[80vh] overflow-y-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-[16px] shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Header */}
              <div className="relative px-[24px] py-[20px] bg-gradient-to-r from-[#039855] to-[#027a43] dark:from-[#027a43] dark:to-[#016532]">
                <div className="flex items-center gap-[12px]">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
                  >
                    <CheckCircle2 className="w-[36px] h-[36px] text-white" strokeWidth={2.5} />
                  </motion.div>
                  <div>
                    <h3 className="font-['Poppins:Bold',sans-serif] text-[22px] text-white">
                      Terima Kasih!
                    </h3>
                    <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-white/90">
                      Aduan Anda Telah Diterima
                    </p>
                  </div>
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
                  className="space-y-[16px]"
                >
                  <p className="font-['Poppins:Medium',sans-serif] text-[15px] text-[#6b7280] dark:text-gray-400">
                    Kami akan menindaklanjuti aduan Anda sesegera mungkin. Berikut adalah detail aduan yang telah Anda kirimkan:
                  </p>

                  {/* Detail Aduan */}
                  <div className="bg-[#f9f9f9] dark:bg-gray-700/50 rounded-[12px] p-[20px] space-y-[14px] border border-gray-200 dark:border-gray-600">
                    {/* Nama Lengkap */}
                    <div className="border-b border-gray-200 dark:border-gray-600 pb-[12px]">
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#6b7280] dark:text-gray-400 mb-[4px]">
                        Nama Lengkap
                      </p>
                      <p className="font-['Poppins:Medium',sans-serif] text-[15px] text-[#1f1f1f] dark:text-white">
                        {complaintData.firstName} {complaintData.lastName}
                      </p>
                    </div>

                    {/* Email */}
                    <div className="border-b border-gray-200 dark:border-gray-600 pb-[12px]">
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#6b7280] dark:text-gray-400 mb-[4px]">
                        Email
                      </p>
                      <p className="font-['Poppins:Medium',sans-serif] text-[15px] text-[#1f1f1f] dark:text-white break-all">
                        {complaintData.email}
                      </p>
                    </div>

                    {/* Nomor Telepon */}
                    <div className="border-b border-gray-200 dark:border-gray-600 pb-[12px]">
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#6b7280] dark:text-gray-400 mb-[4px]">
                        Nomor Telepon
                      </p>
                      <p className="font-['Poppins:Medium',sans-serif] text-[15px] text-[#1f1f1f] dark:text-white">
                        {complaintData.phone}
                      </p>
                    </div>

                    {/* Isi Aduan */}
                    <div>
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#6b7280] dark:text-gray-400 mb-[4px]">
                        Isi Aduan
                      </p>
                      <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-[#1f1f1f] dark:text-white leading-[24px]">
                        {complaintData.message}
                      </p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-[8px] p-[12px]">
                    <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-green-800 dark:text-green-300">
                      💚 Tim kami akan segera menghubungi Anda melalui email atau telepon untuk tindak lanjut aduan ini.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Progress Bar */}
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-[3px] origin-left bg-[#039855] dark:bg-[#04b866]"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
