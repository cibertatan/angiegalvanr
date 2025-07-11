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
        <div className="flex flex-row w-full border-2 border-(--color-principal) rounded-2xl" style={{padding: '3rem'}}>
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
              <h2 className='text-(--color-principal) font-bold' style={{fontSize: '3rem'}}>¿Quién Soy?</h2><br/>
              <p className='leading-relaxed' style={{fontSize: '1.5rem'}}>
                Apasionada por las redes sociales, el
                <br />
                contenido con propósito y el crecimiento
                <br />
                digital de marcas personales y
                <br />
                empresariales.
                <br /> <br />
                Mi enfoque es crear comunidades fieles,
                <br />
                ayudando a fortalecer tu
                <br />
                reputación en línea.
                <br /> <br />
              </p>

              <a 
                href="#contacto"
                className="inline-block bg-(--color-principal) rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl" style={{padding: '1rem 2.5rem', fontSize: '1.25rem', color: 'var(--color-blanco)'}}
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