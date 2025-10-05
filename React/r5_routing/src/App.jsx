import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import NotFound from "./components/NotFound"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "/", element: <Home/>
      },
      {
        path: "/about", element: <About/>
      },
      {
        path: "/contact", element: <Contact/>
      },
      {
        path: "/products", element: <Products/>
      },
      {
        path: "/products/:id", element: <ProductDetails/>
      },
      {
        path: "*", element: <NotFound/>
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
    )
}

export default App
