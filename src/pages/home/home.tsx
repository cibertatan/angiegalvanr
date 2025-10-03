import { About, Hero, MyServices, Layout, BlogSection } from "@components";

export const Home = () => {
  return (
    <Layout>
      <div className="bg-accent min-h-screen">
        <Hero />
        <About />
        <MyServices />
        <BlogSection />
      </div>
    </Layout>
  );
};