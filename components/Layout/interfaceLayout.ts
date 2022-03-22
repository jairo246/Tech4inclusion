import { ReactNode } from "react";

interface subMenuInterface {
    type: string;
    name: string;
    to: string;
    icon?: ReactNode;
  }
  interface MenuItemInterface {
    type: string;
    name: string;
    to: string;
    links?: [subMenuInterface];
    icon?: ReactNode;
  }

interface LayoutProps{
    children?: React.ReactNode;
    //menu: MenuItemInterface[];
}

export default LayoutProps