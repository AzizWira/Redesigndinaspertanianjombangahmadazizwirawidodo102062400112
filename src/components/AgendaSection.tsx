import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import svgPaths from "../imports/svg-3teut0pqba";
import imgRectangle3 from "figma:asset/5cf78afa087d9db08ea65d873c8d433d7e2c189d.png";
import { Eye, X, Calendar, Clock, MapPin, Users } from "lucide-react";

interface Event {
  id: number;
  title: string;
  category: string;
  time: string;
  date: string;
  status: "upcoming" | "completed" | "ongoing";
  description?: string;
  location?: string;
  participants?: string;
}

// Helper function untuk mendapatkan tanggal WIB
const getWIBDate = () => {
  const now = new Date();
  const wibOffset = 7 * 60; // WIB is UTC+7
  const localOffset = now.getTimezoneOffset();
  const wibTime = new Date(now.getTime() + (wibOffset + localOffset) * 60000);
  return wibTime;
};

export function AgendaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // State untuk kalender - menggunakan WIB
  const [currentWeekStart, setCurrentWeekStart] = useState(() => {
    const today = getWIBDate();
    const day = today.getDay();
    const diff = today.getDate() - day;
    const weekStart = new Date(today);
    weekStart.setDate(diff);
    weekStart.setHours(0, 0, 0, 0);
    return weekStart;
  });
  
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = getWIBDate();
    today.setHours(0, 0, 0, 0);
    return today;
  });

  // State untuk popup detail
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Dummy data events - Tanggal: 1, 3, 6, 11, 13, 17, 20, 22, 25, 28, 30
  const events: Event[] = [
    { 
      id: 1, 
      title: "Pelatihan Petani Organik", 
      category: "Pertanian", 
      time: "08.00 - 12.00", 
      date: "2025-12-01", 
      status: "upcoming",
      description: "Pelatihan intensif tentang teknik pertanian organik modern untuk meningkatkan hasil panen tanpa menggunakan pestisida kimia. Peserta akan belajar tentang pembuatan pupuk organik, pengendalian hama alami, dan teknik pengolahan tanah yang berkelanjutan.",
      location: "Balai Desa Jombang, Ruang Serbaguna Lantai 2",
      participants: "50 Petani"
    },
    { 
      id: 2, 
      title: "Workshop Pupuk Kompos", 
      category: "Pelatihan", 
      time: "09.00 - 15.00", 
      date: "2025-12-03", 
      status: "upcoming",
      description: "Workshop praktis pembuatan pupuk kompos dari limbah organik rumah tangga dan pertanian. Materi mencakup pemilihan bahan, proses pengomposan, dan aplikasi pupuk kompos pada tanaman.",
      location: "Lapangan Desa, Area Demonstrasi",
      participants: "35 Peserta"
    },
    { 
      id: 3, 
      title: "Kunjungan Sawah Demplot", 
      category: "Pertanian", 
      time: "08.00 - 11.00", 
      date: "2025-12-06", 
      status: "completed",
      description: "Kunjungan lapangan ke sawah demonstrasi plot (demplot) untuk melihat langsung penerapan teknologi pertanian modern dan varietas padi unggul. Dilanjutkan dengan diskusi hasil panen dan evaluasi.",
      location: "Sawah Demplot Blok A, Desa Jombang",
      participants: "45 Petani & Penyuluh"
    },
    { 
      id: 4, 
      title: "Seminar Teknologi Pertanian", 
      category: "Inovasi", 
      time: "13.00 - 17.00", 
      date: "2025-12-11", 
      status: "upcoming",
      description: "Seminar nasional tentang inovasi teknologi pertanian 4.0, termasuk penggunaan drone untuk monitoring lahan, sensor IoT untuk irigasi otomatis, dan aplikasi mobile untuk manajemen pertanian.",
      location: "Aula Utama Kecamatan Jombang",
      participants: "120 Peserta"
    },
    { 
      id: 5, 
      title: "Pelatihan Irigasi Modern", 
      category: "Infrastruktur", 
      time: "10.00 - 14.00", 
      date: "2025-12-13", 
      status: "upcoming",
      description: "Pelatihan teknis instalasi dan perawatan sistem irigasi tetes dan sprinkler untuk efisiensi penggunaan air. Termasuk praktik langsung di lapangan demonstrasi.",
      location: "Balai Pelatihan Pertanian Kabupaten",
      participants: "30 Petani"
    },
    { 
      id: 6, 
      title: "Panen Raya Padi", 
      category: "Pertanian", 
      time: "07.00 - 11.00", 
      date: "2025-12-17", 
      status: "completed",
      description: "Acara panen raya padi dengan menggunakan combine harvester modern. Kegiatan dihadiri oleh Bupati dan Dinas Pertanian untuk melihat produktivitas hasil panen varietas unggul.",
      location: "Sawah Raya Desa Jombang (10 Hektar)",
      participants: "200 Petani & Tamu Undangan"
    },
    { 
      id: 7, 
      title: "Sosialisasi Bibit Unggul", 
      category: "Pertanian", 
      time: "08.00 - 12.00", 
      date: "2025-12-20", 
      status: "upcoming",
      description: "Sosialisasi dan pembagian bibit padi unggul bersertifikat kepada petani. Program kerjasama dengan Balai Besar Penelitian Padi untuk meningkatkan produktivitas padi lokal.",
      location: "Kantor Dinas Pertanian Kabupaten",
      participants: "80 Petani Penerima Bantuan"
    },
    { 
      id: 8, 
      title: "Pertemuan Petani Indonesia", 
      category: "Pertanian", 
      time: "07.00 - 12.00", 
      date: "2025-12-22", 
      status: "upcoming",
      description: "Forum pertemuan petani se-Indonesia untuk berbagi pengalaman, diskusi tantangan pertanian modern, dan networking antar kelompok tani. Dihadiri oleh narasumber dari Kementerian Pertanian.",
      location: "Gedung Serbaguna Kabupaten Jombang",
      participants: "300 Petani dari berbagai daerah"
    },
    { 
      id: 9, 
      title: "Rapat Koordinasi Kelompok Tani", 
      category: "Administrasi", 
      time: "14.00 - 16.00", 
      date: "2025-12-25", 
      status: "upcoming",
      description: "Rapat koordinasi rutin pengurus kelompok tani untuk evaluasi program semester 2 dan perencanaan kegiatan tahun depan. Pembahasan proposal bantuan alat dan mesin pertanian.",
      location: "Sekretariat Gapoktan Jombang",
      participants: "25 Pengurus Kelompok Tani"
    },
    { 
      id: 10, 
      title: "Pembagian Bantuan Pupuk", 
      category: "Pertanian", 
      time: "09.00 - 12.00", 
      date: "2025-12-28", 
      status: "completed",
      description: "Distribusi bantuan pupuk bersubsidi untuk musim tanam mendatang. Setiap petani terdaftar mendapat kuota pupuk Urea, NPK, dan organik sesuai luas lahan.",
      location: "Gudang Distribusi Pupuk Desa",
      participants: "150 Petani Penerima"
    },
    { 
      id: 11, 
      title: "Evaluasi Program Tahunan", 
      category: "Administrasi", 
      time: "13.00 - 17.00", 
      date: "2025-12-30", 
      status: "upcoming",
      description: "Evaluasi komprehensif seluruh program pertanian tahun 2025, presentasi capaian target, dan penyusunan rencana kerja tahun 2026. Pembahasan anggaran dan prioritas kegiatan.",
      location: "Ruang Rapat Dinas Pertanian",
      participants: "40 Pejabat & Penyuluh"
    },
  ];

  // Fungsi untuk menentukan status event berdasarkan tanggal
  const getEventStatus = (eventDate: string): "upcoming" | "ongoing" | "completed" => {
    const today = getWIBDate();
    today.setHours(0, 0, 0, 0);
    const todayStr = today.toISOString().split('T')[0];
    
    const eventDateObj = new Date(eventDate);
    eventDateObj.setHours(0, 0, 0, 0);
    
    if (eventDate < todayStr) {
      return "completed";
    } else if (eventDate === todayStr) {
      return "ongoing";
    } else {
      return "upcoming";
    }
  };

  // Format tanggal untuk display
  const formatEventDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", 
                       "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    
    const dayName = dayNames[date.getDay()];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    
    return `${dayName}, ${day} ${month} ${year}`;
  };

  // Generate days untuk minggu saat ini
  const generateDays = () => {
    const days = [];
    const dayNames = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentWeekStart);
      date.setDate(currentWeekStart.getDate() + i);
      
      const dateStr = date.toISOString().split('T')[0];
      const hasEvent = events.some(event => event.date === dateStr);
      const isActive = date.toDateString() === selectedDate.toDateString();
      const isWeekend = i === 0 || i === 6;
      
      days.push({
        day: dayNames[i],
        date: date.getDate().toString(),
        fullDate: date,
        isWeekend,
        hasEvent,
        isActive
      });
    }
    
    return days;
  };

  const days = generateDays();

  // Handlers
  const handlePrevWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(currentWeekStart.getDate() - 7);
    setCurrentWeekStart(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(newDate);
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleOpenDetail = (event: Event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  // Get events for selected date with dynamic status
  const getEventsForSelectedDate = () => {
    const dateStr = selectedDate.toISOString().split('T')[0];
    return events
      .filter(event => event.date === dateStr)
      .map(event => ({
        ...event,
        status: getEventStatus(event.date)
      }));
  };

  // Get month name with year
  const getMonthName = () => {
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", 
                       "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    return `${monthNames[currentWeekStart.getMonth()]} ${currentWeekStart.getFullYear()}`;
  };

  const selectedEvents = getEventsForSelectedDate();

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
        Agenda Desa Kabupaten
      </motion.p>

      <div className="content-stretch flex flex-col lg:flex-row gap-[20px] items-start justify-center w-full">
        {/* Left - Event Card */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0px 20px 40px rgba(0,0,0,0.3)"
          }}
          className="box-border content-stretch flex flex-col gap-[10px] items-start justify-end px-[36px] py-[24px] rounded-[23px] shrink-0 w-full lg:w-[796px] min-h-[445px] relative overflow-hidden cursor-pointer group"
        >
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none rounded-[23px]">
            <motion.img 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              alt="Event" 
              className="absolute max-w-none object-50%-50% object-cover rounded-[23px] size-full" 
              src={imgRectangle3} 
            />
            <div className="absolute h-[445px] left-0 rounded-[23px] top-0 w-full bg-gradient-to-b from-transparent to-black/60" />
          </div>

          {/* Content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 z-10"
          >
            <div className="content-stretch flex flex-col items-start not-italic text-white w-full">
              <p className="font-['Poppins:Bold',sans-serif] leading-[38px] text-[30px] w-full">
                Pertemuan Petani Indonesia
              </p>
              <p className="font-['Poppins:Medium',sans-serif] leading-[24px] text-[16px] w-full">
                07.00 - 12.00 | Jumat, 22 November 2025
              </p>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="content-stretch flex gap-[14px] items-center relative shrink-0 z-10"
          >
            {["Pertanian", "Inovasi"].map((tag, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[6px] items-center px-[14px] py-[7px] rounded-[5px] backdrop-blur-sm border border-white/30 transition-colors duration-200"
              >
                <p className="font-['Poppins:Regular',sans-serif] leading-[28px] not-italic text-[18px] text-center text-nowrap text-white whitespace-pre">
                  {tag}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Calendar and Event Info */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px w-full"
        >
          {/* Calendar Card */}
          <div className="bg-white dark:bg-gray-800 relative rounded-[11px] shrink-0 w-full border border-[rgba(0,0,0,0.23)] dark:border-[rgba(255,255,255,0.23)] transition-colors duration-300">
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col gap-[18px] items-start p-[20px] relative w-full">
                {/* Calendar Header */}
                <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-start not-italic text-[#1f1f1f] dark:text-white w-full transition-colors duration-300">
                    <p className="font-['Poppins:Bold',sans-serif] leading-[30px] text-[22px] w-full">
                      Agenda Desa Jombang
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] leading-[22px] text-[14px] dark:text-gray-300 w-full transition-colors duration-300">
                      Dapatkan informasi terkait semua kegiatan yang dilakukan di Jawa Barat.
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#039855] dark:bg-[#027a43] relative rounded-[10px] shrink-0 w-full cursor-pointer transition-colors duration-300"
                  >
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[4px] relative w-full">
                        <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic text-[16px] text-nowrap text-white whitespace-pre">
                          {getMonthName()}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Calendar Days - All 7 days visible */}
                <div className="content-stretch flex gap-[6px] md:gap-[8px] items-center justify-between w-full">
                  {days.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.08, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                      className={`box-border content-stretch flex flex-col gap-[2px] items-center px-[4px] py-[4px] rounded-[8px] flex-1 cursor-pointer transition-all duration-200 relative ${
                        item.isActive 
                          ? 'bg-[#039855] dark:bg-[#027a43]' 
                          : item.hasEvent
                          ? 'bg-[#e8f5e9] dark:bg-[rgba(6,149,80,0.15)] border border-[#039855]/30 dark:border-[#04b866]/30'
                          : 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => handleDateClick(item.fullDate)}
                    >
                      {/* Event Indicator Dot */}
                      {item.hasEvent && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-[2px] right-[2px] w-[6px] h-[6px] rounded-full bg-[#039855] dark:bg-[#04b866]"
                        />
                      )}
                      
                      <p className={`font-['Poppins:Medium',sans-serif] leading-[18px] not-italic text-[12px] md:text-[13px] text-center ${
                        item.isActive ? 'text-white' : item.isWeekend ? 'text-[#ff383c]' : item.hasEvent ? 'text-[#039855] dark:text-[#04b866]' : 'text-[#1f1f1f] dark:text-white'
                      } transition-colors duration-300`}>
                        {item.day}
                      </p>
                      <p className={`font-['Poppins:Bold',sans-serif] leading-[22px] not-italic text-[15px] md:text-[16px] text-center ${
                        item.isActive ? 'text-white' : item.isWeekend ? 'text-[#ff383c]' : item.hasEvent ? 'text-[#039855] dark:text-[#04b866]' : 'text-[#1f1f1f] dark:text-white'
                      } transition-colors duration-300`}>
                        {item.date}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation Arrows - Positioned below calendar */}
                <div className="flex items-center justify-center gap-[16px] w-full">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePrevWeek}
                    className="flex items-center justify-center cursor-pointer p-2"
                  >
                    <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                      <div className="h-[24px] relative w-[12px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
                          <path clipRule="evenodd" d={svgPaths.p1093a180} fill="currentColor" fillRule="evenodd" className="dark:fill-white" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#1f1f1f] dark:text-white transition-colors duration-300">
                    Minggu {Math.ceil(currentWeekStart.getDate() / 7)}
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNextWeek}
                    className="cursor-pointer p-2"
                  >
                    <div className="h-[24px] relative w-[12px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
                        <path clipRule="evenodd" d={svgPaths.p1093a180} fill="currentColor" fillRule="evenodd" className="dark:fill-white" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Cards - Display all events for selected date */}
          {selectedEvents.length > 0 ? (
            selectedEvents.map(event => {
              const statusConfig = {
                completed: {
                  bg: 'bg-[#e8f5e9] dark:bg-[rgba(6,149,80,0.2)]',
                  text: 'text-[#039855] dark:text-[#04b866]',
                  label: 'Telah Selesai'
                },
                ongoing: {
                  bg: 'bg-[#fef3c7] dark:bg-[rgba(251,191,36,0.2)]',
                  text: 'text-[#f59e0b] dark:text-[#fbbf24]',
                  label: 'Sedang Berlangsung'
                },
                upcoming: {
                  bg: 'bg-[#dbeafe] dark:bg-[rgba(59,130,246,0.2)]',
                  text: 'text-[#3b82f6] dark:text-[#60a5fa]',
                  label: 'Akan Datang'
                }
              };

              const config = statusConfig[event.status];

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white dark:bg-gray-800 relative rounded-[11px] shrink-0 w-full border border-[rgba(0,0,0,0.15)] dark:border-[rgba(255,255,255,0.15)] transition-colors duration-300"
                >
                  <div className="size-full">
                    <div className="box-border content-stretch flex gap-[8px] items-start p-[16px] relative w-full">
                      <div className="basis-0 content-stretch flex flex-col gap-[6px] grow min-h-px min-w-px">
                        <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic text-[#039855] dark:text-[#04b866] text-[15px] w-full transition-colors duration-300">
                          {event.category}
                        </p>
                        <div className="content-stretch flex flex-col items-start not-italic w-full">
                          <p className="font-['Poppins:Bold',sans-serif] leading-[26px] text-[18px] text-[#1f1f1f] dark:text-white w-full transition-colors duration-300">
                            {event.title}
                          </p>
                          <p className="font-['Poppins:Regular',sans-serif] leading-[24px] text-[14px] text-[#1f1f1f] dark:text-gray-300 w-full transition-colors duration-300">
                            {event.time}
                          </p>
                          <p className="font-['Poppins:Regular',sans-serif] leading-[22px] text-[13px] text-[#6b7280] dark:text-gray-400 w-full transition-colors duration-300 mt-[2px]">
                            {formatEventDate(event.date)}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[8px] items-end">
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          className={`box-border content-stretch flex gap-[8px] items-center justify-center px-[10px] py-[3px] rounded-[4px] transition-colors duration-300 ${config.bg}`}
                        >
                          <p className={`font-['Poppins:Medium',sans-serif] leading-[20px] not-italic text-[13px] text-center text-nowrap whitespace-pre transition-colors duration-300 ${config.text}`}>
                            {config.label}
                          </p>
                        </motion.div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleOpenDetail(event)}
                          className="flex items-center gap-[6px] px-[10px] py-[4px] rounded-[6px] bg-[#039855] dark:bg-[#027a43] hover:bg-[#027a43] dark:hover:bg-[#039855] transition-colors duration-200"
                        >
                          <Eye className="w-[14px] h-[14px] text-white" />
                          <span className="font-['Poppins:Medium',sans-serif] text-[12px] text-white">Detail</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 relative rounded-[11px] shrink-0 w-full border border-[rgba(0,0,0,0.15)] dark:border-[rgba(255,255,255,0.15)] transition-colors duration-300"
            >
              <div className="size-full">
                <div className="box-border content-stretch flex gap-[12px] items-center justify-center p-[24px] relative w-full">
                  <p className="font-['Poppins:Regular',sans-serif] leading-[24px] text-[15px] text-[#6b7280] dark:text-gray-400 text-center transition-colors duration-300">
                    Tidak ada kegiatan pada tanggal ini
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Event Detail Dialog/Popup */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800">
          <DialogHeader>
            <DialogTitle className="font-['Poppins:Bold',sans-serif] text-[24px] text-[#039855] dark:text-[#04b866] pr-8">
              {selectedEvent?.title}
            </DialogTitle>
            <DialogDescription className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#6b7280] dark:text-gray-400">
              Detail informasi lengkap tentang kegiatan ini
            </DialogDescription>
          </DialogHeader>
          {selectedEvent && (
            <div className="flex flex-col gap-[20px] mt-[12px]">
              {/* Category Badge */}
              <div className="inline-flex">
                <div className="bg-[#e8f5e9] dark:bg-[rgba(6,149,80,0.2)] px-[12px] py-[4px] rounded-[6px]">
                  <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#039855] dark:text-[#04b866]">
                    {selectedEvent.category}
                  </p>
                </div>
              </div>

              {/* Event Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                <div className="flex items-start gap-[12px]">
                  <Calendar className="w-[20px] h-[20px] text-[#039855] dark:text-[#04b866] mt-[2px] flex-shrink-0" />
                  <div>
                    <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#6b7280] dark:text-gray-400">
                      Tanggal
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-[#1f1f1f] dark:text-white">
                      {formatEventDate(selectedEvent.date)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-[12px]">
                  <Clock className="w-[20px] h-[20px] text-[#039855] dark:text-[#04b866] mt-[2px] flex-shrink-0" />
                  <div>
                    <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#6b7280] dark:text-gray-400">
                      Waktu
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-[#1f1f1f] dark:text-white">
                      {selectedEvent.time} WIB
                    </p>
                  </div>
                </div>

                {selectedEvent.location && (
                  <div className="flex items-start gap-[12px]">
                    <MapPin className="w-[20px] h-[20px] text-[#039855] dark:text-[#04b866] mt-[2px] flex-shrink-0" />
                    <div>
                      <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#6b7280] dark:text-gray-400">
                        Lokasi
                      </p>
                      <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-[#1f1f1f] dark:text-white">
                        {selectedEvent.location}
                      </p>
                    </div>
                  </div>
                )}

                {selectedEvent.participants && (
                  <div className="flex items-start gap-[12px]">
                    <Users className="w-[20px] h-[20px] text-[#039855] dark:text-[#04b866] mt-[2px] flex-shrink-0" />
                    <div>
                      <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#6b7280] dark:text-gray-400">
                        Peserta
                      </p>
                      <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-[#1f1f1f] dark:text-white">
                        {selectedEvent.participants}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              {selectedEvent.description && (
                <div className="flex flex-col gap-[8px]">
                  <p className="font-['Poppins:Bold',sans-serif] text-[16px] text-[#1f1f1f] dark:text-white">
                    Deskripsi
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-[#6b7280] dark:text-gray-300 leading-[26px]">
                    {selectedEvent.description}
                  </p>
                </div>
              )}

              {/* Status Badge */}
              <div className="flex items-center gap-[8px] pt-[8px] border-t border-gray-200 dark:border-gray-700">
                <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#6b7280] dark:text-gray-400">
                  Status:
                </p>
                <div className={`px-[12px] py-[4px] rounded-[6px] ${
                  selectedEvent.status === 'completed' 
                    ? 'bg-[#e8f5e9] dark:bg-[rgba(6,149,80,0.2)]'
                    : selectedEvent.status === 'ongoing'
                    ? 'bg-[#fef3c7] dark:bg-[rgba(251,191,36,0.2)]'
                    : 'bg-[#dbeafe] dark:bg-[rgba(59,130,246,0.2)]'
                }`}>
                  <p className={`font-['Poppins:Medium',sans-serif] text-[14px] ${
                    selectedEvent.status === 'completed'
                      ? 'text-[#039855] dark:text-[#04b866]'
                      : selectedEvent.status === 'ongoing'
                      ? 'text-[#f59e0b] dark:text-[#fbbf24]'
                      : 'text-[#3b82f6] dark:text-[#60a5fa]'
                  }`}>
                    {selectedEvent.status === 'completed' ? 'Telah Selesai' : selectedEvent.status === 'ongoing' ? 'Sedang Berlangsung' : 'Akan Datang'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}