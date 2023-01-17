import React from 'react';
import { RouterProvider } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Router from './routes';

export default function App() {
  return <RouterProvider router={Router} />;
}
