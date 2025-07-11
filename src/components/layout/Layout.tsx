import { Footer, Header } from '../organisms';

export function Layout({children}: {children: React.ReactNode}) {
    return (
       <>
       <Header />
       <main>{children}</main>
       <Footer />
       </>
    );
};
