import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const router = createBrowserRouter([
  {
   path: "/",
   element: <Home/> 
  },
  {
    path: "/about",
    element: <About/>
  }
])
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
