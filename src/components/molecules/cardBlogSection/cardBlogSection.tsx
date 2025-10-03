import { BlurEffect } from "@components/atoms/BlurEffect";
import { useNavigate } from "react-router";

interface Blog {
  id: number;
  title: string;
  slug: string;
  colorTitle: string;
  description: string;
  image: string;
}

export const CardBlogSection = ({ blog }: { blog: Blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${blog.slug}`);
  };

  return (
    <div onClick={handleClick} className="relative rounded-xl w-[300px] h-[100px] flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:no-underline">
    <div className="relative z-10">
      <div className="relative z-10">
        <h3
          className="text-xl font-bold"
          style={{
              color: blog.colorTitle,
              textShadow:
              "2px 2px 0 white, -2px 2px 0 white, 2px -2px 0 white, -2px -2px 0 white",
            }}
            >
          {blog.title.toUpperCase()}
        </h3>
        <p className="text-center font-semibold" style={{paddingTop: '10px'}}>
          {blog.description}
        </p>
      </div>
      <BlurEffect
        width="350px"
        height="350px"
        style={{ zIndex: 0, filter: "blur(10px)" }}
        />
    </div>
  </div>
  );
};