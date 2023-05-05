import React from "react";

type SidebarProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;
  position?: "fixed" | "static";
  collapsed?: boolean;
  collapsible?: boolean;
};

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
  // make siderbar
  const { position, collapsed, collapsible, ...rest } = props;
  const sidebarRef = (ref as any) || React.createRef<HTMLElement>();

  const positions = (() => {
    switch (props.position) {
      case "fixed":
        return { className: "sidebar sidebar-fixed " + props.className };
      case undefined:
        return { className: "sidebar " + props.className };
      default:
        return {};
    }
  })();

  const collapseds = (() => {
    switch (props.collapsed) {
      case true:
        return { className: "sidebar sidebar-collapsed " + props.className };
      case false:
        return { className: "sidebar " + props.className };
      default:
        return {};
    }
  })();

  const collapsibles = (() => {
    switch (props.collapsible) {
      case true:
        return { className: "sidebar sidebar-collapsible " + props.className };
      case false:
        return { className: "sidebar " + props.className };
      default:
        return {};
    }
  })();

  return (
    <div
      {...rest}
      {...positions}
      {...collapseds}
      {...collapsibles}
      ref={sidebarRef}
    >
      {props.children}
    </div>
  );
});

export { Sidebar };
