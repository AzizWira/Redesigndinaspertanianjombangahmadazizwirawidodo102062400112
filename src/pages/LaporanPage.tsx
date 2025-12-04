import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { FileText, Download, Calendar, Eye, Filter } from "lucide-react";

interface Report {
  id: number;
  title: string;
  category: string;
  year: number;
  month: string;
  size: string;
  description: string;
  downloadUrl: string;
}

export function LaporanPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const years = [2025, 2024, 2023, 2022];
  const categories = ["Semua", "Keuangan", "Produksi", "Program", "Evaluasi", "Tahunan"];

  const reportsData: Report[] = [
    {
      id: 1,
      title: "Laporan Keuangan Semester II 2025",
      category: "Keuangan",
      year: 2025,
      month: "Desember",
      size: "2.4 MB",
      description: "Laporan keuangan semester kedua tahun 2025 mencakup realisasi anggaran, belanja operasional, dan belanja modal Dinas Pertanian Kabupaten Jombang.",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Laporan Produksi Padi November 2025",
      category: "Produksi",
      year: 2025,
      month: "November",
      size: "1.8 MB",
      description: "Data produksi padi bulan November 2025 meliputi luas panen, produktivitas, dan total produksi per kecamatan di Kabupaten Jombang.",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Evaluasi Program Smart Farming 2025",
      category: "Evaluasi",
      year: 2025,
      month: "Desember",
      size: "3.1 MB",
      description: "Evaluasi komprehensif implementasi program Smart Farming tahun 2025 mencakup capaian target, hambatan, dan rekomendasi untuk tahun depan.",
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "Laporan Program Pertanian Organik Oktober 2025",
      category: "Program",
      year: 2025,
      month: "Oktober",
      size: "1.5 MB",
      description: "Laporan pelaksanaan program pertanian organik periode Oktober 2025 meliputi jumlah peserta, luas lahan, dan hasil evaluasi pelatihan.",
      downloadUrl: "#"
    },
    {
      id: 5,
      title: "Laporan Tahunan Dinas Pertanian 2024",
      category: "Tahunan",
      year: 2024,
      month: "Desember",
      size: "8.7 MB",
      description: "Laporan tahunan lengkap tahun 2024 mencakup seluruh program, kegiatan, anggaran, produksi, dan capaian kinerja Dinas Pertanian Kabupaten Jombang.",
      downloadUrl: "#"
    },
    {
      id: 6,
      title: "Laporan Keuangan Semester I 2025",
      category: "Keuangan",
      year: 2025,
      month: "Juni",
      size: "2.2 MB",
      description: "Laporan keuangan semester pertama tahun 2025 dengan rincian realisasi anggaran per kegiatan dan analisis varians.",
      downloadUrl: "#"
    },
    {
      id: 7,
      title: "Laporan Produksi Jagung Semester II 2025",
      category: "Produksi",
      year: 2025,
      month: "Desember",
      size: "1.6 MB",
      description: "Data produksi jagung semester kedua 2025 meliputi luas tanam, luas panen, produktivitas, dan proyeksi surplus produksi.",
      downloadUrl: "#"
    },
    {
      id: 8,
      title: "Evaluasi Penyaluran Alsintan 2025",
      category: "Evaluasi",
      year: 2025,
      month: "November",
      size: "2.8 MB",
      description: "Evaluasi penyaluran alat dan mesin pertanian tahun 2025 mencakup daftar penerima, jenis alsintan, dan tingkat pemanfaatan.",
      downloadUrl: "#"
    },
    {
      id: 9,
      title: "Laporan Program Pelatihan Petani 2024",
      category: "Program",
      year: 2024,
      month: "Desember",
      size: "2.1 MB",
      description: "Laporan lengkap program pelatihan petani tahun 2024 meliputi jumlah pelatihan, peserta, materi, dan evaluasi dampak.",
      downloadUrl: "#"
    },
    {
      id: 10,
      title: "Laporan Keuangan Triwulan III 2024",
      category: "Keuangan",
      year: 2024,
      month: "September",
      size: "1.9 MB",
      description: "Laporan keuangan triwulan ketiga 2024 dengan analisis realisasi anggaran dan proyeksi akhir tahun.",
      downloadUrl: "#"
    },
    {
      id: 11,
      title: "Laporan Produksi Hortikultura 2024",
      category: "Produksi",
      year: 2024,
      month: "Desember",
      size: "3.3 MB",
      description: "Data lengkap produksi hortikultura 2024 meliputi sayuran dan buah-buahan dengan analisis tren dan proyeksi.",
      downloadUrl: "#"
    },
    {
      id: 12,
      title: "Evaluasi Sistem Irigasi Tetes 2024",
      category: "Evaluasi",
      year: 2024,
      month: "November",
      size: "2.5 MB",
      description: "Evaluasi implementasi sistem irigasi tetes tahun 2024 mencakup efisiensi air, peningkatan produktivitas, dan analisis biaya-manfaat.",
      downloadUrl: "#"
    },
    {
      id: 13,
      title: "Laporan Tahunan Dinas Pertanian 2023",
      category: "Tahunan",
      year: 2023,
      month: "Desember",
      size: "7.9 MB",
      description: "Laporan tahunan komprehensif tahun 2023 mencakup semua aspek kegiatan dinas pertanian.",
      downloadUrl: "#"
    },
    {
      id: 14,
      title: "Laporan Program Bantuan Pupuk 2023",
      category: "Program",
      year: 2023,
      month: "November",
      size: "1.7 MB",
      description: "Laporan penyaluran bantuan pupuk bersubsidi tahun 2023 dengan data penerima dan realisasi distribusi per wilayah.",
      downloadUrl: "#"
    },
    {
      id: 15,
      title: "Laporan Keuangan Tahunan 2023",
      category: "Keuangan",
      year: 2023,
      month: "Desember",
      size: "4.2 MB",
      description: "Laporan keuangan tahunan 2023 lengkap dengan audit dan rekomendasi perbaikan.",
      downloadUrl: "#"
    },
  ];

  const filteredReports = reportsData.filter(report => {
    const matchYear = report.year === selectedYear;
    const matchCategory = selectedCategory === "Semua" || report.category === selectedCategory;
    return matchYear && matchCategory;
  });

  const handleDownload = (report: Report) => {
    // Simulate download
    console.log(`Downloading: ${report.title}`);
    alert(`Download started: ${report.title}`);
  };

  return (
    <div ref={ref} className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[400px] w-full overflow-hidden bg-gradient-to-br from-[#039855] to-[#027a43] dark:from-[#027a43] dark:to-[#015c32]"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTEyIDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="relative h-full flex flex-col items-center justify-center px-[20px] md:px-[50px] lg:px-[100px]">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Poppins:Bold',sans-serif] text-[42px] md:text-[56px] text-white text-center mb-4"
          >
            Laporan & Dokumen
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-['Poppins:Regular',sans-serif] text-[18px] md:text-[20px] text-white/90 text-center max-w-2xl"
          >
            Akses laporan dan dokumen resmi Dinas Pertanian Kabupaten Jombang
          </motion.p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-[20px] md:px-[50px] lg:px-[100px] py-[60px]">
        {/* Filters */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-[50px]"
        >
          {/* Year Filter */}
          <div className="mb-[24px]">
            <div className="flex items-center gap-[12px] mb-[16px]">
              <Calendar className="w-[20px] h-[20px] text-[#039855] dark:text-[#04b866]" />
              <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#1f1f1f] dark:text-white">
                Tahun
              </p>
            </div>
            <div className="flex flex-wrap gap-[12px]">
              {years.map((year, index) => (
                <motion.button
                  key={year}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedYear(year)}
                  className={`px-[24px] py-[10px] rounded-[8px] font-['Poppins:Medium',sans-serif] text-[15px] transition-all duration-300 ${
                    selectedYear === year
                      ? 'bg-[#039855] dark:bg-[#027a43] text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-[#1f1f1f] dark:text-white border border-gray-200 dark:border-gray-700 hover:border-[#039855] dark:hover:border-[#04b866]'
                  }`}
                >
                  {year}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <div className="flex items-center gap-[12px] mb-[16px]">
              <Filter className="w-[20px] h-[20px] text-[#039855] dark:text-[#04b866]" />
              <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#1f1f1f] dark:text-white">
                Kategori
              </p>
            </div>
            <div className="flex flex-wrap gap-[12px]">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
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
          </div>
        </motion.div>

        {/* Reports List */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-[20px]"
        >
          {filteredReports.map((report, index) => (
            <motion.div
              key={report.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ x: 5 }}
              className="bg-white dark:bg-gray-800 rounded-[16px] p-[24px] border border-gray-200 dark:border-gray-700 transition-colors duration-300 group"
            >
              <div className="flex items-start gap-[20px]">
                {/* Icon */}
                <div className="bg-[#e8f5e9] dark:bg-[rgba(6,149,80,0.2)] p-[16px] rounded-[12px] shrink-0">
                  <FileText className="w-[32px] h-[32px] text-[#039855] dark:text-[#04b866]" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Title and Badge */}
                  <div className="flex items-start justify-between gap-[16px] mb-[8px]">
                    <h3 className="font-['Poppins:Bold',sans-serif] text-[20px] text-[#1f1f1f] dark:text-white group-hover:text-[#039855] dark:group-hover:text-[#04b866] transition-colors duration-300">
                      {report.title}
                    </h3>
                    <div className="bg-[#e8f5e9] dark:bg-[rgba(6,149,80,0.2)] px-[12px] py-[6px] rounded-[8px] shrink-0">
                      <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#039855] dark:text-[#04b866]">
                        {report.category}
                      </p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-[16px] mb-[12px] text-[#6b7280] dark:text-gray-400">
                    <div className="flex items-center gap-[6px]">
                      <Calendar className="w-[14px] h-[14px]" />
                      <p className="font-['Poppins:Regular',sans-serif] text-[14px]">
                        {report.month} {report.year}
                      </p>
                    </div>
                    <div className="flex items-center gap-[6px]">
                      <FileText className="w-[14px] h-[14px]" />
                      <p className="font-['Poppins:Regular',sans-serif] text-[14px]">
                        PDF • {report.size}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-[#6b7280] dark:text-gray-400 leading-[26px] mb-[16px]">
                    {report.description}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-[12px]">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDownload(report)}
                      className="flex items-center gap-[8px] px-[20px] py-[10px] bg-[#039855] dark:bg-[#027a43] hover:bg-[#027a43] dark:hover:bg-[#039855] text-white rounded-[8px] font-['Poppins:Medium',sans-serif] text-[14px] transition-colors duration-300"
                    >
                      <Download className="w-[16px] h-[16px]" />
                      Download
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-[8px] px-[20px] py-[10px] bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#1f1f1f] dark:text-white border border-gray-300 dark:border-gray-600 rounded-[8px] font-['Poppins:Medium',sans-serif] text-[14px] transition-colors duration-300"
                    >
                      <Eye className="w-[16px] h-[16px]" />
                      Preview
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredReports.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-[60px]"
          >
            <FileText className="w-[64px] h-[64px] text-[#6b7280] dark:text-gray-400 mx-auto mb-[16px]" />
            <p className="font-['Poppins:Medium',sans-serif] text-[18px] text-[#1f1f1f] dark:text-white mb-[8px]">
              Tidak ada laporan ditemukan
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-[#6b7280] dark:text-gray-400">
              Coba ubah filter tahun atau kategori
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
