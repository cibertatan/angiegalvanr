import { useState, useEffect } from 'react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón cuando el usuario haga scroll hacia abajo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={scrollToTop}
        className="bg-(--divisor-border) cursor-pointer hover:bg-(--divisor-border) text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
        aria-label="Subir al inicio de la página"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M12 2l8 8h-5v10h-6V10H4l8-8z"/>
        </svg>
      </button>
    </div>
  );
};
