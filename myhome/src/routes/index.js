import About from '../pages/About'
import Home from '../pages/Home'
import Detail from "../pages/Detail";
import Detailhome from "../pages/Detailhome"
import { Navigate } from 'react-router-dom'

const routes = [
  {
    path: "/",
    element: <Navigate to="/about"/>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  //传值
  {
    path: "detail/:id/:title/:content",
    element: <Detail />,
  },
  {
    path: "detailhome",
    element: <Detailhome />,
  },
];
export default routes;