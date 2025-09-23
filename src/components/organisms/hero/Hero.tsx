import { SocialIcons } from '@components/molecules'

export const Hero = () => {
  return (
    <div> 
    <section className="hidden lg:flex flex-row items-center justify-center max-h-[73vh] overflow-hidden w-full bg-(--color-acento)">
      {/* Text container */}
      <div className="flex h-full w-[60%] relative">
         <div className="flex justify-center items-center absolute top-[-50vh] right-[-25vh] w-[100vh] h-[100vh]">
         <img src="/assets/img/community-manager.png" alt="Angie Galván R" className="w-full h-full object-cover rounded-full" />
          </div>
         <SocialIcons />
        </div>
      
      {/* Imagen */}
      <div className="flex justify-center items-center">
        <div className="h-screen flex justify-end items-end w-full">
          <img 
            className="object-cover w-full h-full m-0 max-h-[110vh]"
            src="/assets/img/angie-profile.png" 
            alt="Angie Galván R"
          />
        </div>
      </div>
    </section>
    
     <section className="flex lg:hidden z-100 flex-col items-center justify-center overflow-hidden w-full bg-(--color-acento)">
      {/* Text container */}
      <div className="flex flex-col relative w-full h-[50vh] relative">
         <div className="flex w-[35vh] h-[35vh]" style={{marginLeft: '-2vh', marginTop: '4vh'}}>
         <img src="/assets/img/community-manager.png" alt="Angie Galván R" className="w-full h-full object-cover rounded-full" />
          </div>
         <SocialIcons />
      {/* Imagen */}
        <div className="h-[70vh] flex justify-end items-end w-full  absolute bottom-0 right-[-5vh]">
          <img 
            className="object-cover w-full h-full m-0"
            src="/assets/img/angie-profile.png" 
            alt="Angie Galván R"
          />
        </div>
        </div>
      
    </section>
    
    </div>
  )
} 