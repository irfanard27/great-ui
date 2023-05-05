import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Main } from "./Main";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  //children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface LayoutComponent extends React.ExoticComponent<LayoutProps> {
  Header: typeof Header;
  Main: typeof Main;
  Content: typeof Content;
  Footer: typeof Footer;
  Siderbar: typeof Sidebar;
}

const SelfLayout: React.ForwardRefRenderFunction<
  HTMLDivElement,
  LayoutProps
> = (props, ref) => {
  return (
    <div className="layout" ref={ref} {...props}>
      {props.children}
    </div>
  );
};

const Layout = React.forwardRef(SelfLayout) as LayoutComponent;

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Siderbar = Sidebar;
Layout.Main = Main;

export { Layout };
