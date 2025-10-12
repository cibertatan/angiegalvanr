import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router";

interface EbookPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EbookPopup = ({ isOpen, onClose }: EbookPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleDownload = () => {
    // Aquí puedes agregar la lógica para descargar el ebook
    navigate(`/form/social-media-management`);
    // Por ejemplo, redirigir a un enlace de descarga
    // window.open('https://tu-enlace-de-descarga.com', '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          >
            {/* Popup Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl max-w-[90vw] lg:max-w-[60vw] w-full relative overflow-hidden flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute cursor-pointer top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-4 h-4 text-(--texto-hero)"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Mobile */}
              <div className="w-[60vw] cursor-pointer hidden lg:block" onClick={handleDownload}>
               <img src={'/assets/img/promo-ebook.jpg'} alt="Ebook" className="w-full h-full object-cover" />
                </div>
                {/* Desktop */}
                <div className="w-[90vw] cursor-pointer block lg:hidden" onClick={handleDownload}>
               <img src={'/assets/img/promo-ebook-movil.jpg'} alt="Ebook" className="w-full h-full object-cover" />
                </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
