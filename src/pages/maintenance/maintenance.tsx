import { useEffect } from "react";
import { PHONE_NUMBER } from "@/constants";

const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=57${PHONE_NUMBER}&text=${encodeURIComponent(
  "¡Hola! Vi que tu sitio está en mantenimiento y me interesa conocer más sobre tus servicios."
)}`;

export const Maintenance = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Sitio en mantenimiento - Angie Galván R";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="bg-(--color-acento) min-h-screen w-full max-w-[100vw] flex flex-col">
      {/* Header: misma barra del sitio, solo con el logo */}
      <header className="bg-(--color-acento) border-b-[3px] border-(--divisor-border) flex w-full justify-center items-center h-[100px]">
        <span className="logo-button">
          <img
            src="/assets/img/logo-angie.png"
            alt="Logo Angie Galván R"
            className="w-[70px] h-[70px] object-contain"
          />
        </span>
      </header>

      {/* Contenido */}
      <main className="flex-1 flex items-center justify-center w-full" style={{ padding: "40px 20px" }}>
        <section
          className="flex flex-col items-center justify-center w-full max-w-[720px] border-[3px] border-(--divisor-border) rounded-2xl bg-(--color-fondo) shadow-lg"
          style={{ padding: "3rem 2rem" }}
        >
          <span
            className="text-(--texto-hero) text-sm font-bold uppercase tracking-[0.2em]"
            style={{ marginBottom: "16px" }}
          >
            Volvemos pronto
          </span>

          <h1
            className="text-(--color-texto-header) font-[900] leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", marginBottom: "20px" }}
          >
            Sitio en mantenimiento
          </h1>

          <p
            className="text-(--color-texto) text-lg lg:text-xl"
            style={{ marginBottom: "32px", maxWidth: "520px" }}
          >
            Estoy haciendo algunas mejoras para ofrecerte una mejor experiencia.
            Mientras tanto, puedes escribirme por WhatsApp.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-(--texto-hero) text-(--color-blanco) rounded-xl shadow-lg font-bold uppercase tracking-wide transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
            style={{ padding: "14px 28px" }}
          >
            Escríbeme por WhatsApp
          </a>
        </section>
      </main>

      {/* Footer: igual al del sitio */}
      <footer>
        <div
          className="border-t-[2px] border-(--color-blanco) w-full"
          style={{ paddingTop: "10px", paddingBottom: "20px" }}
        >
          <div className="text-sm italic text-(--color-principal) font-[400]">
            Copyright © Angie Galván R - Community Manager 2025
          </div>
        </div>
      </footer>
    </div>
  );
};
