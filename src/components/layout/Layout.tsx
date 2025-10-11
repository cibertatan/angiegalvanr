import { Footer, Header } from "../organisms";
import { WhatsAppFloat, ScrollToTop, EbookPopup } from "../molecules";

export function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
        <ScrollToTop />
      <WhatsAppFloat />
    </>
  );
}
