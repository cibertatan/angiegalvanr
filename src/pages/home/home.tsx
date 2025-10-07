import { About, Hero, MyServices, Layout, BlogSection, Contact } from "@components";

export const Home = () => {
  return (
      <div className="bg-accent min-h-screen">
        <Hero />
        <About />
        <MyServices />
        <BlogSection />
        <Contact />
      </div>
  );
};