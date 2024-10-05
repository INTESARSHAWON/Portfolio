import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import ProjectDetail from "./Components/ProjectDetail/ProjectDetail";
import MyWork from "./Components/MyWork/MyWork";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>, 
  },
  {
    path: "/mywork",
    element: <MyWork/>, 
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
