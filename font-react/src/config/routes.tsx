// config.ts
import { Config } from "@/interface/Route";

const routes = {
  home: "/",
  detail: (number: string) => `/thong-tin/${number}`,
  mobile_network: (networkName: string) => `/sim/${networkName}`,
  strat_number: (number: string) => `/dau-so/${number}`,
  category: (category_label: string) => `/${category_label}`,
};

const config: Config = {
  routes,
};

export default config;

// const routes = {
//   home: "/",
//   detail: "/thong-tin/:number",
//   mobile_network: "/sim/:mobile_network_name",
// };

// export default routes;
