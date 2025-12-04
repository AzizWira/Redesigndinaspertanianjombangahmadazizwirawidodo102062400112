import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import imgRectangle8 from "figma:asset/edbb09d5026aee09a46d49cf9c9ce670a06d5f6b.png";
import imgRectangle9 from "figma:asset/31889d8f3a7badf437cd8465e43c7b2f472974a1.png";
import imgRectangle10 from "figma:asset/f28e7fd9b2b27cef705bad61b532ff59a9cc1b86.png";
import imgRectangle11 from "figma:asset/cd2fb5b3b46dc5116a2b6f33d73494cd4a07c79d.png";
import imgRectangle12 from "figma:asset/df20cb63b46bf9d3fbe6c7186eeda432ba12d6ec.png";
import imgRectangle13 from "figma:asset/c5ad9cbf9f98f755f37b6f74fbba8d4184200d60.png";

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryData = [
    { 
      src: imgRectangle8, 
      title: "Panen Raya Padi 2024",
      description: "Kegiatan panen raya padi yang dilaksanakan di Desa Jombang dengan hasil melimpah. Para petani bekerja sama menggunakan teknologi modern untuk meningkatkan produktivitas.",
      date: "15 November 2024",
      location: "Desa Jombang, Kecamatan Ploso"
    },
    { 
      src: imgRectangle9, 
      title: "Pelatihan Pertanian Modern",
      description: "Program pelatihan bagi petani muda dalam menggunakan teknologi pertanian modern dan metode organic farming untuk hasil yang lebih berkualitas.",
      date: "20 Oktober 2024",
      location: "Balai Desa Jombang"
    },
    { 
      src: imgRectangle10, 
      title: "Irigasi Sawah Berkelanjutan",
      description: "Pembangunan sistem irigasi modern yang ramah lingkungan untuk mendukung ketahanan pangan dan keberlanjutan pertanian di wilayah Jombang.",
      date: "5 September 2024",
      location: "Area Persawahan Jombang"
    },
    { 
      src: imgRectangle11, 
      title: "Festival Pertanian Nusantara",
      description: "Acara tahunan yang mempertemukan petani dari berbagai daerah untuk berbagi pengalaman, teknologi, dan hasil bumi terbaik dari seluruh Indonesia.",
      date: "12 Agustus 2024",
      location: "Lapangan Desa Jombang"
    },
    { 
      src: imgRectangle12, 
      title: "Program Pertanian Organik",
      description: "Implementasi pertanian organik tanpa pestisida kimia untuk menghasilkan produk pertanian yang sehat dan ramah lingkungan bagi konsumen.",
      date: "25 Juli 2024",
      location: "Kebun Organik Jombang"
    },
    { 
      src: imgRectangle13, 
      title: "Kemitraan Petani Muda",
      description: "Program kemitraan untuk mendorong generasi muda terjun ke dunia pertanian dengan dukungan teknologi dan pelatihan berkelanjutan.",
      date: "10 Juni 2024",
      location: "Pusat Pelatihan Pertanian"
    }
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryData.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryData.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedImage(null);
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
  };

  useState(() => {
    if (selectedImage !== null) {
      window.addEventListener('keydown', handleKeyDown as any);
      return () => window.removeEventListener('keydown', handleKeyDown as any);
    }
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="content-stretch flex flex-col gap-[36px] items-start w-full"
    >
      <motion.p 
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-['Poppins:Bold',sans-serif] leading-[38px] not-italic text-[#039855] dark:text-[#04b866] text-[30px] text-center w-full transition-colors duration-300"
      >
        Galeri
      </motion.p>

      {/* Desktop Grid */}
      <div className="hidden md:grid gap-[20px] grid-cols-3 auto-rows-[250px] w-full">
        {/* Image 1 - Top Left Tall */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ 
            scale: 1.05, 
            zIndex: 10,
            boxShadow: "0px 20px 40px rgba(0,0,0,0.3)"
          }}
          onClick={() => setSelectedImage(0)}
          className="relative rounded-[28px] overflow-hidden cursor-pointer row-span-2"
        >
          <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            alt="Gallery 1"
            className="absolute inset-0 w-full h-full object-cover" 
            src={imgRectangle8} 
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"
          >
            <p className="text-white font-['Poppins:Bold',sans-serif] text-[20px]">
              {galleryData[0].title}
            </p>
          </motion.div>
        </motion.div>

        {/* Image 2 - Top Middle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ 
            scale: 1.05, 
            zIndex: 10,
            boxShadow: "0px 20px 40px rgba(0,0,0,0.3)"
          }}
          onClick={() => setSelectedImage(1)}
          className="relative rounded-[28px] overflow-hidden cursor-pointer"
        >
          <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            alt="Gallery 2"
            className="absolute inset-0 w-full h-full object-cover" 
            src={imgRectangle9} 
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"
          >
            <p className="text-white font-['Poppins:Bold',sans-serif] text-[20px]">
              {galleryData[1].title}
            </p>
          </motion.div>
        </motion.div>

        {/* Image 3 - Top Right */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ 
            scale: 1.05, 
            zIndex: 10,
            boxShadow: "0px 20px 40px rgba(0,0,0,0.3)"
          }}
          onClick={() => setSelectedImage(2)}
          className="relative rounded-[28px] overflow-hidden cursor-pointer"
        >
          <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            alt="Gallery 3"
            className="absolute inset-0 w-full h-full object-cover" 
            src={imgRectangle10} 
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"
          >
            <p className="text-white font-['Poppins:Bold',sans-serif] text-[20px]">
              {galleryData[2].title}
            </p>
          </motion.div>
        </motion.div>

        {/* Image 4 - Middle Wide (spans 2 columns) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ 
            scale: 1.05, 
            zIndex: 10,
            boxShadow: "0px 20px 40px rgba(0,0,0,0.3)"
          }}
          onClick={() => setSelectedImage(3)}
          className="relative rounded-[28px] overflow-hidden cursor-pointer col-span-2"
        >
          <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            alt="Gallery 4"
            className="absolute inset-0 w-full h-full object-cover" 
            src={imgRectangle11} 
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"
          >
            <p className="text-white font-['Poppins:Bold',sans-serif] text-[20px]">
              {galleryData[3].title}
            </p>
          </motion.div>
        </motion.div>

        {/* Image 5 - Bottom Left Wide (spans 2 columns) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ 
            scale: 1.05, 
            zIndex: 10,
            boxShadow: "0px 20px 40px rgba(0,0,0,0.3)"
          }}
          onClick={() => setSelectedImage(4)}
          className="relative rounded-[28px] overflow-hidden cursor-pointer col-span-2"
        >
          <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            alt="Gallery 5"
            className="absolute inset-0 w-full h-full object-cover" 
            src={imgRectangle12} 
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"
          >
            <p className="text-white font-['Poppins:Bold',sans-serif] text-[20px]">
              {galleryData[4].title}
            </p>
          </motion.div>
        </motion.div>

        {/* Image 6 - Bottom Right */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ 
            scale: 1.05, 
            zIndex: 10,
            boxShadow: "0px 20px 40px rgba(0,0,0,0.3)"
          }}
          onClick={() => setSelectedImage(5)}
          className="relative rounded-[28px] overflow-hidden cursor-pointer"
        >
          <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            alt="Gallery 6"
            className="absolute inset-0 w-full h-full object-cover" 
            src={imgRectangle13} 
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"
          >
            <p className="text-white font-['Poppins:Bold',sans-serif] text-[20px]">
              {galleryData[5].title}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Grid */}
      <div className="md:hidden grid gap-[20px] grid-cols-1 w-full">
        {galleryData.map((image, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.3)"
            }}
            onClick={() => setSelectedImage(index)}
            className="relative rounded-[28px] h-[250px] overflow-hidden cursor-pointer"
          >
            <motion.img 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              alt={image.title}
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[28px] size-full" 
              src={image.src} 
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"
            >
              <p className="text-white font-['Poppins:Bold',sans-serif] text-[20px]">
                {image.title}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Popup */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-gray-800 rounded-[20px] overflow-hidden max-w-4xl w-full shadow-2xl"
            >
              {/* Image */}
              <div className="relative w-full h-[400px] md:h-[500px]">
                <img
                  alt={galleryData[selectedImage].title}
                  className="w-full h-full object-cover"
                  src={galleryData[selectedImage].src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-['Poppins:Bold',sans-serif] text-[24px] md:text-[28px] text-[#039855] dark:text-[#04b866] mb-3">
                  {galleryData[selectedImage].title}
                </h3>
                <p className="font-['Poppins:Regular',sans-serif] text-[16px] text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {galleryData[selectedImage].description}
                </p>
                <div className="flex flex-col md:flex-row gap-4 font-['Poppins:Regular',sans-serif] text-[14px] text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{galleryData[selectedImage].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{galleryData[selectedImage].location}</span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 rounded-full p-2 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-6 h-6 text-gray-700 dark:text-white" />
              </motion.button>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-white" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 dark:text-white" />
              </motion.button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full font-['Poppins:Medium',sans-serif] text-[14px]">
                {selectedImage + 1} / {galleryData.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}