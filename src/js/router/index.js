import About from "../../views/About/About";
import Home from "../../views/Home/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default routes;
