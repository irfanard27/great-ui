import React from "react";

interface ColProps {
  key?: string;
  children?: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLElement>): void;
  style?: React.CSSProperties;
  span: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

// interface RowComponent extends React.ExoticComponent<RowProps> {}

const _col: React.ForwardRefRenderFunction<unknown, ColProps> = (
  props,
  ref
) => {
  const { key, children, ...rest } = props;
  const rowRef = (ref as any) || React.createRef<HTMLElement>();
  return (
    <div
      ref={rowRef}
      {...rest}
      style={{ ...props.style }}
      className={`col col-${props.span}`}
    >
      {children}
    </div>
  );
};

const Col = React.forwardRef<unknown, ColProps>(_col);

export { Col };
