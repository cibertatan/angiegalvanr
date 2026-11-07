import { Routes, Route, Navigate } from 'react-router';
import { routes } from './routeConfig';
import { Home, BlogDetails, Blogs, FormSocialMediaManagement, Maintenance } from '@pages';
import { Layout } from '@components/layout';
import { MAINTENANCE_MODE } from '@/config/maintenance';

export const AppRoutes = () => {
  // Modo mantenimiento: cualquier ruta muestra solo la página de mantenimiento
  if (MAINTENANCE_MODE) {
    return (
      <Routes>
        <Route path="*" element={<Maintenance />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path={routes.home} element={<Layout><Home /></Layout>} />
      <Route path={routes.blog} element={<Layout><Blogs /></Layout>} />
      <Route path={routes.form} element={<Layout><FormSocialMediaManagement /></Layout>} />
      <Route path={routes.blogDetail} element={<Layout><BlogDetails /></Layout>} />
      {/* Catch-all route: redirect any unknown route to home */}
      <Route path="*" element={<Navigate to={routes.home} replace />} />
    </Routes>
  );
};
