import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";


const ProjectRoutes = () => {
 let element = useRoutes([
  { path: "/", element: <Home /> },
  {
   path: "page1",
   element: <page1 />,
  },
  {
   path: "page2",
   element: <page2 />,
  },
 
 ]);

 return element;
};

export default ProjectRoutes;