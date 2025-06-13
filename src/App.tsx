import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout"

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        { 
          index:true, 
          element:<Home/>
        }
      ]
    }
  ])
  return (<RouterProvider router={router}/>)
}

export default App