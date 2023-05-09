import React from "react";

interface SpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  gap?: number;
}

const Spacing = React.forwardRef<HTMLDivElement, SpacingProps>((props, ref) => {
  return (
    <div {...props} ref={ref} className="spacing">
      {props.children}
    </div>
  );
});

export { Spacing };
