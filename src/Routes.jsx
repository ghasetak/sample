import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";


const ProjectRoutes = () => {
 let element = useRoutes([
  { path: "/", element: <Home /> },
  {
   path: "Page1",
   element: <page1 />,
  },
  {
   path: "Page2",
   element: <page2 />,
  },
 
 ]);

 return element;
};

export default ProjectRoutes;