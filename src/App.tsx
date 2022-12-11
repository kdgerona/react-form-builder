import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import 'react-form-builder2/dist/app.css';

// Pages
import Root from './pages/Root';
import FormBuilder from './pages/FormBuilder';
import FormPreview from './pages/FormPreview';
import ErorPage from './pages/ErrorPage';

// TODO: Routing
const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: 'form',
      element: <Root />,
      errorElement: <ErorPage />,
      children: [
        {
          path: 'builder',
          element: <FormBuilder />,
        },
        {
          path: 'preview',
          element: <FormPreview />,
        },
        {
          path: '*',
          index: true,
          element: <Navigate to='/form/builder' />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to='/form/builder' />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
