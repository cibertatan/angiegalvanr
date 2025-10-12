import { Routes, Route } from 'react-router';
import { routes } from './routeConfig';
import { Home, BlogDetails, Blogs, FormSocialMediaManagement } from '@pages';
import { Layout } from '@components/layout';

export const AppRoutes = () => (
  <Routes>
    <Route path={routes.home} element={<Layout><Home /></Layout>} />
    <Route path={routes.blog} element={<Layout><Blogs /></Layout>} />
    <Route path={routes.form} element={<Layout><FormSocialMediaManagement /></Layout>} />
    <Route path={routes.blogDetail} element={<Layout><BlogDetails /></Layout>} />
  </Routes>
);
