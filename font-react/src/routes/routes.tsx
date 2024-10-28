import config from "@/config";
import { RouteITF } from "@/interface/Route";

// Pages
import Home from "@/pages/Home";
import Detail from "@/pages/Detail";
// import Introduce from "@/pages/Introduce";
// import HeaderOnly from "@/layouts/HeaderOnly";
// import Login from "@/pages/Login";

// Public routes
const publicRoutes: RouteITF[] = [
  { path: config.routes.home, component: Home },
  { path: config.routes.detail, component: Detail },
  // { path: config.routes.introduce, component: Introduce, layout: HeaderOnly },
  // { path: config.routes.login, component: Login, layout: null },
  // {
  //   path: config.routes.contributors,
  //   component: Contributors,
  //   layout: HeaderOnly,
  // },
];

const privateRoutes: RouteITF[] = [];

export { publicRoutes, privateRoutes };
