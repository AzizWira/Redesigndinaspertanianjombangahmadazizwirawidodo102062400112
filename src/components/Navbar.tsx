import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import imgDownload from "figma:asset/1918364656a4254a4bb7544c2c1b8e12c09e59d3.png";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
  const location = useLocation();
  
  const menuItems = [
    { label: "Beranda", path: "/" },
    { label: "Profil", path: "/profil" },
    { label: "Galeri", path: "/galeri" },
    { label: "Berita", path: "/berita" },
    { label: "Laporan", path: "/laporan" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white dark:bg-gray-800 relative rounded-[1000px] shadow-lg shrink-0 w-full z-50 transition-colors duration-300"
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[20px] md:px-[40px] py-[20px] relative w-full flex-wrap gap-4">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex gap-[10px] items-center cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="h-[57px] relative shrink-0 w-[46px]"
              >
                <img alt="Logo Dinas Pertanian" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDownload} />
              </motion.div>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <p className="[grid-area:1_/_1] font-['Manrope:Medium',sans-serif] font-medium h-[19.394px] leading-[normal] ml-0 mt-0 relative text-[#3f78e0] dark:text-blue-400 text-[14px] transition-colors duration-300">
                  Dinas Pertanian
                </p>
                <p className="[grid-area:1_/_1] font-['Manrope:Bold',sans-serif] font-bold h-[27.561px] leading-[30px] ml-0 mt-[19.39px] relative text-[#1f1f1f] dark:text-white text-[20px] transition-colors duration-300">
                  Kabupaten Jombang
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Menu Items */}
          <div className="flex items-center gap-[20px] md:gap-[40px] flex-wrap">
            <div className="flex font-['Manrope:Medium',sans-serif] font-medium items-center gap-[20px] md:gap-[40px] leading-[30px] text-[16px] md:text-[20px] text-black dark:text-white text-nowrap whitespace-pre transition-colors duration-300">
              {menuItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Link to={item.path}>
                    <motion.p 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative shrink-0 cursor-pointer transition-colors duration-200 ${
                        isActive(item.path) 
                          ? 'text-[#039855] dark:text-[#04b866]' 
                          : 'hover:text-[#039855] dark:hover:text-[#04b866]'
                      }`}
                    >
                      {item.label}
                    </motion.p>
                  </Link>
                  {item.label === "Laporan" && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                      aria-label="Toggle dark mode"
                    >
                      {isDarkMode ? (
                        <Sun className="w-5 h-5 text-yellow-400" />
                      ) : (
                        <Moon className="w-5 h-5 text-gray-700" />
                      )}
                    </motion.button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
