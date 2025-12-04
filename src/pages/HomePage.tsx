import { HeroSection } from "../components/HeroSection";
import { PublicServices } from "../components/PublicServices";
import { NewsArticles } from "../components/NewsArticles";
import { AgendaSection } from "../components/AgendaSection";
import { Gallery } from "../components/Gallery";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

interface HomePageProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function HomePage({ isDarkMode, setIsDarkMode }: HomePageProps) {
  return (
    <>
      {/* Hero Section with Full Width Background */}
      <div className="relative w-full">
        <HeroSection isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
      
      {/* Other Sections with Padding */}
      <div className="box-border content-stretch flex flex-col gap-[73px] items-center pb-[42px] px-[20px] md:px-[50px] lg:px-[100px] relative w-full">
        <PublicServices />
        <NewsArticles />
        <AgendaSection />
        <Gallery />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
