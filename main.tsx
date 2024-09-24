import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Products from './pages/Products'
import Product from './pages/Product'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    element: <Layout/>,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home/> ,
       },
       {
         path: "/about",
         element: <About/>
       },
       {
         path: "/about/pricing",
         element: <Pricing/>
       },
       {
         path:"/products",
         element: <Products/>
       },
       {
         path: "/products/:productId",
         element: <Product/>
     
       }
    ]

  },
  
])
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
