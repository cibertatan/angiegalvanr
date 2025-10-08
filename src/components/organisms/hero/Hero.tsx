import React from 'react'
import { SocialIcons } from '@components/molecules'

export const Hero = () => {
  return (
    <div className="w-full max-w-[100vw] flex flex-col justify-center items-center"> 
    <section className="hidden lg:flex flex-row items-center justify-center max-h-[73vh] overflow-hidden w-full bg-(--color-acento)">
      {/* Text container */}
      <div className="flex h-full w-full flex-col justify-center items-center gap-20 ">
         <div className="flex justify-center items-center w-[50vw] ">
         <img src="/assets/img/community-manager.png" alt="Angie Galván R" className="w-full h-full object-cover" />
          </div>
         <SocialIcons />
        </div>
      
      {/* Imagen */}
      <div className="flex justify-end items-center">
        <div className="flex justify-end items-end w-[30vw]">
          <img 
            className="object-cover w-full h-full m-0"
            src="/assets/img/angie-profile.png" 
            alt="Angie Galván R"
          />
        </div>
      </div>
    </section>
    
     <section className="flex lg:hidden z-20 items-end justify-end overflow-hidden w-full bg-(--color-acento)">
      {/* Text container */}
      <div className="flex justify-end items-end relative w-full h-[50vh] relative">
        <div className="flex flex-col justify-center items-center gap-6 absolute top-35 left-1">
         <div className="flex w-[30vh]">
         <img src="/assets/img/community-manager.png" alt="Angie Galván R" className="w-full h-full object-contain" />
          </div>
         <SocialIcons />
        </div>
      {/* Imagen */}
      

        <div className="flex justify-end items-end w-[65vw] h-[100vh]" style={{marginRight: '-5vh'}}>
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