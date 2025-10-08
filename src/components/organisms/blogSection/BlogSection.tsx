import { CardBlogSection } from "@components";
import ImageCarousel from "../myServices/ImageCarousel";
import { BlogsSection } from "@constants/blogs";

export const BlogSection = () => {
  const firstBlog = [BlogsSection[0], BlogsSection[2]];
  const secondBlog = [BlogsSection[1], BlogsSection[3]];

  return (
    <div id="servicios" className="flex flex-col items-center justify-center w-[100vw] overflow-hidden">
      {/* Desktop */}
      <section
        className="hidden lg:flex bg-(--color-fondo) justify-center w-full max-w-[1920px] mx-auto flex flex-row"
        style={{ paddingTop: "15vh", paddingBottom: "15vh" }}
      >
        <div className="flex max-w-[450px] w-full flex-col align-center overflow-hidden ">
          <div className="flex justify-center" style={{paddingBottom: '40px'}}>

            <div className="w-[250px]">
              <img
                src="/assets/img/blog.png"
                alt="My Services"
                className="w-full h-full object-cover"
                />
            </div>
                </div>
          <div className="flex justify-center">
            <div className="w-[300px] flex justify-center h-[250px] overflow-hidden rounded-2xl">
              <img
                src="/assets/img/bogSection.jpg"
                alt="Blogs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            paddingTop: "75px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="flex justify-center align-center max-w-[450px] w-full flex-col gap-26 p-6"
        >
          {firstBlog.map((blog) => (
            <CardBlogSection key={blog.id} blog={blog} />
          ))}
        </div>
        <div
          style={{
            paddingTop: "75px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="max-w-[450px] w-full flex-col gap-26 p-6"
        >
          {secondBlog.map((blog) => (
            <CardBlogSection key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
      {/* Mobile */}
      <section className="flex lg:hidden py-12 px-4 bg-(--color-fondo) flex flex-col items-center justify-center">
        <div className="w-[100vw] flex justify-center" style={{ marginTop: "40px" }}>
          <div className="w-[150px] flex justify-center" style={{paddingBottom: '60px'}}>
            <img
              src="/assets/img/blog.png"
              alt="Blogs"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex" style={{ padding: "20px 10px", marginTop: "-80px" }}>
          <ImageCarousel
            services={BlogsSection.map((blog) => ({
              id: blog.id,
              image: blog.image,
              title: blog.title,
              description: blog.description,
              textColor: blog.colorTitle,
              backgroundColor: blog.colorTitle,
              slug: blog.slug,
            }))}
            variant="blog"
          />
        </div>
      </section>
    </div>
  );
};