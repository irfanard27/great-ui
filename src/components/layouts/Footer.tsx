import React from "react";

type FooterProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;
};

const Footer = React.forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  const footerRef = (ref as any) || React.createRef<HTMLElement>();

  return (
    <div {...props} ref={footerRef} className="footer">
      {props.children}
    </div>
  );
});

export { Footer };
