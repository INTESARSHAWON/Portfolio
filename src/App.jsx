import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import ProjectDetail from "./Components/ProjectDetail/ProjectDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>, 
  },
  {
    path: "/detail/:id",
    element: <ProjectDetail/>, 
  },  
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
