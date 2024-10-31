import { ChildrenITF } from "@/interface/Children";
import { FC } from "react";

export interface RouteITF {
  path: string;
  component: () => JSX.Element;
  layout?: FC<ChildrenITF> | null;
}

export interface Config {
  routes: {
    home: string;
    detail: (number: string) => string;
    mobile_network: (networkName: string, page?: string) => string;
    start_number: (number: string, page?: string) => string;
    category: (category_label: string, page?: string) => string;
    price: (value_query: string, page?: string) => string;
    key_word: (search_value: string, page?: string) => string;
  };
}
