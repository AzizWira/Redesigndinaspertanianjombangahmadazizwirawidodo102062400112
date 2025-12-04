import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Users, Target, Eye, Award, MapPin, Phone, Mail } from "lucide-react";

export function ProfilPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const stats = [
    { label: "Luas Lahan Pertanian", value: "15,420", unit: "Hektar", icon: MapPin },
    { label: "Petani Terdaftar", value: "8,750", unit: "Orang", icon: Users },
    { label: "Kelompok Tani", value: "142", unit: "Kelompok", icon: Award },
    { label: "Produksi Padi", value: "45,200", unit: "Ton/Tahun", icon: Target },
  ];

  const visiMisi = {
    visi: "Mewujudkan Pertanian Kabupaten Jombang yang Modern, Berkelanjutan, dan Berdaya Saing Tinggi untuk Kesejahteraan Petani",
    misi: [
      "Meningkatkan produktivitas dan kualitas hasil pertanian melalui penerapan teknologi modern",
      "Mengembangkan infrastruktur pertanian yang memadai dan berkelanjutan",
      "Memberdayakan petani melalui pelatihan, pendampingan, dan akses permodalan",
      "Memperkuat kelembagaan petani dan kemitraan dengan stakeholder",
      "Mendorong diversifikasi produk pertanian dan peningkatan nilai tambah"
    ]
  };

  const struktur = [
    { jabatan: "Kepala Dinas", nama: "Ir. Budiono, M.Si", nip: "196801051990031005" },
    { jabatan: "Sekretaris", nama: "Dr. Siti Nurjanah, S.P., M.P", nip: "197205121995032001" },
    { jabatan: "Kabid Tanaman Pangan", nama: "Drs. Ahmad Fauzi, M.M", nip: "196909201994031003" },
    { jabatan: "Kabid Hortikultura", nama: "Ir. Endang Sulistyowati, M.Si", nip: "197103151996032002" },
    { jabatan: "Kabid Perkebunan", nama: "Ir. Bambang Haryanto, M.P", nip: "196708081993031004" },
    { jabatan: "Kabid Prasarana", nama: "Ir. Dwi Cahyono, M.T", nip: "197404201998031006" },
  ];

  return (
    <div ref={ref} className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[400px] w-full overflow-hidden bg-gradient-to-br from-[#039855] to-[#027a43] dark:from-[#027a43] dark:to-[#015c32]"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS13OS00IDQgMS13OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00sy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS13OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS13OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS13OS00IDQgMS13OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00sy00 IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="relative h-full flex flex-col items-center justify-center px-[20px] md:px-[50px] lg:px-[100px]">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Poppins:Bold',sans-serif] text-[42px] md:text-[56px] text-white text-center mb-4"
          >
            Profil Dinas Pertanian
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-['Poppins:Regular',sans-serif] text-[18px] md:text-[20px] text-white/90 text-center max-w-2xl"
          >
            Kabupaten Jombang
          </motion.p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-[20px] md:px-[50px] lg:px-[100px] py-[60px]">
        {/* Stats Cards */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] -mt-[80px] mb-[60px] relative z-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-[16px] p-[24px] shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300"
            >
              <div className="flex items-start gap-[16px]">
                <div className="bg-[#e8f5e9] dark:bg-[rgba(6,149,80,0.2)] p-[12px] rounded-[12px]">
                  <stat.icon className="w-[28px] h-[28px] text-[#039855] dark:text-[#04b866]" />
                </div>
                <div className="flex-1">
                  <p className="font-['Poppins:Bold',sans-serif] text-[28px] text-[#039855] dark:text-[#04b866]">
                    {stat.value}
                  </p>
                  <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#6b7280] dark:text-gray-400">
                    {stat.unit}
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#1f1f1f] dark:text-white mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Visi Misi */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-[60px]"
        >
          {/* Visi */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#039855] to-[#027a43] dark:from-[#027a43] dark:to-[#015c32] rounded-[20px] p-[32px] text-white"
          >
            <div className="flex items-center gap-[12px] mb-[20px]">
              <Eye className="w-[32px] h-[32px]" />
              <h2 className="font-['Poppins:Bold',sans-serif] text-[28px]">Visi</h2>
            </div>
            <p className="font-['Poppins:Regular',sans-serif] text-[16px] leading-[28px] text-white/95">
              {visiMisi.visi}
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-[20px] p-[32px] border border-gray-200 dark:border-gray-700 transition-colors duration-300"
          >
            <div className="flex items-center gap-[12px] mb-[20px]">
              <Target className="w-[32px] h-[32px] text-[#039855] dark:text-[#04b866]" />
              <h2 className="font-['Poppins:Bold',sans-serif] text-[28px] text-[#1f1f1f] dark:text-white">Misi</h2>
            </div>
            <ul className="space-y-[12px]">
              {visiMisi.misi.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex gap-[12px] items-start"
                >
                  <div className="bg-[#039855] dark:bg-[#04b866] rounded-full w-[8px] h-[8px] mt-[8px] flex-shrink-0" />
                  <p className="font-['Poppins:Regular',sans-serif] text-[15px] leading-[26px] text-[#1f1f1f] dark:text-gray-300">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Struktur Organisasi */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-[60px]"
        >
          <div className="text-center mb-[40px]">
            <h2 className="font-['Poppins:Bold',sans-serif] text-[36px] text-[#039855] dark:text-[#04b866] mb-[12px]">
              Struktur Organisasi
            </h2>
            <p className="font-['Poppins:Regular',sans-serif] text-[16px] text-[#6b7280] dark:text-gray-400">
              Pejabat Struktural Dinas Pertanian Kabupaten Jombang
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {struktur.map((person, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(0,0,0,0.15)" }}
                className="bg-white dark:bg-gray-800 rounded-[16px] p-[24px] border border-gray-200 dark:border-gray-700 transition-colors duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-[#039855] to-[#027a43] flex items-center justify-center mb-[16px]">
                    <Users className="w-[36px] h-[36px] text-white" />
                  </div>
                  <div className="bg-[#e8f5e9] dark:bg-[rgba(6,149,80,0.2)] px-[12px] py-[4px] rounded-[6px] mb-[12px]">
                    <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#039855] dark:text-[#04b866]">
                      {person.jabatan}
                    </p>
                  </div>
                  <h3 className="font-['Poppins:Bold',sans-serif] text-[18px] text-[#1f1f1f] dark:text-white mb-[4px]">
                    {person.nama}
                  </h3>
                  <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#6b7280] dark:text-gray-400">
                    NIP: {person.nip}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Kontak */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="bg-gradient-to-r from-[#039855] to-[#027a43] dark:from-[#027a43] dark:to-[#015c32] rounded-[20px] p-[40px] text-white"
        >
          <h2 className="font-['Poppins:Bold',sans-serif] text-[32px] text-center mb-[32px]">
            Hubungi Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-[32px] h-[32px] mb-[12px]" />
              <p className="font-['Poppins:Medium',sans-serif] text-[16px] mb-[8px]">Alamat</p>
              <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-white/90">
                Jl. Merdeka No. 123, Jombang, Jawa Timur 61419
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Phone className="w-[32px] h-[32px] mb-[12px]" />
              <p className="font-['Poppins:Medium',sans-serif] text-[16px] mb-[8px]">Telepon</p>
              <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-white/90">
                (0321) 861234<br />0812-3456-7890
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Mail className="w-[32px] h-[32px] mb-[12px]" />
              <p className="font-['Poppins:Medium',sans-serif] text-[16px] mb-[8px]">Email</p>
              <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-white/90">
                dinas.pertanian@jombangkab.go.id
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}