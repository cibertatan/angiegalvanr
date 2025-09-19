import { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { services } from './constants';
import { BlurEffect } from '../../atoms/BlurEffect';

export const MyServices = () => {
  const [flipped, setFlipped] = useState({});

  const handleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="servicios" className="py-12 px-4 bg-(--color-fondo) flex flex-col items-center justify-center">
      <div className="w-[100vw] flex justify-center">
        <div className="w-[80vh] flex justify-center h-[40vh] top-0 left-0 right-0 bottom-0 "><img src="/assets/img/mis-servicios.png" alt="My Services" className="w-full h-full object-cover" /></div>
      </div>
      <div className="w-full flex justify-center" style={{marginTop: '-100px'}}>
      <Flipper flipKey={Object.values(flipped).join('')}>
        <div className="w-full flex justify-center mt-[-100px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl"  style={{paddingBottom: '20px'}}>
            {services.map((service) => (
              <div key={service.id} className="flex flex-col items-center justify-center gap-4">
              <Flipped key={service.id} flipId={service.id}>
                <div className="relative w-full h-72 flex items-center justify-center">
                  <BlurEffect width="600px" height="600px" style={{zIndex: 0, filter: 'blur(30px)'}} />
                  <div className="relative z-10 w-full h-72 perspective flex items-center justify-center"
                    onMouseEnter={() => setFlipped(prev => ({ ...prev, [service.id]: true }))}
                    onMouseLeave={() => setFlipped(prev => ({ ...prev, [service.id]: false }))}>
                    <div className={`transition-transform duration-500 w-full h-full [transform-style:preserve-3d] ${flipped[service.id] ? 'rotate-y-180' : ''}`}>
                      {/* Front */}
                      <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-4 overflow-hidden">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-md mb-4" />
                      </div>
                      {/* Back */}
                      <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center bg-[var(--color-blanco)] rounded-xl shadow-lg overflow-hidden" style={{padding: '30px'}}>
                       <div className="w-full h-full flex items-center justify-center bg-[var(--color-acento)] rounded-xl" style={{padding: '20px'}}>
                        <p className="text-center font-semibold" style={{color: service.textColor}}>{service.description}</p>
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Flipped>
              <div className="w-full h-full flex align-center justify-center min-h-[60px]">
              <h3 className="text-2xl font-bold" style={{color: service.textColor, textShadow: '2px 2px 0 white, -2px 2px 0 white, 2px -2px 0 white, -2px -2px 0 white'}}>{service.title}</h3>
              </div>
              </div>
            ))}
          </div>
        </div>
      </Flipper>
      </div>
    </section>
  );
}