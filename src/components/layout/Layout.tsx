import { Footer, Header } from '../organisms';
import { WhatsAppFloat, ScrollToTop } from '../molecules';

export function Layout({children}: {children: React.ReactNode}) {
    return (
       <>
       <Header />
       <main>{children}</main>
       <Footer />
       <WhatsAppFloat />
       <ScrollToTop />
       </>
    );
};
