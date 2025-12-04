import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ComplaintPopup } from "./ComplaintPopup";

export function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save submitted data
    setSubmittedData(formData);
    
    // Show popup
    setShowPopup(true);
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-800 relative rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full transition-colors duration-300"
      >
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[40px] items-start px-[24px] py-[28px] relative w-full">
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-['Poppins:Bold',sans-serif] leading-[38px] not-italic text-[#011334] dark:text-white text-[30px] transition-colors duration-300"
            >
              Form Pengaduan
            </motion.p>

            <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[20px] items-start w-full">
              {/* First and Last Name */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="content-stretch flex flex-col md:flex-row gap-[21px] items-start w-full"
              >
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="basis-0 grow min-h-px min-w-px w-full"
                >
                  <motion.input
                    whileFocus={{ 
                      borderColor: "#087d43",
                      boxShadow: "0 0 0 2px rgba(8,125,67,0.1)"
                    }}
                    type="text"
                    placeholder="Nama depan"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    onFocus={() => setFocusedField("firstName")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="bg-[#f9f9f9] dark:bg-gray-700 h-[50px] rounded-[10px] border border-[#98a2b3] dark:border-gray-600 w-full px-[20px] py-[12px] font-['Poppins:Regular',sans-serif] text-[#011334] dark:text-white placeholder:text-[#98a2b3] dark:placeholder:text-gray-400 text-[16px] outline-none transition-all duration-300"
                  />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="basis-0 grow min-h-px min-w-px w-full"
                >
                  <motion.input
                    whileFocus={{ 
                      borderColor: "#087d43",
                      boxShadow: "0 0 0 2px rgba(8,125,67,0.1)"
                    }}
                    type="text"
                    placeholder="Nama belakang"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    onFocus={() => setFocusedField("lastName")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="bg-[#f9f9f9] dark:bg-gray-700 h-[50px] rounded-[10px] border border-[#98a2b3] dark:border-gray-600 w-full px-[20px] py-[12px] font-['Poppins:Regular',sans-serif] text-[#011334] dark:text-white placeholder:text-[#98a2b3] dark:placeholder:text-gray-400 text-[16px] outline-none transition-all duration-300"
                  />
                </motion.div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileFocus={{ scale: 1.02 }}
                className="w-full"
              >
                <motion.input
                  whileFocus={{ 
                    borderColor: "#087d43",
                    boxShadow: "0 0 0 2px rgba(8,125,67,0.1)"
                  }}
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="bg-[#f9f9f9] dark:bg-gray-700 h-[50px] rounded-[10px] border border-[#98a2b3] dark:border-gray-600 w-full px-[20px] py-[12px] font-['Poppins:Regular',sans-serif] text-[#011334] dark:text-white placeholder:text-[#98a2b3] dark:placeholder:text-gray-400 text-[16px] outline-none transition-all duration-300"
                />
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileFocus={{ scale: 1.02 }}
                className="w-full"
              >
                <motion.input
                  whileFocus={{ 
                    borderColor: "#087d43",
                    boxShadow: "0 0 0 2px rgba(8,125,67,0.1)"
                  }}
                  type="tel"
                  placeholder="Nomor Telepon"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="bg-[#f9f9f9] dark:bg-gray-700 h-[50px] rounded-[10px] border border-[#98a2b3] dark:border-gray-600 w-full px-[20px] py-[12px] font-['Poppins:Regular',sans-serif] text-[#011334] dark:text-white placeholder:text-[#98a2b3] dark:placeholder:text-gray-400 text-[16px] outline-none transition-all duration-300"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileFocus={{ scale: 1.02 }}
                className="w-full"
              >
                <motion.textarea
                  whileFocus={{ 
                    borderColor: "#087d43",
                    boxShadow: "0 0 0 2px rgba(8,125,67,0.1)"
                  }}
                  placeholder="Aduan kamu"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                  className="bg-[#f9f9f9] dark:bg-gray-700 rounded-[10px] border border-[#98a2b3] dark:border-gray-600 w-full px-[20px] py-[10px] font-['Poppins:Regular',sans-serif] text-[#011334] dark:text-white placeholder:text-[#98a2b3] dark:placeholder:text-gray-400 text-[16px] outline-none resize-none transition-all duration-300"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-[#087d43] dark:bg-[#06632f] hover:bg-[#06632f] dark:hover:bg-[#054d24] relative rounded-[24px] border border-[#087d43] dark:border-[#06632f] shrink-0 w-full transition-colors duration-300"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[120px] py-[22px] relative w-full">
                    <p className="font-['Poppins:SemiBold',sans-serif] leading-[28px] not-italic text-[18px] text-nowrap text-white whitespace-pre">
                      Kirim Aduan
                    </p>
                  </div>
                </div>
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
      
      {/* Complaint Popup */}
      <ComplaintPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        complaintData={submittedData}
      />
    </>
  );
}