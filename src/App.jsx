// import './App.css';
import { createBrowserRouter, RouterProvider, Navigate  } from 'react-router-dom';
// import { ThemeProvider } from './routes/themeprovider';
import Home from './routes/home';
// import Services from './services/index.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },

  ]);

  return (

      <RouterProvider router={router} />

  );
}

export default App;
