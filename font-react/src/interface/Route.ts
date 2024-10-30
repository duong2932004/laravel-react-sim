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
    mobile_network: (networkName: string) => string;
    strat_number: (number: string) => string;
    category: (category_label: string) => string;
  };
}
