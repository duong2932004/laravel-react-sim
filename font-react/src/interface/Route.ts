import { ChildrenITF } from "@/interface/Children";
import { FC } from "react";

export interface RouteITF {
  path: string;
  component: () => JSX.Element;
  layout?: FC<ChildrenITF> | null;
}
