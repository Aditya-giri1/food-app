import Navbaar from './components/Navbar'
import Body from './components/Body'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import About from './components/about'
import Contact from './components/contact'
import './App.css'
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
  }
    ]
  }
  
])
function App() {
  return <RouterProvider router={appRouter} />;
}
export default App;

