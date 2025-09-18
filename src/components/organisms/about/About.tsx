export const About = () => {
  // Style for the decorative blur effect behind the text
  const blurEffectStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    height: '700px',
    background: 'radial-gradient(circle, #e3b6c7 0%, rgba(250, 237, 237, 0) 70%)',
    filter: 'blur(40px)',
    borderRadius: '50%',
    zIndex: 5,
    pointerEvents: 'none',
  };

  return (
    <section id="quien-soy" className="bg-(--color-fondo) w-full" style={{padding: '60px'}}>
      <div className="mx-auto">
        <div className="flex flex-row w-full border-[3px] border-(--divisor-border) rounded-2xl" style={{padding: '3rem'}}>
          <div className="flex justify-center items-center w-1/2">
            <div className="rounded-2xl overflow-hidden w-4/5">
              <img
                className="w-full h-full object-cover"
                src="/assets/img/foto-quien-soy.jpg"
                alt="Angie Galván R - Community Manager"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-1/2 relative">
            <div style={blurEffectStyle}></div>

            <div className="relative z-10 text-center">
              <div className="h-[140px] w-[500px] absolute top-[-25vh] right-[-10vh]">
            <img
                className="w-full h-full object-cover"
                src="/assets/img/quien-soy.png"
                alt="Quien soy"
                />
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="flex flex-row justify-center items-center gap-2">
                  <h5 style={{fontSize: '1.2rem', color: '#345bf5', fontWeight: 'bold'}}>
                    Apasionada 
                  </h5>
                  <h5 style={{fontSize: '1.2rem', color: '#6b6b6b', fontWeight: 'bold'}}>por las </h5>
                  <h5 style={{fontSize: '1.2rem', color: '#345bf5', fontWeight: 'bold'}}>redes sociales,</h5>
                  <h5 style={{fontSize: '1.2rem', color: '#6b6b6b', fontWeight: 'bold'}}>el</h5>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <h5 style={{fontSize: '1.2rem', color: '#6b6b6b', fontWeight: 'bold'}}>contenido con propósito y el</h5>
                  <h5 style={{fontSize: '1.2rem', color: '#345bf5', fontWeight: 'bold'}}>crecimiento</h5>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <h5 style={{fontSize: '1.2rem', color: '#345bf5', fontWeight: 'bold'}}>digital de marcas</h5>
                  <h5 style={{fontSize: '1.2rem', color: '#6b6b6b', fontWeight: 'bold'}}>personales y</h5>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <h5 style={{fontSize: '1.2rem', color: '#6b6b6b', fontWeight: 'bold'}}>empresariales.</h5>
                </div>
                <br />
                <div className="flex flex-row justify-center items-center gap-2">
                  <h5 style={{fontSize: '1.2rem', color: '#6b6b6b', fontWeight: 'bold'}}>Mi enfoque es</h5>
                  <h5 style={{fontSize: '1.2rem', color: '#345bf5', fontWeight: 'bold'}}>crear comunidades fieles,</h5>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 mt-4">
                  <h5 style={{fontSize: '1.2rem', color: '#6b6b6b', fontWeight: 'bold'}}>aumentar tu visibilidad y</h5>
                  <h5 style={{fontSize: '1.2rem', color: '#345bf5', fontWeight: 'bold'}}>fortalecer tu</h5>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 mt-4">
                  <h5 style={{fontSize: '1.2rem', color: '#345bf5', fontWeight: 'bold'}}>reputación.</h5>
                </div>
                <br />
                <br />
              <a 
                href="#contacto"
                className="inline-block bg-(--texto-hero) rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl" style={{padding: '1rem 2.5rem', fontSize: '1.25rem', color: 'var(--color-blanco)'}}
              >
                RESERVA UNA ASESORÍA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};