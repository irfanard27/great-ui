import React from "react";

type MainProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;
};

const Main = React.forwardRef<HTMLDivElement, MainProps>((props, ref) => {
  const contentRef = (ref as any) || React.createRef<HTMLElement>();

  return (
    <div className="layout-main" {...props} ref={contentRef}>
      {props.children}
    </div>
  );
});

export { Main };
