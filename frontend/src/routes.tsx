
import React from 'react';
import { PathRouteProps } from 'react-router-dom';
import HomePage from './pages/HomePage';

interface CustomRouteProps extends PathRouteProps {
  path: string;
  exact?: boolean; // Make 'exact' property optional
}

const routes: CustomRouteProps[] = [
  { path: '/', Component: HomePage, exact: true }, // Specify 'exact: true' for the home page route
  // Add additional route configurations here
];

export default routes;