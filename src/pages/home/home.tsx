import { About, Hero, MyServices, Layout, BlogSection, Contact } from "@components";

export const Home = () => {
  return (
      <div className="bg-accent min-h-screen w-full max-w-[100vw] flex flex-col justify-center items-center">
        <Hero />
        <About />
        <MyServices />
        <BlogSection />
        <Contact />
      </div>
  );
};