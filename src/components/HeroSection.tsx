import { motion, useScroll, useTransform } from "motion/react";
import { Search } from "lucide-react";
import { useRef, useState } from "react";
import svgPaths from "../imports/svg-3teut0pqba";
import imgRectangle1 from "figma:asset/8afc39112fd9637332368aac00df70cffcd44dfc.png";
import { Navbar } from "./Navbar";
import { SearchPopup } from "./SearchPopup";

interface HeroSectionProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function HeroSection({ isDarkMode, setIsDarkMode }: HeroSectionProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState<"success" | "error">("success");

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setPopupType("error");
      setShowPopup(true);
    } else {
      setPopupType("success");
      setShowPopup(true);
      // Reset search query after showing success
      setTimeout(() => {
        setSearchQuery("");
      }, 3000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const popularSearches = [
    { label: "Padi", icon: "icon-park-outline:share" },
    { label: "Jagung", icon: "icon-park-outline:share" },
    { label: "Petani", icon: "icon-park-outline:share" }
  ];

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Hero Background with Parallax - Full Width */}
      <motion.div 
        style={{ y }}
        className="absolute h-[747px] left-0 right-0 top-0 overflow-hidden w-full"
      >
        <div className="absolute inset-0">
          <img 
            alt="Background Pertanian" 
            className="absolute inset-0 w-full h-full object-cover" 
            src={imgRectangle1} 
          />
          <div className="absolute bg-[rgba(0,0,0,0.61)] dark:bg-[rgba(0,0,0,0.75)] inset-0 transition-colors duration-300" />
        </div>
      </motion.div>

      {/* Content Container with Padding */}
      <div className="relative z-10 px-[20px] md:px-[50px] lg:px-[100px] pt-[74px] pb-[100px]">
        {/* Navbar */}
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        {/* Hero Content */}
        <motion.div 
          style={{ opacity }}
          className="pt-[56px]"
        >
          <div className="content-stretch flex flex-col gap-[56px] items-center w-full px-4">
            {/* Title and Description */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="content-stretch flex flex-col gap-[11px] items-start not-italic relative shrink-0 text-center text-white w-full max-w-5xl"
            >
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-['Poppins:Bold',sans-serif] leading-[60px] relative shrink-0 text-[32px] md:text-[48px] w-full whitespace-pre-wrap"
              >
                Mewujudkan Ketahanan Pangan dari Jantung Desa  Jombang
              </motion.p>
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="font-['Poppins:Regular',sans-serif] leading-[30px] relative shrink-0 text-[16px] md:text-[20px] w-full"
              >
                Mengelola potensi alam dengan kearifan lokal dan teknologi modern untuk hasil bumi berkualitas.
              </motion.p>
            </motion.div>

            {/* Search Section */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="content-stretch flex flex-col gap-[14px] items-center w-full max-w-3xl"
            >
              {/* Search Bar */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[20px] md:gap-[284px] items-center justify-center p-[12px] relative rounded-[1000px] shrink-0 w-full backdrop-blur-sm"
              >
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0 flex-1">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Search className="w-[30px] h-[30px] text-white" strokeWidth={2.5} />
                  </motion.div>
                  <input
                    type="text"
                    placeholder="Cari Informasi Disini"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="font-['Poppins:Regular',sans-serif] leading-[28px] not-italic text-[18px] text-white bg-transparent border-none outline-none placeholder-white w-full"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSearch}
                  className="bg-[#039855] dark:bg-[#027a43] box-border content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[8px] relative rounded-[39px] shrink-0 hover:bg-[#027a43] transition-colors duration-300"
                >
                  <p className="font-['Poppins:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white whitespace-pre">
                    Cari
                  </p>
                </motion.button>
              </motion.div>

              {/* Popular Searches */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="content-stretch flex flex-col gap-[15px] items-center w-full"
              >
                <p className="font-['Poppins:Regular',sans-serif] leading-[28px] not-italic text-[18px] text-center text-white">
                  Pencarian Populer
                </p>
                <div className="content-stretch flex gap-[20px] items-center flex-wrap justify-center">
                  {popularSearches.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[6px] items-center px-[14px] py-[7px] relative rounded-[5px] cursor-pointer transition-colors duration-200"
                    >
                      <p className="font-['Poppins:Regular',sans-serif] leading-[28px] not-italic text-[18px] text-center text-nowrap text-white whitespace-pre">
                        {item.label}
                      </p>
                      <div className="relative shrink-0 size-[24px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d={svgPaths.pf895a00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Search Popup */}
      <SearchPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        type={popupType}
        searchQuery={searchQuery}
      />
    </div>
  );
}