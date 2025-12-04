import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDarkMode } from '../App';
import imgRectangle3 from "figma:asset/5cf78afa087d9db08ea65d873c8d433d7e2c189d.png";

const weekDays = [
  { day: 'Min', date: '16', active: false, color: '#ff383c' },
  { day: 'Sen', date: '17', active: true, color: '#FFDD00' },
  { day: 'Sel', date: '18', active: false, color: '#039855' },
  { day: 'Rab', date: '19', active: false, color: '#039855' },
  { day: 'Kam', date: '20', active: false, color: '#039855' },
  { day: 'Jum', date: '21', active: false, color: 'transparent' },
  { day: 'Sab', date: '22', active: false, color: 'transparent' },
];

function DayCard({ day, date, active, color, index }: { day: string; date: string; active: boolean; color: string; index: number }) {
  const { isDarkMode } = useDarkMode();
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`flex flex-col items-center px-[9px] py-[5px] rounded-[9px] w-[47px] cursor-pointer transition-all duration-300 ${
        active 
          ? 'bg-[#039855] text-white shadow-lg' 
          : isDarkMode 
            ? 'bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]' 
            : 'bg-white hover:bg-gray-100'
      }`}
    >
      <div className="size-[6px] mb-1">
        {color !== 'transparent' && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + index * 0.05, type: "spring" }}
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill={color} r="3" />
            </svg>
          </motion.div>
        )}
      </div>
      <p className={`font-['Poppins'] font-medium text-[16px] leading-[24px] ${
        active ? 'text-white' : day === 'Min' && !active ? 'text-[#ff383c]' : isDarkMode ? 'text-white' : 'text-[#1f1f1f]'
      }`}>
        {day}
      </p>
      <p className={`font-['Poppins'] font-medium text-[18px] leading-[28px] ${
        active ? 'text-white' : day === 'Min' && !active ? 'text-[#ff383c]' : isDarkMode ? 'text-white' : 'text-[#1f1f1f]'
      }`}>
        {date}
      </p>
    </motion.div>
  );
}

export function AgendaDinas() {
  const { isDarkMode } = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-[73px]"
    >
      <div className="flex gap-[20px] max-lg:flex-col">
        {/* Left - Event Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="w-[796px] max-lg:w-full h-[445px] rounded-[23px] relative overflow-hidden cursor-pointer group"
        >
          <img 
            alt="Pertemuan Petani Indonesia" 
            className="absolute inset-0 w-full h-full object-cover rounded-[19px] transition-transform duration-500 group-hover:scale-110" 
            src={imgRectangle3} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-[36px_36px_24px_36px]"
          >
            <div className="text-white mb-[28px]">
              <h3 className="font-['Poppins'] font-bold text-[30px] leading-[38px] mb-2">
                Pertemuan Petani Indonesia
              </h3>
              <p className="font-['Poppins'] font-medium text-[16px] leading-[24px]">
                07.00 - 12.00 | Jumat, 22 November 2025
              </p>
            </div>
            
            <div className="flex gap-[14px]">
              {['Pertanian', 'Inovasi'].map((tag, i) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                  className="px-[14px] py-[7px] rounded-[5px] bg-[rgba(0,0,0,0)] border border-white/30 transition-all duration-200"
                >
                  <span className="font-['Poppins'] text-[18px] text-white">{tag}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Calendar & Event Info */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col gap-[16px]"
        >
          {/* Calendar Card */}
          <div className={`${
            isDarkMode ? 'bg-[#1a1a1a] border-[rgba(255,255,255,0.23)]' : 'bg-white border-[rgba(0,0,0,0.23)]'
          } border rounded-[11px] p-[25px] transition-colors duration-300`}>
            <div className="mb-[22px]">
              <h3 className={`font-['Poppins'] font-bold text-[24px] leading-[32px] mb-[6px] ${
                isDarkMode ? 'text-white' : 'text-[#1f1f1f]'
              }`}>
                Agenda Desa Jombang
              </h3>
              <p className={`font-['Poppins'] text-[16px] leading-[24px] ${
                isDarkMode ? 'text-gray-400' : 'text-[#1f1f1f]'
              }`}>
                Dapatkan informasi terkait semua kegiatan yang dilakukan di Jawa Barat.
              </p>
            </div>

            <motion.div
              whileHover={{ backgroundColor: isDarkMode ? '#027a48' : '#039855' }}
              className="bg-[#039855] rounded-[13px] px-[18px] py-[6px] text-center mb-[25px] cursor-pointer transition-colors duration-200"
            >
              <p className="font-['Poppins'] font-medium text-[18px] text-white">November</p>
            </motion.div>

            <div className="flex items-center justify-between">
              <motion.button
                whileHover={{ scale: 1.2, x: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <ChevronLeft size={24} className={isDarkMode ? 'text-white' : 'text-black'} />
              </motion.button>

              <div className="flex gap-[18px]">
                {weekDays.map((item, index) => (
                  <DayCard key={index} {...item} index={index} />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.2, x: 3 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <ChevronRight size={24} className={isDarkMode ? 'text-white' : 'text-black'} />
              </motion.button>
            </div>
          </div>

          {/* Event Status Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`${
              isDarkMode ? 'bg-[rgba(6,149,80,0.25)] border-[#4a9eff]' : 'bg-[rgba(6,149,80,0.17)] border-[#039855]'
            } border rounded-[16px] p-[20px] transition-all duration-300`}
          >
            <div className="flex gap-[12px] items-start">
              <div className="flex-1">
                <p className={`font-['Poppins'] font-medium text-[18px] mb-[12px] ${
                  isDarkMode ? 'text-[#4a9eff]' : 'text-[#039855]'
                }`}>
                  Pertanian
                </p>
                <div>
                  <p className={`font-['Poppins'] font-bold text-[20px] leading-[30px] ${
                    isDarkMode ? 'text-[#4a9eff]' : 'text-[#039855]'
                  }`}>
                    Pelatihan Petani
                  </p>
                  <p className={`font-['Poppins'] text-[18px] leading-[28px] ${
                    isDarkMode ? 'text-[#4a9eff]' : 'text-[#039855]'
                  }`}>
                    12.00 - 13.00
                  </p>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`px-[12px] py-[4px] rounded-[4px] ${
                  isDarkMode ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(6,6,6,0.05)]'
                }`}
              >
                <p className={`font-['Poppins'] font-medium text-[18px] ${
                  isDarkMode ? 'text-[#4a9eff]' : 'text-[#039855]'
                }`}>
                  Telah Selesai
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
