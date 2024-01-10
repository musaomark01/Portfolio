import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import AboutMe from './components/pages/aboutMe';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';
import Resume from './components/pages/resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <AboutMe /> },
      { path: 'aboutMe', element: <AboutMe /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: 'resume', element: <Resume /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


