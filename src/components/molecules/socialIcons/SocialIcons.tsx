export function SocialIcons({relative}: {relative?: boolean}) {

  const position = relative ? 'relative flex justify-center items-center gap-2' : 'absolute lg:top-[20vh] z-40 lg:left-[33vw] top-[30vh] left-10 flex justify-center items-center gap-2'

  return (
    <div
      className={position}
    >
      <a href="https://www.instagram.com/angiegalvanr?igsh=MXA5OHhhOWRqa2hydw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
        <img src="/assets/img/instagram-logo.png" alt="Instagram" className="lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] transition-transform duration-300 ease-in-out hover:scale-120"></img>
      </a>
      <a href="https://www.facebook.com/angiemagalvan" target="_blank" rel="noopener noreferrer">
        <img src="/assets/img/facebook-logo.png" alt="Facebook" className="lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] transition-transform duration-300 ease-in-out hover:scale-120"></img>
      </a>
      <a href="https://www.linkedin.com/in/angelicagalvanr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
        <img src="/assets/img/linkedin-logo.png" alt="Linkedin" className="lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] transition-transform duration-300 ease-in-out hover:scale-120"></img>
      </a>
      <a href="https://www.tiktok.com/@_angiegalvanr" target="_blank" rel="noopener noreferrer">
        <img src="/assets/img/tiktok-logo.png" alt="Tiktok" className="lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] transition-transform duration-300 ease-in-out hover:scale-120"></img>
      </a>
    </div>
  );
}