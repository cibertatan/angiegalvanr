import { useEffect } from 'react';

/**
 * Custom hook to scroll to top when component mounts or dependencies change
 * @param dependencies - Array of dependencies to watch for changes
 * @param smooth - Whether to use smooth scrolling (default: true)
 */
export const useScrollToTop = (dependencies: any[] = [], smooth: boolean = true) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : 'auto'
    });
  }, dependencies);
};
