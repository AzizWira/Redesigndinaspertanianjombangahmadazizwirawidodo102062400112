import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { useDarkMode } from '../App';
import svgPaths from "../imports/svg-3teut0pqba";

const services = [
  { title: 'Administrasi Kependudukan', desc: 'Akses lebih mudah informasi seputar urusan administrasi dan data kependudukan anda' },
  { title: 'Administrasi Kependudukan', desc: 'Akses lebih mudah informasi seputar urusan administrasi dan data kependudukan anda' },
  { title: 'Administrasi Kependudukan', desc: 'Akses lebih mudah informasi seputar urusan administrasi dan data kependudukan anda' },
  { title: 'Administrasi Kependudukan', desc: 'Akses lebih mudah informasi seputar urusan administrasi dan data kependudukan anda' },
];

function ServiceCard({ title, desc, index }: { title: string; desc: string; index: number }) {
  const { isDarkMode } = useDarkMode();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`flex gap-[23px] items-start px-[12px] py-[11px] rounded-[11px] border transition-all duration-300 ${
        isDarkMode 
          ? 'bg-[#1a1a1a] border-[rgba(255,255,255,0.18)] hover:border-[#4a9eff]' 
          : 'bg-white border-[rgba(31,31,31,0.18)] hover:border-[#039855]'
      } cursor-pointer`}
    >
      <motion.div 
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="bg-[#039855] p-[10px] rounded-[7px] shrink-0"
      >
        <svg className="block size-[31px]" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
          <path clipRule="evenodd" d={svgPaths.p1a524ac0} fill="white" fillRule="evenodd" />
        </svg>
      </motion.div>
      <div className="flex-1">
        <p className={`font-['Poppins'] font-bold text-[18px] leading-[28px] mb-[3px] ${
          isDarkMode ? 'text-white' : 'text-[#1f1f1f]'
        }`}>
          {title}
        </p>
        <p className={`font-['Poppins'] text-[14px] leading-[20px] ${
          isDarkMode ? 'text-gray-400' : 'text-[rgba(31,31,31,0.63)]'
        }`}>
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export function LayananPublik() {
  const { isDarkMode } = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-[73px] mb-[73px]"
    >
      <div className={`${
        isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white'
      } rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)] p-[30px_30px_37px_30px] transition-colors duration-300`}>
        <div className="flex gap-[20px] max-lg:flex-col">
          {/* Left Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col gap-[31px]"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`font-['Poppins'] font-bold text-[30px] leading-[38px] mb-[7px] ${
                  isDarkMode ? 'text-[#4a9eff]' : 'text-[#039855]'
                }`}
              >
                Layanan Publik
              </motion.h2>
              <p className={`font-['Poppins'] font-medium text-[14px] leading-[20px] ${
                isDarkMode ? 'text-gray-400' : 'text-[#1f1f1f]'
              }`}>
                Temukan informasi penting tentang pendidikan, kesehatan, dan lainnya, serta dapatkan panduan berguna untuk setiap tahapan kehidupan Anda.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(3, 152, 85, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#039855] px-[32px] py-[8px] rounded-[39px] font-['Poppins'] font-medium text-[20px] text-white self-start transition-all duration-300"
            >
              Cek Pelayanan Lainnya
            </motion.button>
          </motion.div>

          <div className={`w-[2px] ${isDarkMode ? 'bg-[rgba(255,255,255,0.3)]' : 'bg-[rgba(31,31,31,0.3)]'} max-lg:hidden`} />

          {/* Right Section - Services Grid */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="grid grid-cols-2 gap-[27px] max-md:grid-cols-1">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
