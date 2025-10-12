import { useEffect } from 'react';
import { SEO_CONFIG } from '../../config/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  page?: keyof typeof SEO_CONFIG.pages;
}

export function SEO({ 
  title,
  description,
  keywords,
  image,
  url,
  page
}: SEOProps) {
  
  useEffect(() => {
    // Usar configuración de página específica si se proporciona
    const pageConfig = page ? SEO_CONFIG.pages[page] : null;
    
    // Combinar configuración por defecto con props y configuración de página
    const finalTitle = title || pageConfig?.title || SEO_CONFIG.default.title;
    const finalDescription = description || pageConfig?.description || SEO_CONFIG.default.description;
    const finalKeywords = keywords || pageConfig?.keywords || SEO_CONFIG.default.keywords;
    const finalImage = image || SEO_CONFIG.default.image;
    const finalUrl = url || SEO_CONFIG.default.url;
    
    // Actualizar título de la página
    document.title = finalTitle;
    
    // Actualizar meta tags dinámicamente
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    
    const updatePropertyMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    
    // Actualizar meta tags básicos
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    
    // Actualizar Open Graph tags
    updatePropertyMetaTag('og:title', finalTitle);
    updatePropertyMetaTag('og:description', finalDescription);
    updatePropertyMetaTag('og:image', finalImage);
    updatePropertyMetaTag('og:url', finalUrl);
    updatePropertyMetaTag('og:image:width', '1200');
    updatePropertyMetaTag('og:image:height', '630');
    updatePropertyMetaTag('og:image:alt', finalTitle);
    updatePropertyMetaTag('og:site_name', 'Angie Galvan R');
    
    // Actualizar Twitter tags
    updatePropertyMetaTag('twitter:title', finalTitle);
    updatePropertyMetaTag('twitter:description', finalDescription);
    updatePropertyMetaTag('twitter:image', finalImage);
    updatePropertyMetaTag('twitter:url', finalUrl);
    updatePropertyMetaTag('twitter:image:alt', finalTitle);
    
  }, [title, description, keywords, image, url, page]);
  
  return null; // Este componente no renderiza nada
} 