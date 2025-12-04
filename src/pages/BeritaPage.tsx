import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../components/ui/dialog";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Calendar, User, Tag, Search, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface NewsArticle {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export function BeritaPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["Semua", "Program", "Inovasi", "Panen", "Pelatihan", "Pengumuman"];

  // Image mapping based on category
  const getCategoryImage = (category: string, id: number) => {
    const imageMap: Record<string, string> = {
      "Program": "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "Inovasi": "https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "Panen": "https://images.unsplash.com/photo-1730810618606-9a3f016d826d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "Pelatihan": "https://images.unsplash.com/photo-1722962674370-78fb4c75d044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "Pengumuman": "https://images.unsplash.com/photo-1755931359671-429ecd977b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    };
    
    return imageMap[category] || "https://images.unsplash.com/photo-1586984456747-d78bd259c534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
  };

  const newsData: NewsArticle[] = [
    {
      id: 1,
      title: "Dinas Pertanian Jombang Luncurkan Program Smart Farming 2025",
      category: "Program",
      date: "28 November 2025",
      author: "Budiono, S.P.",
      excerpt: "Kabupaten Jombang meluncurkan program Smart Farming yang mengintegrasikan teknologi IoT, drone, dan aplikasi mobile untuk meningkatkan produktivitas petani lokal.",
      content: "Dinas Pertanian Kabupaten Jombang resmi meluncurkan program Smart Farming 2025 yang bertujuan meningkatkan efisiensi dan produktivitas pertanian melalui teknologi digital. Program ini mencakup penggunaan sensor IoT untuk monitoring kelembaban tanah, drone untuk pemetaan lahan, serta aplikasi mobile yang memudahkan petani dalam mengelola lahan mereka.\n\nKepala Dinas Pertanian, Ir. Budiono, M.Si, menyatakan bahwa program ini merupakan langkah strategis dalam mewujudkan pertanian modern yang berkelanjutan. 'Kami ingin petani Jombang tidak tertinggal dalam era digital. Dengan teknologi ini, mereka bisa lebih mudah memantau kondisi lahan dan mengambil keputusan yang tepat,' ujarnya.\n\nProgram ini akan diimplementasikan secara bertahap di 10 desa percontohan dengan target 500 petani pada tahun pertama. Dinas Pertanian juga akan memberikan pelatihan intensif kepada petani tentang cara menggunakan teknologi ini secara efektif.",
      tags: ["Smart Farming", "Teknologi", "IoT", "Inovasi"]
    },
    {
      id: 2,
      title: "Panen Raya Padi Mencapai 45 Ton per Hektar dengan Varietas Unggul",
      category: "Panen",
      date: "25 November 2025",
      author: "Ahmad Fauzi, M.M.",
      excerpt: "Hasil panen raya di Desa Jombang mencatatkan rekor baru dengan produktivitas mencapai 45 ton gabah kering per hektar menggunakan varietas padi unggul Inpari 32.",
      content: "Panen raya yang dilaksanakan di Sawah Raya Desa Jombang mencatatkan prestasi gemilang dengan produktivitas mencapai 45 ton gabah kering per hektar. Angka ini melampaui rata-rata nasional yang berkisar 30-35 ton per hektar.\n\nKeberhasilan ini dicapai melalui penggunaan varietas padi unggul Inpari 32 yang dikombinasikan dengan teknik budidaya modern, sistem irigasi yang baik, dan pemupukan berimbang. Petani juga mendapat pendampingan intensif dari penyuluh pertanian selama masa tanam.\n\nBapak Sukarno, ketua kelompok tani Tani Makmur, mengungkapkan kegembiraannya. 'Ini adalah hasil terbaik yang pernah kami capai. Berkat bimbingan dari Dinas Pertanian dan penggunaan bibit berkualitas, kami berhasil meningkatkan produksi hingga 50 persen dibanding tahun lalu.'\n\nBupati Jombang yang hadir dalam acara panen raya memberikan apresiasi tinggi dan berkomitmen untuk terus mendukung program peningkatan produktivitas pertanian di seluruh kabupaten.",
      tags: ["Panen Raya", "Produktivitas", "Varietas Unggul", "Inpari 32"]
    },
    {
      id: 3,
      title: "Pelatihan Pertanian Organik Diikuti 200 Petani dari 15 Kecamatan",
      category: "Pelatihan",
      date: "20 November 2025",
      author: "Siti Nurjanah, M.P.",
      excerpt: "Antusiasme petani Jombang terhadap pertanian organik sangat tinggi. Pelatihan yang digelar selama 3 hari ini membekali petani dengan teknik budidaya ramah lingkungan.",
      content: "Dinas Pertanian Kabupaten Jombang menggelar pelatihan pertanian organik yang diikuti oleh 200 petani dari 15 kecamatan. Pelatihan yang berlangsung selama 3 hari ini bertujuan meningkatkan pengetahuan dan keterampilan petani dalam menerapkan teknik budidaya pertanian yang ramah lingkungan.\n\nMateri pelatihan mencakup pembuatan pupuk organik, pestisida nabati, teknik pengendalian hama terpadu, dan manajemen tanah organik. Peserta juga mendapat kesempatan praktik langsung di lahan demonstrasi.\n\nDr. Siti Nurjanah, S.P., M.P., Sekretaris Dinas Pertanian, menjelaskan bahwa pertanian organik menjadi prioritas karena meningkatnya permintaan pasar terhadap produk organik. 'Produk organik bisa dijual dengan harga 30-40 persen lebih tinggi dibanding produk konvensional. Ini peluang bagus untuk meningkatkan pendapatan petani,' ungkapnya.\n\nPara peserta pelatihan juga akan mendapat bantuan starter kit berupa bibit organik, pupuk kompos, dan pestisida nabati untuk memulai usaha pertanian organik di lahan masing-masing.",
      tags: ["Pelatihan", "Pertanian Organik", "Ramah Lingkungan", "Pupuk Organik"]
    },
    {
      id: 4,
      title: "Inovasi Drone Pertanian Permudah Penyemprotan Pestisida",
      category: "Inovasi",
      date: "18 November 2025",
      author: "Dwi Cahyono, M.T.",
      excerpt: "Penggunaan drone pertanian di Kabupaten Jombang terbukti lebih efisien dan efektif dalam penyemprotan pestisida dengan tingkat presisi tinggi.",
      content: "Dinas Pertanian Kabupaten Jombang memperkenalkan inovasi penggunaan drone untuk penyemprotan pestisida dan pupuk cair. Teknologi ini terbukti lebih efisien, menghemat waktu hingga 70 persen dibanding metode manual.\n\nDrone pertanian yang dioperasikan dapat menjangkau area hingga 10 hektar dalam satu jam dengan tingkat presisi penyemprotan yang tinggi. Teknologi GPS dan sensor canggih memastikan pestisida tersebar merata dan tepat sasaran.\n\nIr. Dwi Cahyono, M.T., Kepala Bidang Prasarana, menjelaskan bahwa penggunaan drone juga lebih aman bagi petani karena mengurangi kontak langsung dengan pestisida. 'Petani tidak perlu lagi masuk ke lahan yang sudah disemprot. Ini mengurangi risiko keracunan pestisida secara signifikan,' jelasnya.\n\nSaat ini Dinas Pertanian telah mengoperasikan 5 unit drone yang dapat disewa oleh kelompok tani dengan harga terjangkau. Rencananya tahun depan akan ditambah 10 unit lagi untuk menjangkau lebih banyak petani.",
      tags: ["Drone", "Inovasi", "Teknologi", "Penyemprotan"]
    },
    {
      id: 5,
      title: "Bantuan Alsintan Senilai 5 Miliar untuk 50 Kelompok Tani",
      category: "Program",
      date: "15 November 2025",
      author: "Bambang Haryanto, M.P.",
      excerpt: "Pemerintah Kabupaten Jombang mengalokasikan bantuan alat dan mesin pertanian senilai 5 miliar rupiah untuk meningkatkan mekanisasi pertanian.",
      content: "Pemerintah Kabupaten Jombang melalui Dinas Pertanian menyalurkan bantuan alat dan mesin pertanian (alsintan) senilai 5 miliar rupiah kepada 50 kelompok tani. Bantuan ini merupakan bagian dari program peningkatan mekanisasi pertanian untuk mendukung produktivitas.\n\nAlsintan yang diberikan meliputi traktor, combine harvester, mesin tanam padi, pompa air, dan mesin pengering gabah. Setiap kelompok tani mendapat paket alsintan sesuai kebutuhan dan kondisi lahan mereka.\n\nIr. Bambang Haryanto, M.P., Kepala Bidang Perkebunan, menyatakan bahwa bantuan ini diharapkan dapat mengurangi biaya operasional pertanian. 'Dengan alsintan yang memadai, petani bisa mengerjakan lahan lebih cepat dan efisien. Ini akan meningkatkan produktivitas sekaligus mengurangi ketergantungan pada tenaga kerja manual yang semakin sulit didapat,' ujarnya.\n\nPenyaluran bantuan dilakukan secara bertahap dan disertai pelatihan pengoperasian serta pemeliharaan alsintan. Kelompok tani juga diwajibkan membuat sistem sharing alsintan agar bisa dimanfaatkan oleh anggota lain.",
      tags: ["Alsintan", "Bantuan", "Mekanisasi", "Traktor"]
    },
    {
      id: 6,
      title: "Pengumuman: Pendaftaran Program Kemitraan Petani Milenial Dibuka",
      category: "Pengumuman",
      date: "12 November 2025",
      author: "Endang Sulistyowati, M.Si.",
      excerpt: "Dinas Pertanian membuka pendaftaran Program Kemitraan Petani Milenial untuk menarik generasi muda terjun ke sektor pertanian dengan dukungan modal dan mentoring.",
      content: "Dinas Pertanian Kabupaten Jombang mengumumkan pembukaan pendaftaran Program Kemitraan Petani Milenial periode 2026. Program ini dirancang khusus untuk menarik minat generasi muda usia 18-35 tahun untuk terjun ke sektor pertanian.\n\nProgram ini menawarkan berbagai benefit menarik, termasuk bantuan modal usaha tani hingga 50 juta rupiah, pendampingan intensif dari ahli pertanian, akses ke teknologi modern, serta jaminan pemasaran hasil panen melalui kemitraan dengan offtaker.\n\nIr. Endang Sulistyowati, M.Si., Kepala Bidang Hortikultura, menjelaskan bahwa program ini bertujuan meregenerasi petani Indonesia yang rata-rata sudah berusia di atas 50 tahun. 'Kami ingin menunjukkan bahwa pertanian bisa menjadi profesi yang menarik dan menguntungkan bagi anak muda. Dengan teknologi dan manajemen modern, pertanian bisa sangat prospektif,' katanya.\n\nPendaftaran dibuka mulai 15 November hingga 31 Desember 2025 melalui website resmi Dinas Pertanian. Peserta terpilih akan mengikuti bootcamp selama 2 bulan sebelum memulai usaha tani mereka.\n\nInfo lengkap dan pendaftaran: www.dinaspertanian-jombang.go.id/petani-milenial",
      tags: ["Pengumuman", "Petani Milenial", "Kemitraan", "Pendaftaran"]
    },
    {
      id: 7,
      title: "Sistem Irigasi Tetes Tingkatkan Efisiensi Air hingga 60 Persen",
      category: "Inovasi",
      date: "10 November 2025",
      author: "Dwi Cahyono, M.T.",
      excerpt: "Implementasi sistem irigasi tetes di 100 hektar lahan pertanian Jombang berhasil menghemat penggunaan air hingga 60 persen tanpa mengurangi produktivitas.",
      content: "Proyek percontohan sistem irigasi tetes yang diimplementasikan di 100 hektar lahan pertanian Kabupaten Jombang menunjukkan hasil yang sangat positif. Sistem ini terbukti mampu menghemat penggunaan air hingga 60 persen sambil mempertahankan bahkan meningkatkan produktivitas tanaman.\n\nSistem irigasi tetes bekerja dengan mengalirkan air langsung ke zona akar tanaman melalui pipa-pipa kecil dan emitter, sehingga air tidak terbuang sia-sia seperti pada metode irigasi konvensional. Selain menghemat air, sistem ini juga mengurangi pertumbuhan gulma dan penyakit tanaman.\n\nIr. Dwi Cahyono, M.T. menjelaskan bahwa sistem ini sangat cocok diterapkan di daerah yang mengalami kelangkaan air atau untuk tanaman hortikultura bernilai tinggi. 'Investasi awal memang lebih besar, tapi dalam jangka panjang petani akan mendapat keuntungan dari penghematan air dan peningkatan hasil panen,' ungkapnya.\n\nMelihat keberhasilan pilot project ini, Dinas Pertanian berencana memperluas implementasi sistem irigasi tetes ke 500 hektar lahan pada tahun 2026 dengan skema bantuan pemerintah.",
      tags: ["Irigasi Tetes", "Efisiensi Air", "Hemat Air", "Inovasi"]
    },
    {
      id: 8,
      title: "Kerjasama dengan Universitas untuk Pengembangan Bibit Unggul Lokal",
      category: "Program",
      date: "5 November 2025",
      author: "Budiono, S.P.",
      excerpt: "Dinas Pertanian menjalin kerjasama dengan tiga universitas untuk penelitian dan pengembangan varietas bibit unggul yang adaptif dengan kondisi lokal Jombang.",
      content: "Dinas Pertanian Kabupaten Jombang menandatangani perjanjian kerjasama dengan tiga universitas terkemuka untuk program penelitian dan pengembangan varietas bibit unggul lokal. Kerjasama ini melibatkan Universitas Brawijaya, IPB University, dan Universitas Gadjah Mada.\n\nProgram ini bertujuan mengembangkan varietas padi, jagung, dan kedelai yang memiliki keunggulan spesifik seperti tahan hama, adaptif terhadap perubahan iklim, dan memiliki produktivitas tinggi. Penelitian akan dilakukan di lahan demonstrasi seluas 50 hektar yang telah disiapkan.\n\nIr. Budiono, M.Si. menyatakan bahwa pengembangan varietas lokal sangat penting untuk menjaga ketahanan pangan. 'Setiap daerah memiliki karakteristik tanah dan iklim yang berbeda. Varietas yang dikembangkan secara spesifik untuk kondisi lokal akan memberikan hasil yang lebih optimal,' jelasnya.\n\nProgram ini direncanakan berlangsung selama 5 tahun dengan dana penelitian mencapai 10 miliar rupiah. Hasil penelitian akan langsung didistribusikan kepada petani dalam bentuk bibit bersertifikat.",
      tags: ["Kerjasama", "Universitas", "Bibit Unggul", "Penelitian"]
    },
  ];

  const filteredNews = newsData.filter(article => {
    const matchCategory = selectedCategory === "Semua" || article.category === selectedCategory;
    const matchSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div ref={ref} className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[400px] w-full overflow-hidden bg-gradient-to-br from-[#039855] to-[#027a43] dark:from-[#027a43] dark:to-[#015c32]"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00sy00 IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS1zOSA0LTR6TTEyIDM0YzAtMi4yMS0xLjc5LTQtNC00sy00 IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS1zOSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS1zOS00IDQgNCA0LTEuNzkgNC00em0yNCAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS1zOSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS1zOS00IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00sy00 IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="relative h-full flex flex-col items-center justify-center px-[20px] md:px-[50px] lg:px-[100px]">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Poppins:Bold',sans-serif] text-[42px] md:text-[56px] text-white text-center mb-4"
          >
            Berita & Artikel
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-['Poppins:Regular',sans-serif] text-[18px] md:text-[20px] text-white/90 text-center max-w-2xl"
          >
            Informasi terkini seputar pertanian Kabupaten Jombang
          </motion.p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-[20px] md:px-[50px] lg:px-[100px] py-[60px]">
        {/* Search and Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-[40px]"
        >
          {/* Search Bar */}
          <div className="relative mb-[24px] max-w-2xl mx-auto">
            <Search className="absolute left-[16px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] text-[#6b7280] dark:text-gray-400" />
            <input
              type="text"
              placeholder="Cari berita..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-[48px] pr-[20px] py-[14px] rounded-[12px] border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-[#1f1f1f] dark:text-white font-['Poppins:Regular',sans-serif] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#039855] dark:focus:ring-[#04b866] transition-colors duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-[12px]">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-[20px] py-[10px] rounded-[8px] font-['Poppins:Medium',sans-serif] text-[15px] transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#039855] dark:bg-[#027a43] text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-[#1f1f1f] dark:text-white border border-gray-200 dark:border-gray-700 hover:border-[#039855] dark:hover:border-[#04b866]'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* News Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]"
        >
          {filteredNews.map((article, index) => (
            <motion.div
              key={article.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-[16px] overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer group transition-colors duration-300"
              onClick={() => setSelectedArticle(article)}
            >
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden bg-gray-200 dark:bg-gray-700">
                <ImageWithFallback
                  src={getCategoryImage(article.category, article.id)}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-[12px] right-[12px]">
                  <div className="bg-[#039855] dark:bg-[#027a43] px-[12px] py-[6px] rounded-[6px] backdrop-blur-sm">
                    <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-white">
                      {article.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-[24px]">
                {/* Meta Info */}
                <div className="flex items-center gap-[16px] mb-[12px] text-[#6b7280] dark:text-gray-400">
                  <div className="flex items-center gap-[6px]">
                    <Calendar className="w-[14px] h-[14px]" />
                    <p className="font-['Poppins:Regular',sans-serif] text-[13px]">
                      {article.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <User className="w-[14px] h-[14px]" />
                    <p className="font-['Poppins:Regular',sans-serif] text-[13px]">
                      {article.author}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-['Poppins:Bold',sans-serif] text-[20px] text-[#1f1f1f] dark:text-white mb-[12px] line-clamp-2 group-hover:text-[#039855] dark:group-hover:text-[#04b866] transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-[#6b7280] dark:text-gray-400 leading-[26px] line-clamp-3 mb-[16px]">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-[8px] text-[#039855] dark:text-[#04b866] group-hover:gap-[12px] transition-all duration-300">
                  <p className="font-['Poppins:Medium',sans-serif] text-[14px]">
                    Baca Selengkapnya
                  </p>
                  <ArrowRight className="w-[16px] h-[16px]" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-[8px] mt-[16px] pt-[16px] border-t border-gray-200 dark:border-gray-700">
                  {article.tags.slice(0, 3).map((tag, idx) => (
                    <div key={idx} className="flex items-center gap-[4px] bg-[#e8f5e9] dark:bg-[rgba(6,149,80,0.15)] px-[10px] py-[4px] rounded-[6px]">
                      <Tag className="w-[12px] h-[12px] text-[#039855] dark:text-[#04b866]" />
                      <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#039855] dark:text-[#04b866]">
                        {tag}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Article Detail Dialog */}
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800">
          <DialogTitle className="sr-only">
            {selectedArticle?.title || "Detail Berita"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Detail artikel berita pertanian
          </DialogDescription>
          {selectedArticle && (
            <div className="flex flex-col gap-[24px]">
              {/* Image */}
              <div className="relative h-[400px] w-full rounded-[12px] overflow-hidden -mt-6 -mx-6">
                <ImageWithFallback
                  src={getCategoryImage(selectedArticle.category, selectedArticle.id)}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-[24px] left-[24px] right-[24px]">
                  <div className="inline-block bg-[#039855] dark:bg-[#027a43] px-[14px] py-[8px] rounded-[8px] mb-[12px]">
                    <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-white">
                      {selectedArticle.category}
                    </p>
                  </div>
                  <h2 className="font-['Poppins:Bold',sans-serif] text-[32px] text-white leading-[42px]">
                    {selectedArticle.title}
                  </h2>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-[20px] text-[#6b7280] dark:text-gray-400">
                <div className="flex items-center gap-[8px]">
                  <Calendar className="w-[18px] h-[18px] text-[#039855] dark:text-[#04b866]" />
                  <p className="font-['Poppins:Regular',sans-serif] text-[15px]">
                    {selectedArticle.date}
                  </p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <User className="w-[18px] h-[18px] text-[#039855] dark:text-[#04b866]" />
                  <p className="font-['Poppins:Regular',sans-serif] text-[15px]">
                    {selectedArticle.author}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="font-['Poppins:Regular',sans-serif] text-[16px] text-[#1f1f1f] dark:text-gray-300 leading-[30px] mb-[20px]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-[10px] pt-[24px] border-t border-gray-200 dark:border-gray-700">
                <p className="font-['Poppins:Medium',sans-serif] text-[15px] text-[#1f1f1f] dark:text-white">
                  Tags:
                </p>
                {selectedArticle.tags.map((tag, idx) => (
                  <div key={idx} className="flex items-center gap-[6px] bg-[#e8f5e9] dark:bg-[rgba(6,149,80,0.15)] px-[12px] py-[6px] rounded-[8px]">
                    <Tag className="w-[14px] h-[14px] text-[#039855] dark:text-[#04b866]" />
                    <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#039855] dark:text-[#04b866]">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}