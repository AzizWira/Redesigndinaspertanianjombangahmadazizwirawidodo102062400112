import { useState } from 'react';
import { motion } from 'motion/react';
import { useDarkMode } from '../App';

export function FormPengaduan() {
  const { isDarkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    complaint: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const inputClasses = (fieldName: string) => `
    w-full h-[50px] px-[20px] py-[12px] rounded-[10px] font-['Poppins'] text-[16px] leading-[24px]
    border transition-all duration-300
    ${focusedField === fieldName 
      ? isDarkMode 
        ? 'bg-[#2a2a2a] border-[#4a9eff] text-white' 
        : 'bg-white border-[#087d43] text-[#011334]'
      : isDarkMode
        ? 'bg-[#1a1a1a] border-[#555] text-gray-400'
        : 'bg-[#f9f9f9] border-[#98a2b3] text-[#98a2b3]'
    }
    focus:outline-none
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-[73px]"
    >
      <div className={`${
        isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white'
      } rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[24px_24px_28px_24px] transition-colors duration-300`}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`font-['Poppins'] font-bold text-[30px] leading-[38px] mb-[40px] ${
            isDarkMode ? 'text-white' : 'text-[#011334]'
          }`}
        >
          Form Pengaduan
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-[20px]">
          {/* Name Fields */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-[21px] max-md:flex-col"
          >
            <motion.div 
              className="flex-1"
              whileFocus={{ scale: 1.02 }}
            >
              <input
                type="text"
                placeholder="Nama depan"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                onFocus={() => setFocusedField('firstName')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('firstName')}
              />
            </motion.div>
            <motion.div 
              className="flex-1"
              whileFocus={{ scale: 1.02 }}
            >
              <input
                type="text"
                placeholder="Nama belakang"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                onFocus={() => setFocusedField('lastName')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('lastName')}
              />
            </motion.div>
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileFocus={{ scale: 1.02 }}
          >
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className={inputClasses('email')}
            />
          </motion.div>

          {/* Phone Field */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileFocus={{ scale: 1.02 }}
          >
            <input
              type="tel"
              placeholder="Nomor Telepon"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
              className={inputClasses('phone')}
            />
          </motion.div>

          {/* Complaint Field */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileFocus={{ scale: 1.02 }}
          >
            <textarea
              placeholder="Aduan kamu"
              value={formData.complaint}
              onChange={(e) => setFormData({ ...formData, complaint: e.target.value })}
              onFocus={() => setFocusedField('complaint')}
              onBlur={() => setFocusedField(null)}
              className={`
                ${inputClasses('complaint')}
                h-[140px] resize-none
              `}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(8, 125, 67, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#087d43] border border-[#087d43] rounded-[24px] px-[120px] py-[22px] font-['Poppins'] font-semibold text-[18px] text-white transition-all duration-300"
          >
            Kirim Aduan
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
