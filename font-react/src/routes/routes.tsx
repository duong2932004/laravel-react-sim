// routes.ts
import config from "@/config";
import { RouteITF } from "@/interface/Route";

// Pages
import Home from "@/pages/Home";
import Detail from "@/pages/Detail";
import ViewPagination from "@/pages/ViewPagination";

// Public routes
const publicRoutes: RouteITF[] = [
  { path: config.routes.routes.home, component: Home },
  { path: config.routes.routes.detail(":number"), component: Detail },
  {
    path: config.routes.routes.mobile_network(":mobile_network_name"),
    component: ViewPagination,
  },
  {
    path: config.routes.routes.strat_number(":start_number_name"),
    component: ViewPagination,
  },
  {
    path: config.routes.routes.category(":category_label"),
    component: ViewPagination,
  },
];

const privateRoutes: RouteITF[] = [];

export { publicRoutes, privateRoutes };

// import config from "@/config";
// import { RouteITF } from "@/interface/Route";

// // Pages
// import Home from "@/pages/Home";
// import Detail from "@/pages/Detail";
// import ViewPagination from "@/pages/ViewPagination";
// // import Introduce from "@/pages/Introduce";
// // import HeaderOnly from "@/layouts/HeaderOnly";
// // import Login from "@/pages/Login";

// // Public routes
// const publicRoutes: RouteITF[] = [
//   { path: config.routes.home, component: Home },
//   { path: config.routes.detail, component: Detail },
//   { path: config.routes.mobile_network, component: ViewPagination },
//   // { path: config.routes.introduce, component: Introduce, layout: HeaderOnly },
//   // { path: config.routes.login, component: Login, layout: null },
//   // {
//   //   path: config.routes.contributors,
//   //   component: Contributors,
//   //   layout: HeaderOnly,
//   // },
// ];

// const privateRoutes: RouteITF[] = [];

// export { publicRoutes, privateRoutes };
