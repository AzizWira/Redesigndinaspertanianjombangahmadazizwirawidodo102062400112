import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import svgPaths from "../imports/svg-3teut0pqba";
import { ServicePopup } from "./ServicePopup";

export function PublicServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [showPopup, setShowPopup] = useState(false);

  const services = [
    {
      title: "Administrasi Kependudukan",
      description: "Akses lebih mudah informasi seputar urusan administrasi dan data kependudukan anda"
    },
    {
      title: "Administrasi Kependudukan",
      description: "Akses lebih mudah informasi seputar urusan administrasi dan data kependudukan anda"
    },
    {
      title: "Administrasi Kependudukan",
      description: "Akses lebih mudah informasi seputar urusan administrasi dan data kependudukan anda"
    },
    {
      title: "Administrasi Kependudukan",
      description: "Akses lebih mudah informasi seputar urusan administrasi dan data kependudukan anda"
    }
  ];

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-800 relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)] shrink-0 w-full transition-colors duration-300"
      >
        <div className="flex flex-row justify-center size-full">
          <div className="box-border content-stretch flex flex-col lg:flex-row gap-[20px] items-start justify-center px-[20px] md:px-[30px] py-[37px] relative w-full">
            {/* Left Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="basis-0 content-stretch flex flex-col gap-[31px] grow items-start min-h-px min-w-px"
            >
              <div className="content-stretch flex flex-col gap-[7px] items-start not-italic w-full">
                <p className="font-['Poppins:Bold',sans-serif] leading-[38px] text-[#039855] dark:text-[#04b866] text-[30px] transition-colors duration-300">
                  Layanan Publik
                </p>
                <p className="font-['Poppins:Medium',sans-serif] leading-[20px] text-[#1f1f1f] dark:text-gray-300 text-[14px] transition-colors duration-300">
                  Temukan informasi penting tentang pendidikan, kesehatan, dan lainnya, serta dapatkan panduan berguna untuk setiap tahapan kehidupan Anda.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPopup(true)}
                className="bg-[#039855] dark:bg-[#027a43] box-border content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[8px] rounded-[39px] hover:bg-[#027a43] dark:hover:bg-[#016532] transition-colors duration-300"
              >
                <p className="font-['Poppins:Medium',sans-serif] leading-[30px] not-italic text-[20px] text-center text-nowrap text-white whitespace-pre">
                  Cek Pelayanan Lainnya
                </p>
              </motion.button>
            </motion.div>

            <div className="bg-[rgba(31,31,31,0.3)] dark:bg-[rgba(255,255,255,0.3)] self-stretch shrink-0 w-[2px] hidden lg:block transition-colors duration-300" />

            {/* Right Section - Services Grid */}
            <div className="content-stretch flex flex-col gap-[27px] items-start self-stretch shrink-0 w-full lg:w-auto">
              {[0, 1].map((rowIndex) => (
                <div key={rowIndex} className="content-stretch flex flex-col md:flex-row gap-[27px] items-center justify-center w-full">
                  {services.slice(rowIndex * 2, rowIndex * 2 + 2).map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 50, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + (rowIndex * 2 + index) * 0.1 }}
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0px 8px 16px rgba(3, 152, 85, 0.2)",
                        y: -5
                      }}
                      className="box-border content-stretch flex gap-[23px] items-start px-[12px] py-[11px] rounded-[11px] shrink-0 w-full md:w-[348px] border border-[rgba(31,31,31,0.18)] dark:border-[rgba(255,255,255,0.18)] bg-white dark:bg-gray-700 cursor-pointer transition-colors duration-300"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#039855] dark:bg-[#027a43] box-border content-stretch flex gap-[10px] items-center p-[10px] rounded-[7px] shrink-0 transition-colors duration-300"
                      >
                        <div className="relative shrink-0 size-[31px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
                            <path clipRule="evenodd" d={svgPaths.p1a524ac0} fill="white" fillRule="evenodd" />
                          </svg>
                        </div>
                      </motion.div>
                      <div className="basis-0 content-stretch flex flex-col gap-[3px] grow min-h-px min-w-px not-italic">
                        <p className="font-['Poppins:Bold',sans-serif] leading-[28px] text-[#1f1f1f] dark:text-white text-[18px] transition-colors duration-300">
                          {service.title}
                        </p>
                        <p className="font-['Poppins:Regular',sans-serif] leading-[20px] text-[14px] text-[rgba(31,31,31,0.63)] dark:text-gray-400 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Service Popup */}
      <ServicePopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </>
  );
}