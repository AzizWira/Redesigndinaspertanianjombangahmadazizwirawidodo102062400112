import { motion } from 'motion/react';
import { useDarkMode } from '../App';
import imgFrame1171276024 from "figma:asset/69db144352ce303218b660abbcf7baedc7d4b560.png";

const articles = [
  {
    image: imgFrame1171276024,
    title: 'Sistem Pertanian Karya Anak Bangsa',
    desc: 'Lorem ipsum dolor sit amet, consectetur Maecenas et velit sem belajar dirumah online',
    date: '20 Juni 2022'
  },
  {
    image: imgFrame1171276024,
    title: 'Sistem Pertanian Karya Anak Bangsa',
    desc: 'Lorem ipsum dolor sit amet, consectetur Maecenas et velit sem belajar dirumah online',
    date: '20 Juni 2022'
  },
  {
    image: imgFrame1171276024,
    title: 'Sistem Pertanian Karya Anak Bangsa',
    desc: 'Lorem ipsum dolor sit amet, consectetur Maecenas et velit sem belajar dirumah online',
    date: '20 Juni 2022'
  }
];

function ArticleCard({ article, index }: { article: typeof articles[0]; index: number }) {
  const { isDarkMode } = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="flex-1 min-w-0 h-[287px] rounded-[20px] relative overflow-hidden cursor-pointer group"
    >
      <img 
        alt={article.title} 
        className="absolute inset-0 w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-110" 
        src={article.image} 
      />
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-[#069550] transition-opacity duration-300 group-hover:opacity-90" />
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.1 }}
        className="absolute bottom-0 left-0 right-0 p-[20px] text-white"
      >
        <h3 className="font-['Poppins'] font-bold text-[24px] leading-[32px] mb-[17px]">
          {article.title}
        </h3>
        <p className="font-['Poppins'] font-medium text-[14px] leading-[20px] text-[#d0d5dd] mb-[17px]">
          {article.desc}
        </p>
        <p className="font-['Poppins'] font-semibold text-[16px] leading-[24px] text-[#d0d5dd]">
          {article.date}
        </p>
      </motion.div>

      {/* Hover Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-[rgba(3,152,85,0.1)] backdrop-blur-[2px] rounded-[20px] flex items-center justify-center"
      >
        <motion.span
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          className="font-['Poppins'] font-bold text-white text-[18px] bg-[#039855] px-6 py-3 rounded-full"
        >
          Baca Selengkapnya
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export function BeritaArtikel() {
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
        Berita & Artikel
      </motion.h2>
      
      <div className="flex gap-[20px] max-lg:flex-col">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
