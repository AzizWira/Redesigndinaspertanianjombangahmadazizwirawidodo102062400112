import { motion } from 'motion/react';
import { useDarkMode } from '../App';
import imgRectangle8 from "figma:asset/edbb09d5026aee09a46d49cf9c9ce670a06d5f6b.png";
import imgRectangle9 from "figma:asset/31889d8f3a7badf437cd8465e43c7b2f472974a1.png";
import imgRectangle10 from "figma:asset/f28e7fd9b2b27cef705bad61b532ff59a9cc1b86.png";
import imgRectangle11 from "figma:asset/cd2fb5b3b46dc5116a2b6f33d73494cd4a07c79d.png";
import imgRectangle12 from "figma:asset/df20cb63b46bf9d3fbe6c7186eeda432ba12d6ec.png";
import imgRectangle13 from "figma:asset/c5ad9cbf9f98f755f37b6f74fbba8d4184200d60.png";

const galleryImages = [
  { src: imgRectangle8, gridArea: '1 / 1', height: 'h-[558px]', span: 1 },
  { src: imgRectangle9, gridArea: '1 / 2', height: 'h-[267px]', span: 1 },
  { src: imgRectangle10, gridArea: '1 / 3', height: 'h-[267px]', span: 1 },
  { src: imgRectangle11, gridArea: '2 / 2 / auto / span 2', height: 'h-[267px]', span: 2 },
  { src: imgRectangle12, gridArea: '3 / 1 / auto / span 2', height: 'h-[267px]', span: 2 },
  { src: imgRectangle13, gridArea: '3 / 3', height: 'h-[267px]', span: 1 },
];

function GalleryImage({ image, index }: { image: typeof galleryImages[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      style={{ gridArea: image.gridArea }}
      className={`${image.height} rounded-[28px] overflow-hidden relative cursor-pointer group`}
    >
      <img 
        alt={`Gallery image ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        src={image.src} 
      />
      
      {/* Hover Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-[#039855]/80 to-transparent flex items-end justify-center pb-6"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full"
        >
          <span className="font-['Poppins'] font-semibold text-white text-[16px]">
            Lihat Detail
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function GaleriSection() {
  const { isDarkMode } = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-[73px]"
    >
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className={`font-['Poppins'] font-bold text-[30px] leading-[38px] text-center mb-[36px] ${
          isDarkMode ? 'text-[#4a9eff]' : 'text-[#039855]'
        }`}
      >
        Galeri
      </motion.h2>
      
      <div className="grid grid-cols-3 grid-rows-3 gap-[31px] h-[873px] max-lg:grid-cols-2 max-lg:h-auto max-md:grid-cols-1">
        {galleryImages.map((image, index) => (
          <GalleryImage key={index} image={image} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
