import { Routes, Route } from 'react-router';
import { routes } from './routeConfig';
import { Home, BlogDetails, Blogs } from '@pages';

export const AppRoutes = () => (
  <Routes>
    <Route path={routes.home} element={<Home />} />
    <Route path={routes.blog} element={<Blogs />} />
    <Route path={routes.blogDetail} element={<BlogDetails />} />
  </Routes>
);
