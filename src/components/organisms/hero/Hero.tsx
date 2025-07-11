import { SocialIcons } from '@components/molecules'

export const Hero = () => {
  return (
    <section className="flex flex-row items-center justify-center max-h-[73vh] overflow-hidden w-full ">
      {/* Text container */}
      <div className="flex justify-end items-end w-[60%]">
        <div className="flex justify-center items-center flex-col" style={{transform: 'translatex(4rem)'}}>
          <h1 className="font-title text-[clamp(3rem,8vw,5rem)] text-(--color-principal) text-center drop-shadow-[2px_2px_4px_var(--color-blanco)] font-[300]">
            Angie Galván R
          </h1>
          
          <div className="bg-[#f3dbe5] text-(--color-principal) rounded-[12px] text-[clamp(1.2rem,3vw,2rem)] font-[700]" style={{padding: '5px 20px', margin: '1rem 0'}}>
          Community Manager
          </div>
          
         <SocialIcons />
        </div>
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