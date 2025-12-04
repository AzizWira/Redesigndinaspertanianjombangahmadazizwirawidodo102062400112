import svgPaths from "./svg-3teut0pqba";
import imgDownload from "figma:asset/1918364656a4254a4bb7544c2c1b8e12c09e59d3.png";
import imgFrame1171276024 from "figma:asset/69db144352ce303218b660abbcf7baedc7d4b560.png";
import imgRectangle3 from "figma:asset/5cf78afa087d9db08ea65d873c8d433d7e2c189d.png";
import imgRectangle8 from "figma:asset/edbb09d5026aee09a46d49cf9c9ce670a06d5f6b.png";
import imgRectangle9 from "figma:asset/31889d8f3a7badf437cd8465e43c7b2f472974a1.png";
import imgRectangle10 from "figma:asset/f28e7fd9b2b27cef705bad61b532ff59a9cc1b86.png";
import imgRectangle11 from "figma:asset/cd2fb5b3b46dc5116a2b6f33d73494cd4a07c79d.png";
import imgRectangle12 from "figma:asset/df20cb63b46bf9d3fbe6c7186eeda432ba12d6ec.png";
import imgRectangle13 from "figma:asset/c5ad9cbf9f98f755f37b6f74fbba8d4184200d60.png";
import imgRectangle1 from "figma:asset/8afc39112fd9637332368aac00df70cffcd44dfc.png";

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Manrope:Medium',sans-serif] font-medium h-[19.394px] leading-[normal] ml-0 mt-0 relative text-[#3f78e0] text-[14px] w-[106.159px]">Dinas Pertanian</p>
      <p className="[grid-area:1_/_1] font-['Manrope:Bold',sans-serif] font-bold h-[27.561px] leading-[30px] ml-0 mt-[19.39px] relative text-[#1f1f1f] text-[20px] w-[203.131px]">Kabupaten Jombang</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[10px] items-center ml-0 mt-0 relative w-[295px]">
      <div className="h-[57px] relative shrink-0 w-[46px]" data-name="download">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDownload} />
      </div>
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex font-['Manrope:Medium',sans-serif] font-medium items-center justify-between leading-[30px] relative shrink-0 text-[20px] text-black text-nowrap w-[505px] whitespace-pre">
      <p className="relative shrink-0">Beranda</p>
      <p className="relative shrink-0">Profil</p>
      <p className="relative shrink-0">Galeri</p>
      <p className="relative shrink-0">Berita</p>
      <p className="relative shrink-0">Laporan</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[1000px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[40px] py-[20px] relative w-full">
          <Group1 />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start not-italic relative shrink-0 text-center text-white w-full">
      <p className="font-['Poppins:Bold',sans-serif] leading-[60px] relative shrink-0 text-[48px] w-full whitespace-pre-wrap">{`Mewujudkan Ketahanan Pangan dari Jantung Desa  Jombang`}</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[30px] relative shrink-0 text-[20px] w-full">Mengelola potensi alam dengan kearifan lokal dan teknologi modern untuk hasil bumi berkualitas.</p>
    </div>
  );
}

function IconamoonSearchBold() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="iconamoon:search-bold">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="iconamoon:search-bold">
          <path d={svgPaths.p2b554e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <IconamoonSearchBold />
      <p className="font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white whitespace-pre">Cari Informasi Disini</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#039855] box-border content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[8px] relative rounded-[39px] shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white whitespace-pre">Cari</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[284px] items-center justify-center p-[12px] relative rounded-[1000px] shrink-0">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function IconParkOutlineShare() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-park-outline:share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-park-outline:share">
          <path d={svgPaths.pf895a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[6px] items-center px-[14px] py-[7px] relative rounded-[5px] shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white whitespace-pre">Padi</p>
      <IconParkOutlineShare />
    </div>
  );
}

function IconParkOutlineShare1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-park-outline:share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-park-outline:share">
          <path d={svgPaths.pf895a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[6px] items-center px-[14px] py-[7px] relative rounded-[5px] shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white whitespace-pre">Jagung</p>
      <IconParkOutlineShare1 />
    </div>
  );
}

