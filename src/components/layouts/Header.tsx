import React from "react";

type HeaderProps = {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  position?: "fixed" | "static";
  left?: React.ReactNode;
  right?: React.ReactNode;
  center?: React.ReactNode;
};

const Header = React.forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const { position, ...rest } = props;
  const headerRef = (ref as any) || React.createRef<HTMLElement>();
  const positions = (() => {
    switch (props.position) {
      case "fixed":
        return { className: "header header-fixed " + props.className };
      case undefined:
        return { className: "header " + props.className };
      default:
        return {};
    }
  })();

  return (
    <div {...rest} {...positions} ref={headerRef}>
      {props.children}
      <div>{props.left}</div>
      <div>{props.center}</div>
      <div>{props.right}</div>
    </div>
  );
});

export { Header };
