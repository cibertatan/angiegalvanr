import { useState, useEffect } from 'react';

const POPUP_DELAY = 500;

export const useEbookPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, POPUP_DELAY);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return {
    isPopupOpen,
    closePopup,
  };
};
