import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import svgPaths from "../imports/svg-3teut0pqba";
import imgDownload from "figma:asset/1918364656a4254a4bb7544c2c1b8e12c09e59d3.png";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const navigationLinks = ["Home", "Produk Kami", "Tentang Kami", "Cara Order"];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="relative rounded-[16px] shrink-0 w-full overflow-hidden"
    >
      <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[24px] md:px-[44px] py-[62px] relative w-full bg-[#087d43] dark:bg-[#06632f] transition-colors duration-300">
        <div className="content-stretch flex flex-col lg:flex-row items-start justify-between gap-8 w-full">
          {/* Left - Brand Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="content-stretch flex flex-col gap-[23px] items-start w-full lg:w-[582px]"
          >
            <div className="box-border content-stretch flex gap-[10px] items-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="h-[57px] relative shrink-0 w-[46px]"
              >
                <img alt="Logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDownload} />
              </motion.div>
              <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px not-italic place-items-start text-white">
                <p className="[grid-area:1_/_1] font-['Poppins:Medium',sans-serif] h-[19px] leading-[20px] ml-0 mt-0 relative text-[14px]">
                  Dinas Pertanian
                </p>
                <p className="[grid-area:1_/_1] font-['Poppins:Bold',sans-serif] h-[27.561px] leading-[30px] ml-0 mt-[19.43px] relative text-[20px]">
                  Kabupaten Jombang
                </p>
              </div>
            </div>
            <p className="font-['Poppins:Bold',sans-serif] leading-[28px] not-italic text-[18px] text-white w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum ante vel metus ultricies,
            </p>
          </motion.div>

          {/* Middle - Contact Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="content-stretch flex flex-col gap-[38px] items-start w-full lg:w-[375px]"
          >
            <div className="content-stretch flex flex-col gap-[7px] items-start not-italic text-white w-full">
              <p className="font-['Poppins:Bold',sans-serif] leading-[24px] text-[16px] w-full">
                Kontak Info
              </p>
              <p className="font-['Poppins:Regular',sans-serif] leading-[18px] text-[12px] w-full">
                Jl. Krekot Jaya Molek Blok I No.11, RT.7/RW.02, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat.
              </p>
            </div>

            <div className="content-stretch flex flex-col gap-[17px] items-start w-full">
              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/6287300983087"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, scale: 1.05 }}
                className="content-stretch flex gap-[4px] items-center rounded-[1000px] w-full cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative shrink-0 size-[26px]"
                >
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                    <path d={svgPaths.p1bc21c80} fill="white" />
                  </svg>
                </motion.div>
                <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic text-[16px] text-nowrap text-white whitespace-pre">
                  +62 8730-0983-0987
                </p>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:dinaspertanian@gmail.com"
                whileHover={{ x: 10, scale: 1.05 }}
                className="content-stretch flex gap-[4px] items-end rounded-[1000px] w-full cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative shrink-0 size-[26px]"
                >
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                    <path d={svgPaths.p19651280} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  </svg>
                </motion.div>
                <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic text-[16px] text-nowrap text-white whitespace-pre">
                  dinaspertanian@gmail.com
                </p>
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Navigation */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="content-stretch flex flex-col gap-[7px] items-start not-italic text-white w-full lg:w-[151px]"
          >
            <p className="font-['Poppins:Bold',sans-serif] leading-[24px] text-[16px] w-full">
              Navigasi
            </p>
            {navigationLinks.map((link, index) => (
              <motion.p
                key={index}
                whileHover={{ x: 5, color: "#FFDD00" }}
                className="font-['Poppins:Regular',sans-serif] leading-[18px] text-[12px] w-full cursor-pointer transition-colors duration-200"
              >
                {link}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
