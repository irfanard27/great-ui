import React from "react";

interface RowProps {
  key?: string;
  children?: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLElement>): void;
  style?: React.CSSProperties;
  gutter?: number;
}

interface RowComponent extends React.ExoticComponent<RowProps> {}

const InternalRow: React.ForwardRefRenderFunction<unknown, RowProps> = (
  props,
  ref
) => {
  const { key, children, gutter, ...rest } = props;
  const rowRef = (ref as any) || React.createRef<HTMLElement>();

  return (
    <div ref={rowRef} {...rest} className="row">
      {children}
    </div>
  );
};

const Row = React.forwardRef<unknown, RowProps>(InternalRow) as RowComponent;

export { Row };
