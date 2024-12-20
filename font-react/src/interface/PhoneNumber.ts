export interface DataSearch {
  search: string;
}
export interface ResultSearch {
  mobile_network_name: string;
  number: string;
}
export interface MobileNetwork {
  id: number;
  name: string;
  image: string;
}

export interface LoadPageResult {
  mobile_networks: MobileNetwork[];
  products: Products[];
  category: Category[];
  start_number: StartNumbers[];
}
export interface SidebarResult {
  mobile_networks: MobileNetwork[];
  category: Category[];
  start_numbers: StartNumbers[];
}
export interface Products {
  products: Product[];
  mobile_network_name: string;
}
export interface Product {
  start_number_id: number;
  mobile_networks_id: number;
  number: number;
  price: number;
  quantity: number;
  describe: string;
}
export interface Category {
  id: number;
  name: string;
  label: string;
}
export interface StartNumbers {
  id: number;
  name: string;
}
//sidebar_result
export interface SideBar {
  dataSidebar: {
    mobile_networks: MobileNetwork[];
    category: Category[];
    start_numbers: StartNumbers[];
  };
  priceOptions: {
    value: string;
    label: string;
  }[];
}
//detail
export interface DetailITF {
  id: number;
  start_number_id: number;
  mobile_networks_id: number;
  number: string;
  price: number;
  quantity: number;
  describe: string;
  categories: Category_detail[];
  start_number: {
    id: number;
    name: string;
  };
  mobile_network: {
    id: number;
    name: string;
    image: string;
  };
}

interface Category_detail {
  id: number;
  name: string;
  pivot: {
    product_id: number;
    category_id: number;
  };
}
