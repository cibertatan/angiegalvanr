import { CardBlogSection } from "@components"
import { services } from "../myServices/constants"
import ImageCarousel from "../myServices/ImageCarousel"
import { BlogsSection } from '@constants/blogs'

export const BlogSection = () => {
  return <div id="servicios" className="flex flex-col items-center justify-center">  
  <section className="hidden lg:flex bg-(--color-fondo) w-full max-w-[1920px] mx-auto flex flex-row" style={{paddingTop: '10vh', paddingBottom: '10vh'}}>
    <div className="flex w-full max-w-[600px] flex-col overflow-hidden" style={{paddingLeft: '150px'}}>
    <div className="flex justify-start">
      <div className="w-[450px] flex justify-center h-[250px]" style={{marginLeft: '-75px'}}><img src="/assets/img/blog.png" alt="My Services" className="w-full h-full object-cover" /></div>
    </div>
    <div className="flex justify-start" style={{marginTop: '-80px'}}>
      <div className="w-[300px] flex justify-center h-[250px] overflow-hidden rounded-2xl"><img src="/assets/img/bogSection.jpg" alt="My Services" className="w-full h-full object-cover" /></div>
    </div>
    </div>
      <div
        className="grid grid-cols-2 flex justify-center flex-1" style={{paddingTop: '75px', rowGap: '50px'}}>
        {BlogsSection.map((blog) => (
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