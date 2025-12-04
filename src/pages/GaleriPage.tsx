import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../components/ui/dialog";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { X, Calendar, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  description: string;
  photographer?: string;
}

export function GaleriPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const categories = ["Semua", "Pelatihan", "Panen", "Inovasi", "Event", "Infrastruktur"];

  // Image mapping based on category
  const getCategoryImage = (category: string, id: number) => {
    const imageMap: Record<string, string> = {
      "Pelatihan": "https://images.unsplash.com/photo-1722962674370-78fb4c75d044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "Panen": "https://images.unsplash.com/photo-1730810618606-9a3f016d826d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "Inovasi": "https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "Event": "https://images.unsplash.com/photo-1759076760465-199f45e81505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "Infrastruktur": "https://images.unsplash.com/photo-1663079402880-97a2e68aafc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    };
    
    return imageMap[category] || "https://images.unsplash.com/photo-1586984456747-d78bd259c534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
  };

  const galleryData: GalleryItem[] = [
    {
      id: 1,
      title: "Pelatihan Petani Organik 2025",
      category: "Pelatihan",
      date: "1 Desember 2025",
      location: "Balai Desa Jombang",
      description: "Kegiatan pelatihan intensif tentang teknik pertanian organik modern untuk meningkatkan hasil panen tanpa menggunakan pestisida kimia. Diikuti oleh 50 petani dari berbagai kelompok tani di Kabupaten Jombang.",
      photographer: "Tim Dokumentasi Dinas Pertanian"
    },
    {
      id: 2,
      title: "Workshop Pembuatan Pupuk Kompos",
      category: "Pelatihan",
      date: "3 Desember 2025",
      location: "Lapangan Desa",
      description: "Workshop praktis pembuatan pupuk kompos dari limbah organik rumah tangga dan pertanian. Peserta belajar langsung cara membuat kompos berkualitas tinggi.",
      photographer: "Ahmad Fauzi"
    },
    {
      id: 3,
      title: "Kunjungan Sawah Demonstrasi Plot",
      category: "Infrastruktur",
      date: "6 Desember 2025",
      location: "Sawah Demplot Blok A",
      description: "Kunjungan lapangan ke sawah demonstrasi untuk melihat langsung penerapan teknologi pertanian modern dan varietas padi unggul yang dikembangkan.",
      photographer: "Dwi Cahyono"
    },
    {
      id: 4,
      title: "Seminar Teknologi Pertanian 4.0",
      category: "Inovasi",
      date: "11 Desember 2025",
      location: "Aula Utama Kecamatan",
      description: "Seminar nasional tentang inovasi teknologi pertanian 4.0, termasuk penggunaan drone, sensor IoT, dan aplikasi mobile untuk manajemen pertanian modern.",
      photographer: "Tim Media"
    },
    {
      id: 5,
      title: "Instalasi Sistem Irigasi Modern",
      category: "Infrastruktur",
      date: "13 Desember 2025",
      location: "Lahan Demplot Desa",
      description: "Pemasangan sistem irigasi tetes dan sprinkler untuk meningkatkan efisiensi penggunaan air dalam pertanian. Program bantuan dari pemerintah kabupaten.",
      photographer: "Endang Sulistyowati"
    },
    {
      id: 6,
      title: "Panen Raya Padi 2025",
      category: "Panen",
      date: "17 Desember 2025",
      location: "Sawah Raya Desa Jombang",
      description: "Acara panen raya padi menggunakan combine harvester modern. Dihadiri Bupati dan menghasilkan produktivitas tinggi dari varietas unggul.",
      photographer: "Bambang Haryanto"
    },
    {
      id: 7,
      title: "Pembagian Bibit Unggul Bersertifikat",
      category: "Event",
      date: "20 Desember 2025",
      location: "Kantor Dinas Pertanian",
      description: "Distribusi bibit padi unggul bersertifikat kepada petani dalam program kerjasama dengan Balai Besar Penelitian Padi untuk meningkatkan produktivitas.",
      photographer: "Siti Nurjanah"
    },
    {
      id: 8,
      title: "Pertemuan Petani Indonesia",
      category: "Event",
      date: "22 Desember 2025",
      location: "Gedung Serbaguna Kabupaten",
      description: "Forum pertemuan petani se-Indonesia untuk berbagi pengalaman dan diskusi tantangan pertanian modern. Dihadiri 300 petani dari berbagai daerah.",
      photographer: "Tim Dokumentasi"
    },
    {
      id: 9,
      title: "Rapat Koordinasi Kelompok Tani",
      category: "Event",
      date: "25 Desember 2025",
      location: "Sekretariat Gapoktan",
      description: "Rapat koordinasi rutin pengurus kelompok tani untuk evaluasi program semester 2 dan perencanaan kegiatan tahun depan.",
      photographer: "Ahmad Fauzi"
    },
    {
      id: 10,
      title: "Distribusi Bantuan Pupuk Bersubsidi",
      category: "Event",
      date: "28 Desember 2025",
      location: "Gudang Distribusi Pupuk",
      description: "Pembagian bantuan pupuk bersubsidi untuk musim tanam mendatang. Setiap petani terdaftar mendapat kuota Urea, NPK, dan pupuk organik.",
      photographer: "Dwi Cahyono"
    },
    {
      id: 11,
      title: "Evaluasi Program Tahunan 2025",
      category: "Event",
      date: "30 Desember 2025",
      location: "Ruang Rapat Dinas",
      description: "Evaluasi komprehensif program pertanian tahun 2025 dan penyusunan rencana kerja tahun 2026 dengan pembahasan anggaran dan prioritas.",
      photographer: "Budiono"
    },
    {
      id: 12,
      title: "Drone Monitoring Lahan Pertanian",
      category: "Inovasi",
      date: "15 Desember 2025",
      location: "Lahan Pertanian Terpadu",
      description: "Demonstrasi penggunaan drone untuk monitoring kesehatan tanaman dan pemetaan lahan pertanian menggunakan teknologi terkini.",
      photographer: "Tim Inovasi"
    },
  ];

  const filteredGallery = selectedCategory === "Semua" 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory);

  return (
    <div ref={ref} className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[400px] w-full overflow-hidden bg-gradient-to-br from-[#039855] to-[#027a43] dark:from-[#027a43] dark:to-[#015c32]"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTEyIDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0yNCAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00sy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="relative h-full flex flex-col items-center justify-center px-[20px] md:px-[50px] lg:px-[100px]">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Poppins:Bold',sans-serif] text-[42px] md:text-[56px] text-white text-center mb-4"
          >
            Galeri Kegiatan
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-['Poppins:Regular',sans-serif] text-[18px] md:text-[20px] text-white/90 text-center max-w-2xl"
          >
            Dokumentasi kegiatan dan program Dinas Pertanian Kabupaten Jombang
          </motion.p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-[20px] md:px-[50px] lg:px-[100px] py-[60px]">
        {/* Category Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-[12px] mb-[50px]"
        >
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
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]"
        >
          {filteredGallery.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedItem(item)}
              className="bg-white dark:bg-gray-800 rounded-[16px] overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer group transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden bg-gray-200 dark:bg-gray-700">
                <ImageWithFallback
                  src={getCategoryImage(item.category, item.id)}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-[12px] right-[12px]">
                  <div className="bg-[#039855] dark:bg-[#027a43] px-[12px] py-[6px] rounded-[6px] backdrop-blur-sm">
                    <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-white">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-[20px]">
                <h3 className="font-['Poppins:Bold',sans-serif] text-[18px] text-[#1f1f1f] dark:text-white mb-[8px] line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-[8px] text-[#6b7280] dark:text-gray-400 mb-[8px]">
                  <Calendar className="w-[14px] h-[14px]" />
                  <p className="font-['Poppins:Regular',sans-serif] text-[13px]">
                    {item.date}
                  </p>
                </div>
                <div className="flex items-center gap-[8px] text-[#6b7280] dark:text-gray-400">
                  <MapPin className="w-[14px] h-[14px]" />
                  <p className="font-['Poppins:Regular',sans-serif] text-[13px] line-clamp-1">
                    {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800">
          <DialogTitle className="sr-only">
            {selectedItem?.title || "Detail Galeri"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Detail foto kegiatan pertanian
          </DialogDescription>
          {selectedItem && (
            <div className="flex flex-col gap-[20px]">
              {/* Image */}
              <div className="relative h-[400px] w-full rounded-[12px] overflow-hidden -mt-6 -mx-6">
                <ImageWithFallback
                  src={getCategoryImage(selectedItem.category, selectedItem.id)}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-[16px] right-[16px]">
                  <div className="bg-[#039855] dark:bg-[#027a43] px-[14px] py-[8px] rounded-[8px]">
                    <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-white">
                      {selectedItem.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-['Poppins:Bold',sans-serif] text-[28px] text-[#039855] dark:text-[#04b866]">
                {selectedItem.title}
              </h2>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                <div className="flex items-start gap-[12px]">
                  <Calendar className="w-[20px] h-[20px] text-[#039855] dark:text-[#04b866] mt-[2px]" />
                  <div>
                    <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#6b7280] dark:text-gray-400">
                      Tanggal
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-[#1f1f1f] dark:text-white">
                      {selectedItem.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-[12px]">
                  <MapPin className="w-[20px] h-[20px] text-[#039855] dark:text-[#04b866] mt-[2px]" />
                  <div>
                    <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#6b7280] dark:text-gray-400">
                      Lokasi
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-[#1f1f1f] dark:text-white">
                      {selectedItem.location}
                    </p>
                  </div>
                </div>

                {selectedItem.photographer && (
                  <div className="flex items-start gap-[12px] md:col-span-2">
                    <Users className="w-[20px] h-[20px] text-[#039855] dark:text-[#04b866] mt-[2px]" />
                    <div>
                      <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#6b7280] dark:text-gray-400">
                        Fotografer
                      </p>
                      <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-[#1f1f1f] dark:text-white">
                        {selectedItem.photographer}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-[20px]">
                <p className="font-['Poppins:Bold',sans-serif] text-[16px] text-[#1f1f1f] dark:text-white mb-[12px]">
                  Deskripsi
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-[#6b7280] dark:text-gray-300 leading-[28px]">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}