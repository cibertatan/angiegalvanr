import { CardBlogSection } from "@components"
import { services } from "../myServices/constants"
import ImageCarousel from "../myServices/ImageCarousel"
import { BlogsSection } from '@constants/blogs'

export const BlogSection = () => {

  const firstBlog = [BlogsSection[0], BlogsSection[2]]
  const secondBlog = [BlogsSection[1], BlogsSection[3]]

  return <div id="servicios" className="flex flex-col items-center justify-center">  
  <section className="hidden lg:flex bg-(--color-fondo) justify-center w-full max-w-[1920px] mx-auto flex flex-row" style={{paddingTop: '15vh', paddingBottom: '15vh'}}>
    <div className="flex max-w-[450px] w-full flex-col overflow-hidden">
    <div className="flex justify-start">
      <div className="w-[450px] flex justify-center h-[250px]"><img src="/assets/img/blog.png" alt="My Services" className="w-full h-full object-cover" /></div>
    </div>
    <div className="flex justify-center" style={{marginTop: '-80px'}}>
      <div className="w-[300px] flex justify-center h-[250px] overflow-hidden rounded-2xl"><img src="/assets/img/bogSection.jpg" alt="My Services" className="w-full h-full object-cover" /></div>
    </div>
    </div>
    <div style={{paddingTop: '75px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="flex justify-center align-center max-w-[450px] w-full flex-col gap-26 p-6">
      {firstBlog.map((blog) => (
        <CardBlogSection key={blog.id} blog={blog} />
      ))}
    </div>
    <div style={{paddingTop: '75px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}  className="max-w-[450px] w-full flex-col gap-26 p-6">
      {secondBlog.map((blog) => (
        <CardBlogSection key={blog.id} blog={blog} />
      ))}
    </div>
  </section>
  <section className="flex lg:hidden py-12 px-4 bg-(--color-fondo) flex flex-col items-center justify-center">
  <div className="w-[100vw] flex justify-center" style={{marginTop: '40px'}}>
      <div className="w-[300px] flex justify-center h-[150px] top-0 left-0 right-0 bottom-0 ">
        <img src="/assets/img/mis-servicios.png" alt="My Services" className="w-full h-full object-cover" />
        </div>
    </div>
    <div className="w-full flex h-[420px]" style={{padding: '20px 10px', marginTop: '-80px'}}>
      <ImageCarousel services={services} />
    </div>
  </section>
  </div>
}