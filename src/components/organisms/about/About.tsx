import { TextAbout } from "./textAbout";

export const About = () => {
  // Style for the decorative blur effect behind the text
  const blurEffectStyleMobile: React.CSSProperties = {
    position: "absolute",
    top: "75%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    height: "80vh",
    background:
      "radial-gradient(circle, #e3b6c7 0%, rgba(250, 237, 237, 0) 70%)",
    filter: "blur(40px)",
    borderRadius: "50%",
    zIndex: 5,
    pointerEvents: "none",
  };

  return (
    <div id="quien-soy">
      <section
        className="hidden lg:flex bg-(--color-fondo) w-[100vw] overflow-hidden"

        style={{ padding: "60px" }}
      >
        <div className="mx-auto  w-full">
          <div
            className="flex flex-row w-full border-[3px] border-(--divisor-border) rounded-2xl"
            style={{ padding: "3rem" }}
          >
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
              <div style={blurEffectStyleMobile}/>

              <div className="relative z-10 text-center">
                <div className="h-[140px] w-[500px] absolute top-[-25vh] right-[-10vh]">
                  <img
                    className="w-full h-full object-cover"
                    src="/assets/img/quien-soy.png"
                    alt="Quien soy"
                  />
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <TextAbout />
                <br />
                <br />
                <a
                  href="#contacto"
                  className="inline-block bg-(--texto-hero) rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    padding: "1rem 2.5rem",
                    fontSize: "1.25rem",
                    color: "var(--color-blanco)",
                  }}
                >
                  RESERVA UNA ASESORÍA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex lg:hidden bg-(--color-fondo) w-full"
        style={{ padding: "10px" }}
      >
        <div className="mx-auto">
          <div
            className="flex flex-row w-full border-[3px] border-(--divisor-border) rounded-2xl"
            style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
          >
            <div className="flex flex-col w-full relative">
              <div className="h-[100px] w-[300px] absolute top-[-16vh] right-13">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/img/quien-soy.png"
                  alt="Quien soy"
                />
              </div>
              <div className="w-full flex justify-center items-center">
              <div className="rounded-2xl w-[80%] overflow-hidden" style={{ marginTop: '70px' }}>
                <img
                  className="w-full h-full object-cover"
                  src="/assets/img/foto-quien-soy.jpg"
                  alt="Angie Galván R - Community Manager"
                  />
              </div>
                  </div>
                  <div style={blurEffectStyleMobile}/>
                  <div className="flex justify-center items-center" style={{ marginTop: '25px', zIndex: 10, marginBottom: '25px' }}>
                  <TextAbout />
                </div>
              <div>
                <a
                  href="#contacto"
                  className="nav-button-3d z-30"
                  style={{
                    background: "var(--texto-hero)",
                    color: "var(--color-blanco)",
                  }}
                >
                  RESERVA UNA ASESORÍA
                </a>
              </div>
              <div id="servicios-mobile" className="absolute bottom-5 right-0"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};