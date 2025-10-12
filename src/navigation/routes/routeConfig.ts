export interface RouteConfig {
    home: string;
    blog: string;
    blogDetail: string;
    form: string;
  }
  
  // Solo las rutas que React Router necesita manejar
  export const routes: RouteConfig = {
    home: '/',
    blog: '/blog',
    blogDetail: '/blog/:slug',
    form: '/form/:slug'
  };
  
  // Helper para generar URL de detalle de blog
  export const blogRoutes = {
    detail: (slug: string) => `/blog/${slug}`
  };
  
  export const formRoutes = {
    detail: (slug: string) => `/form/${slug}`
  };
  
  // Metadatos para SEO
  export const pageMetadata = {
    home: {
      title: 'Angie Galván R - Desarrolladora Frontend',
      description: 'Desarrolladora especializada en React y TypeScript'
    },
    blog: {
      title: 'Blog - Angie Galván R',
      description: 'Artículos sobre desarrollo web, React y tecnología'
    },
    blogDetail: {
      title: (blogTitle: string) => `${blogTitle} - Blog Angie Galván R`,
      description: (excerpt: string) => excerpt
    },
    form: {
      title: 'Form - Angie Galván R',
      description: 'Formulario de contacto'
    }
  };
  