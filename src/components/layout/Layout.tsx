import { Footer, Header } from "../organisms";
import { WhatsAppFloat, ScrollToTop } from "../molecules";
import { useEffect } from "react";
import { useLocation } from "react-router";

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    if (!location) return;
    const hash = location.hash;
    if (!hash) return;

    const elementId = hash.replace('#', '');
    const targetElement = document.getElementById(elementId);
    if (!targetElement) return;

    const headerHeight = 100; // matches header height
    const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;
    const scrollTo = Math.max(elementTop - headerHeight, 0);
    window.scrollTo({ top: scrollTo, behavior: 'smooth' });
  }, [location]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <div className="hidden lg:block">
        <ScrollToTop />
      </div>
      <WhatsAppFloat />
    </>
  );
}
