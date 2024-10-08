import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import ProjectDetail from "./Components/ProjectDetail/ProjectDetail";
import MyWork from "./Components/MyWork/MyWork";
import SeeMoreDetail from "./Components/SeeMoreDetail/SeeMoreDetail";

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
  {
    path: "/seemoredetail",
    element: <SeeMoreDetail/> 
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
