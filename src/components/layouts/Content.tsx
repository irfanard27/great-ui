import React from "react";

type ContentProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;
};

const Content = React.forwardRef<HTMLDivElement, ContentProps>((props, ref) => {
  const contentRef = (ref as any) || React.createRef<HTMLElement>();

  return (
    <div className="content" {...props} ref={contentRef}>
      {props.children}
    </div>
  );
});

export { Content };
