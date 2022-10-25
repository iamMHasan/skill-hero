import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Main from './layout/Main';
import Courses from './components/Courses';
import Blog from './components/Blog';
import Coursedetails from './components/Coursedetails';
import Checkout from './components/Checkout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/courses',
          loader: () => fetch('http://localhost:5000/courses'),
          element: <Courses></Courses>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/courses/:id',
          element: <Coursedetails></Coursedetails>,
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
        },
        {
          path : '/checkout/:id',
          element : <Checkout></Checkout>,
          loader : ({params}) => fetch(`http://localhost:5000/checkout/${params.id}`)
        }
      ]
    },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
