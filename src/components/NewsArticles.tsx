import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import imgFrame1171276024 from "figma:asset/69db144352ce303218b660abbcf7baedc7d4b560.png";

export function NewsArticles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const articles = [
    {
      title: "Sistem Pertanian Karya Anak Bangsa",
      description: "Lorem ipsum dolor sit amet, consectetur Maecenas et velit sem belajar dirumah online",
      date: "20 Juni 2022",
      image: imgFrame1171276024
    },
    {
      title: "Sistem Pertanian Karya Anak Bangsa",
      description: "Lorem ipsum dolor sit amet, consectetur Maecenas et velit sem belajar dirumah online",
      date: "20 Juni 2022",
      image: imgFrame1171276024
    },
    {
      title: "Sistem Pertanian Karya Anak Bangsa",
      description: "Lorem ipsum dolor sit amet, consectetur Maecenas et velit sem belajar dirumah online",
      date: "20 Juni 2022",
      image: imgFrame1171276024
    }
  ];

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
        Berita & Artikel
      </motion.p>

      <div className="content-stretch flex flex-col md:flex-row gap-[20px] items-stretch w-full">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            whileHover={{ 
              y: -10,
              scale: 1.03,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.2)"
            }}
            className="basis-0 grow min-h-px min-w-px relative rounded-[20px] overflow-hidden cursor-pointer group"
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none rounded-[20px]">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                alt={article.title}
                className="absolute max-w-none object-50%-50% object-cover rounded-[20px] size-full" 
                src={article.image} 
              />
              <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[20px] to-[#069550] dark:to-[#027a43] via-0% via-[rgba(0,0,0,0)] transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-end size-full min-h-[287px]">
              <div className="box-border content-stretch flex flex-col gap-[17px] items-start justify-end not-italic pb-[20px] pt-[100px] px-[20px] relative w-full">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="content-stretch flex flex-col items-start not-italic text-white w-full"
                >
                  <p className="font-['Poppins:Bold',sans-serif] leading-[32px] text-[24px] w-full">
                    {article.title}
                  </p>
                  <p className="font-['Poppins:Medium',sans-serif] leading-[20px] text-[#d0d5dd] text-[14px] w-full">
                    {article.description}
                  </p>
                </motion.div>
                <motion.p 
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="font-['Poppins:SemiBold',sans-serif] leading-[24px] text-[#d0d5dd] text-[16px] w-full"
                >
                  {article.date}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