function IconParkOutlineShare2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-park-outline:share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-park-outline:share">
          <path d={svgPaths.pf895a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[6px] items-center px-[14px] py-[7px] relative rounded-[5px] shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white whitespace-pre">Petani</p>
      <IconParkOutlineShare2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-[381px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-white w-full">Pencarian Populer</p>
      <Frame10 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0">
      <Frame6 />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-center relative shrink-0 w-full">
      <Frame3 />
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Poppins:Bold',sans-serif] leading-[38px] relative shrink-0 text-[#039855] text-[30px] w-full">Layanan Publik</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#1f1f1f] text-[14px] w-full">Temukan informasi penting tentang pendidikan, kesehatan, dan lainnya, serta dapatkan panduan berguna untuk setiap tahapan kehidupan Anda.</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#039855] box-border content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[8px] relative rounded-[39px] shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white whitespace-pre">Cek Pelayanan Lainnya</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[31px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame14 />
      <Frame19 />
    </div>
  );
}

function LetsIconsPaperFill() {
  return (
    <div className="relative shrink-0 size-[31px]" data-name="lets-icons:paper-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g id="lets-icons:paper-fill">
          <path clipRule="evenodd" d={svgPaths.p1a524ac0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#039855] box-border content-stretch flex gap-[10px] items-center p-[10px] relative rounded-[7px] shrink-0">
      <LetsIconsPaperFill />
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[3px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Poppins:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#1f1f1f] text-[18px] w-full">Administrasi Kependudukan</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-[rgba(31,31,31,0.63)] w-full">Akses lebih mudah informasi seputar urusan administrasi dan data kependudukan anda</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="box-border content-stretch flex gap-[23px] items-start px-[12px] py-[11px] relative rounded-[11px] shrink-0 w-[348px]">
      <div aria-hidden="true" className="absolute border border-[rgba(31,31,31,0.18)] border-solid inset-0 pointer-events-none rounded-[11px]" />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[27px] items-center justify-center relative shrink-0 w-full">
      {[...Array(2).keys()].map((_, i) => (
        <Frame17 key={i} />
      ))}
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative self-stretch shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Frame21 key={i} />
      ))}
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)] shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-start justify-center px-[30px] py-[37px] relative w-full">
          <Frame22 />
          <div className="bg-[rgba(31,31,31,0.3)] self-stretch shrink-0 w-[2px]" />
          <Frame46 />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Poppins:Bold',sans-serif] leading-[32px] relative shrink-0 text-[24px] text-white w-full">Sistem Pertanian Karya Anak Bangsa</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#d0d5dd] text-[14px] w-full">Lorem ipsum dolor sit amet, consectetur Maecenas et velit sem belajar dirumah online</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[20px] shrink-0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[20px] size-full" src={imgFrame1171276024} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[20px] to-[#069550] via-0% via-[rgba(0,0,0,0)]" />
      </div>
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[17px] items-start justify-end not-italic pb-[20px] pt-[100px] px-[20px] relative w-full">
          <Frame45 />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-[#d0d5dd] text-[16px] w-full">20 Juni 2022</p>
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[20px] h-[287px] items-center relative shrink-0 w-full">
      {[...Array(3).keys()].map((_, i) => (
        <Frame64 key={i} />
      ))}
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <p className="font-['Poppins:Bold',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#039855] text-[30px] text-center w-full">{`Berita & Artikel`}</p>
      <Frame65 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[445px] left-0 rounded-[19px] top-0 w-[796px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[19px] size-full" src={imgRectangle3} />
      </div>
      <div className="absolute h-[445px] left-0 rounded-[19px] top-0 w-[796px]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-white w-full">
      <p className="font-['Poppins:Bold',sans-serif] leading-[38px] relative shrink-0 text-[30px] w-full">Pertemuan Petani Indonesia</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-full">07.00 - 12.00 | Jumat, 22 November 2025</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[468px]">
      <Frame24 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[6px] items-center px-[14px] py-[7px] relative rounded-[5px] shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white whitespace-pre">Pertanian</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[6px] items-center px-[14px] py-[7px] relative rounded-[5px] shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white whitespace-pre">Inovasi</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[445px] items-start justify-end px-[36px] py-[24px] relative rounded-[23px] shrink-0 w-[796px]">
      <Group3 />
      <Frame25 />
      <Frame23 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#1f1f1f] w-full">
      <p className="font-['Poppins:Bold',sans-serif] leading-[32px] relative shrink-0 text-[24px] w-full">Agenda Desa Jombang</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-full">Dapatkan informasi terkait semua kegiatan yang dilakukan di Jawa Barat.</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#039855] relative rounded-[13px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[18px] py-[6px] relative w-full">
          <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">November</p>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function WeuiArrowFilled() {
  return (
    <div className="h-[24px] relative w-[12px]" data-name="weui:arrow-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="weui:arrow-filled">
          <path clipRule="evenodd" d={svgPaths.p1093a180} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="box-border content-stretch flex flex-col items-center px-[9px] py-[5px] relative rounded-[9px] shrink-0 w-[47px]">
      <div className="relative shrink-0 size-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #039855)" id="Ellipse 1" r="3" />
        </svg>
      </div>
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#ff383c] text-[16px] w-[min-content]">Min</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[#ff383c] text-[18px] text-center w-[min-content]">16</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#039855] box-border content-stretch flex flex-col items-center px-[9px] py-[5px] relative rounded-[9px] shrink-0 w-[47px]">
      <div className="relative shrink-0 size-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #FFDD00)" id="Ellipse 1" r="3" />
        </svg>
      </div>
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white w-[39px]">Sen</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[18px] text-center text-white w-[min-content]">17</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="box-border content-stretch flex flex-col items-center px-[9px] py-[5px] relative rounded-[9px] shrink-0 w-[47px]">
      <div className="relative shrink-0 size-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #039855)" id="Ellipse 1" r="3" />
        </svg>
      </div>
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1f1f1f] text-[16px] text-center w-[39px]">Sel</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[#1f1f1f] text-[18px] text-center w-[min-content]">18</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="box-border content-stretch flex flex-col items-center px-[9px] py-[5px] relative rounded-[9px] shrink-0 w-[47px]">
      <div className="relative shrink-0 size-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #039855)" id="Ellipse 1" r="3" />
        </svg>
      </div>
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1f1f1f] text-[16px] text-center w-[39px]">Rab</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[#1f1f1f] text-[18px] text-center w-[min-content]">19</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="box-border content-stretch flex flex-col items-center px-[9px] py-[5px] relative rounded-[9px] shrink-0 w-[47px]">
      <div className="relative shrink-0 size-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #039855)" id="Ellipse 1" r="3" />
        </svg>
      </div>
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1f1f1f] text-[16px] text-center w-[39px]">Kam</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[#1f1f1f] text-[18px] text-center w-[min-content]">20</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="box-border content-stretch flex flex-col items-center px-[9px] py-[5px] relative rounded-[9px] shrink-0 w-[47px]">
      <div className="relative shrink-0 size-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="3" cy="3" fill="var(--fill-0, #039855)" id="Ellipse 1" opacity="0" r="3" />
        </svg>
      </div>
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1f1f1f] text-[16px] text-center w-[39px]">Jum</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[#1f1f1f] text-[18px] text-center w-[min-content]">21</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="box-border content-stretch flex flex-col items-center px-[9px] py-[5px] relative rounded-[9px] shrink-0 w-[47px]">
      <div className="relative shrink-0 size-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="3" cy="3" fill="var(--fill-0, #039855)" id="Ellipse 1" opacity="0" r="3" />
        </svg>
      </div>
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1f1f1f] text-[16px] text-center w-[39px]">Sab</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[#1f1f1f] text-[18px] text-center w-[min-content]">22</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0">
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <Frame33 />
      <Frame34 />
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function WeuiArrowFilled1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[12px]" data-name="weui:arrow-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="weui:arrow-filled">
          <path clipRule="evenodd" d={svgPaths.p1093a180} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <WeuiArrowFilled />
        </div>
      </div>
      <Frame49 />
      <WeuiArrowFilled1 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-white relative rounded-[11px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[11px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[25px] items-start p-[25px] relative w-full">
          <Frame29 />
          <Frame50 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[#039855] w-full">
      <p className="font-['Poppins:Bold',sans-serif] leading-[30px] relative shrink-0 text-[20px] w-full">Pelatihan Petani</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[28px] relative shrink-0 text-[18px] w-full">12.00 - 13.00</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#039855] text-[18px] w-full">Pertanian</p>
      <Frame39 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[rgba(6,6,6,0.05)] box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#039855] text-[18px] text-center text-nowrap whitespace-pre">Telah Selesai</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[rgba(6,149,80,0.17)] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#039855] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start p-[20px] relative w-full">
          <Frame42 />
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame51 />
      <Frame40 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[20px] items-start justify-center relative shrink-0 w-full">
      <Frame26 />
      <Frame41 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <p className="font-['Poppins:Bold',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#039855] text-[30px] text-center w-full">Agenda Dinas Kabupaten</p>
      <Frame37 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <p className="font-['Poppins:Bold',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#039855] text-[30px] text-center w-full">Galeri</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="gap-[31px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[873px] relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] h-[558px] relative rounded-[28px] shrink-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[28px] size-full" src={imgRectangle8} />
      </div>
      <div className="[grid-area:1_/_2] h-[267px] justify-self-stretch relative rounded-[28px] shrink-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[28px] size-full" src={imgRectangle9} />
      </div>
      <div className="[grid-area:1_/_3] h-[267px] justify-self-stretch relative rounded-[28px] shrink-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[28px] size-full" src={imgRectangle10} />
      </div>
      <div className="[grid-area:2_/_2_/_auto_/_span_2] h-[267px] justify-self-stretch relative rounded-[28px] shrink-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[28px] size-full" src={imgRectangle11} />
      </div>
      <div className="[grid-area:3_/_1_/_auto_/_span_2] h-[267px] justify-self-stretch relative rounded-[28px] shrink-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[28px] size-full" src={imgRectangle12} />
      </div>
      <div className="[grid-area:3_/_3] h-[267px] justify-self-stretch relative rounded-[28px] shrink-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[28px] size-full" src={imgRectangle13} />
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[8px] h-[25px] items-start relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#011334] text-[16px] text-nowrap whitespace-pre">Yanto</p>
      <div className="flex h-[25px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "25", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[25px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                <line id="Line 173" stroke="var(--stroke-0, black)" x2="25" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="basis-0 bg-white grow h-[50px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Component 8">
      <div aria-hidden="true" className="absolute border border-[#087d43] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[50px] items-start px-[20px] py-[12px] relative w-full">
          <Frame58 />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="basis-0 bg-[#f9f9f9] grow h-[50px] min-h-px min-w-px relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#98a2b3] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[20px] py-[12px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#98a2b3] text-[16px] text-nowrap whitespace-pre">Nama belakang</p>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[21px] items-start relative shrink-0 w-full">
      <Component2 />
      <Group6 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#f9f9f9] h-[50px] relative rounded-[10px] shrink-0 w-full" data-name="Component 2">
      <div aria-hidden="true" className="absolute border border-[#98a2b3] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[20px] py-[12px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] h-[25px] leading-[24px] not-italic relative shrink-0 text-[#98a2b3] text-[16px] w-[128px]">Email</p>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="bg-[#f9f9f9] h-[50px] relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#98a2b3] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[20px] py-[12px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] h-[25px] leading-[24px] not-italic relative shrink-0 text-[#98a2b3] text-[16px] w-[128px]">Nomor Telepon</p>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#f9f9f9] h-[140px] relative rounded-[10px] shrink-0 w-full" data-name="Component 4">
      <div aria-hidden="true" className="absolute border border-[#98a2b3] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[281px] h-[140px] items-start px-[20px] py-[10px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] h-[25px] leading-[24px] not-italic relative shrink-0 text-[#98a2b3] text-[16px] w-[138px]">Aduan kamu</p>
          <div className="flex items-center justify-center relative shrink-0 size-[22px]" style={{ "--transform-inner-width": "31.09375", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[135deg]">
              <div className="h-0 relative w-[31.113px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                    <line id="Line 171" stroke="var(--stroke-0, #98A2B3)" x2="31.1127" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex items-center justify-center left-[447px] size-[13px] top-[122px]" style={{ "--transform-inner-width": "18.375", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[135deg]">
              <div className="h-0 relative w-[18.385px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 1">
                    <line id="Line 172" stroke="var(--stroke-0, #98A2B3)" x2="18.3848" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame55 />
      <Component />
      <Group5 />
      <Component1 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[#087d43] relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#087d43] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[120px] py-[22px] relative w-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Kirim Aduan</p>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-white relative rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-start px-[24px] py-[28px] relative w-full">
          <p className="font-['Poppins:Bold',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#011334] text-[30px] w-[307px]">Form Pengaduan</p>
          <Frame56 />
          <Frame53 />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px not-italic place-items-start relative shrink-0 text-white">
      <p className="[grid-area:1_/_1] font-['Poppins:Medium',sans-serif] h-[19px] leading-[20px] ml-0 mt-0 relative text-[14px] w-[274.482px]">Dinas Pertanian</p>
      <p className="[grid-area:1_/_1] font-['Poppins:Bold',sans-serif] h-[27.561px] leading-[30px] ml-0 mt-[19.43px] relative text-[20px] w-[526px]">Kabupaten Jombang</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[10px] items-center ml-0 mt-0 relative w-[582px]">
      <div className="h-[57px] relative shrink-0 w-[46px]" data-name="download">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDownload} />
      </div>
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Frame54 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0 w-[582px]">
      <Group4 />
      <p className="font-['Poppins:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-white w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum ante vel metus ultricies,</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start not-italic relative shrink-0 text-white w-full">
      <p className="font-['Poppins:Bold',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-full">Kontak Info</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] w-full">Jl. Krekot Jaya Molek Blok I No.11, RT.7/RW.02, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat.</p>
    </div>
  );
}

function IcRoundWhatsapp() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="ic:round-whatsapp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="ic:round-whatsapp">
          <path d={svgPaths.p1bc21c80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">+62 8730-0983-0987</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="Button 1">
      <IcRoundWhatsapp />
      <TextContainer />
    </div>
  );
}

function SiMailLine() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="si:mail-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="si:mail-line">
          <path d={svgPaths.p19651280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">dinaspertanian@gmail.com</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative rounded-[1000px] shrink-0 w-full" data-name="Button 2">
      <SiMailLine />
      <TextContainer1 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[375px]">
      <Frame60 />
      <Frame61 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start not-italic relative shrink-0 text-white w-[151px]">
      <p className="font-['Poppins:Bold',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-full">Navigasi</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] w-full">Home</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] w-full">Produk Kami</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] w-full">Tentang Kami</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] w-full">Cara Order</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame59 />
      <Frame62 />
      <Frame66 />
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[326px] relative rounded-[16px] shrink-0 w-full" data-name="Footer">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[326px] items-start px-[44px] py-[62px] relative w-full">
          <div className="absolute bg-[#087d43] inset-0" data-name="Rectangle" />
          <Frame63 />
        </div>
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative rounded-[29px] size-full" data-name="Desktop - 2">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[73px] items-center overflow-clip pb-[42px] pt-[74px] px-[100px] relative size-full">
          <div className="absolute h-[747px] left-0 top-0 w-[1440px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle1} />
              <div className="absolute bg-[rgba(0,0,0,0.61)] inset-0" />
            </div>
          </div>
          <Frame1 />
          <Frame12 />
          <Frame20 />
          <Frame44 />
          <Frame43 />
          <Frame52 />
          <Frame18 />
          <Frame57 />
          <Footer />
        </div>
      </div>
    </div>
  );
}