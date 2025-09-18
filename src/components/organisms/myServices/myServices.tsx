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
    <section className="py-12 px-4 bg-(--color-fondo)">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-(--color-principal) drop-shadow"  style={{paddingTop: '20px', paddingBottom: '20px'}}>MIS SERVICIOS</h2>
      <Flipper flipKey={Object.values(flipped).join('')}>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl"  style={{paddingBottom: '20px'}}>
            {services.map((service) => (
              <div key={service.id} className="flex flex-col items-center justify-center gap-4">
              <Flipped key={service.id} flipId={service.id}>
                <div className="relative w-full h-72 flex items-center justify-center">
                  <BlurEffect width="600px" height="600px" style={{zIndex: 0, filter: 'blur(30px)'}} />
                  <div className="relative z-10 w-full h-72 cursor-pointer perspective flex items-center justify-center"
                    onClick={() => handleFlip(service.id)}>
                    <div className={`transition-transform duration-500 w-full h-full [transform-style:preserve-3d] ${flipped[service.id] ? 'rotate-y-180' : ''}`}>
                      {/* Front */}
                      <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-4 overflow-hidden">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-md mb-4" />
                      </div>
                      {/* Back */}
                      <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center bg-[#EBCFCF] rounded-xl shadow-lg p-6 overflow-hidden">
                        <p className="text-center text-[#B88C8C] font-medium">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Flipped>
              <h3 className="text-lg font-semibold text-center text-[#B88C8C]">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </Flipper>
    </section>
  );
}