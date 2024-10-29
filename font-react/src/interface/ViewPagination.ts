export interface MobileNetwork {
  products: ProductMobileNetwork;
  mobile_networks: childrenMobileNetwork[];
}
export interface childrenMobileNetwork {
  id: number;
  name: string;
  image: string;
}
export interface DataMobileNetwork {
  id: number;
  start_number_id: number;
  mobile_networks_id: number;
  number: string;
  price: number;
  quantity: number;
  describe: string;
}
export interface LinkMobileNetwork {
  url: string;
  label: string;
  active: boolean;
}
export interface ProductMobileNetwork {
  current_page: number;
  data: DataMobileNetwork[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: LinkMobileNetwork[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null | string;
  to: number;
  total: number;
}
