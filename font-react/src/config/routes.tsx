// config.ts
import { Config } from "@/interface/Route";

const routes = {
  home: "/",
  detail: (number: string) => `/thong-tin/${number}`,

  mobile_network: (networkName: string, page?: number | string) =>
    `/nha-mang/${networkName}${page ? `?page=${page}` : ""}`,

  start_number: (number: string, page?: number | string) =>
    `/dau-so/${number}${page ? `?page=${page}` : ""}`,

  category: (category_label: string, page?: number | string) =>
    `/danh-muc/${category_label}${page ? `?page=${page}` : ""}`,

  price: (value_query: string, page?: number | string) =>
    `/gia-tien/${value_query}${page ? `?page=${page}` : ""}`,

  key_word: (value_query: string, page?: number | string) =>
    `/tu-khoa-pho-bien/${value_query}${page ? `?page=${page}` : ""}`,
};

const config: Config = {
  routes,
};

export default config;
