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
    path: config.routes.routes.start_number(":start_number_name"),
    component: ViewPagination,
  },
  {
    path: config.routes.routes.category(":category_label"),
    component: ViewPagination,
  },
  {
    path: config.routes.routes.price(":price_value"),
    component: ViewPagination,
  },
  {
    path: config.routes.routes.key_word(":key_word"),
    component: ViewPagination,
  },
];

const privateRoutes: RouteITF[] = [];

export { publicRoutes, privateRoutes };
