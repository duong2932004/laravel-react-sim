import { ReactNode } from "react";
import { SidebarResult } from "@/interface/PhoneNumber";

export interface ChildrenITF {
  children: ReactNode;
}

// default layout
export interface ChildrenDefaultLayoutITF {
  children: (sidebar: SidebarResult, priceOptions: PriceOption[]) => ReactNode;
}
export interface PriceOption {
  value: string;
  label: string;
}
