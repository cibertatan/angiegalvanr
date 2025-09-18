import { SocialIcons } from '@components/molecules'

export const Hero = () => {
  return (
    <section className="flex flex-row items-center justify-center max-h-[73vh] overflow-hidden w-full bg-(--color-acento)">
      {/* Text container */}
      <div className="flex h-full bg-blue-500 w-[60%] relative">
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
  )
} 