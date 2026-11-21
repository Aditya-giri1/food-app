import Navbaar from './components/Navbar'
import Body from './components/Body'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import About from './components/about'
import Contact from './components/contact'
import './App.css'
import Cart from './components/Cart'
import RestourantMenu from './components/RestourantMenu'

function AppLayout() {
  return (
    <>
        <Navbaar />
        <Outlet/>
    </>
  )
}
const appRouter = createBrowserRouter([
  {path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }, 
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/restourantmenu/:userID",
    element: <RestourantMenu />
  }
    ]
  }
  
])
function App() {
  return <RouterProvider router={appRouter} />;
}
export default App;

