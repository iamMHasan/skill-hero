import logo from './logo.svg';
import './App.css';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import Main from './layout/Main';
import Courses from './components/Courses';
import Blog from './components/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Main></Main>,
      children : [
        {
          path : '/',
          element : <Home></Home>
        },
        {
          path : '/courses',
          loader : () => fetch('http://localhost:5000/courses'),
          element : <Courses></Courses>,
        },
        {
          path : '/blog',
          element : <Blog></Blog>
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
