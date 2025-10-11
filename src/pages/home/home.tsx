import { About, Hero, MyServices, Layout, BlogSection, Contact, EbookPopup } from "@components";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { useEbookPopup } from "@/hooks";

export const Home = () => {
  const location = useLocation();
  const { isPopupOpen, closePopup } = useEbookPopup();

  useEffect(() => {
    if (!location) return;
    const hash = location.hash;
    if (!hash) return;

    const elementId = hash.replace('#', '');
    const targetElement = document.getElementById(elementId);
    if (!targetElement) return;

    const headerHeight = 100;
    const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;
    const scrollTo = Math.max(elementTop - headerHeight, 0);
    window.scrollTo({ top: scrollTo, behavior: 'smooth' });
  }, [location]);


  return (
      <div className="bg-accent min-h-screen w-full max-w-[100vw] flex flex-col justify-center items-center">
        <Hero />
        <About />
        <MyServices />
        <BlogSection />
        <Contact />
        <EbookPopup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
  );
};