import React from "react";

type ItemProps = {
  id?: string;
  type?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
};

interface ItemComponent
  extends React.ForwardRefExoticComponent<
    ItemProps & React.RefAttributes<HTMLElement>
  > {}

const InternalItem: React.ForwardRefRenderFunction<unknown, ItemProps> = (
  props,
  ref
) => {
  const { id, type, ...rest } = props;
  const itemRef = (ref as any) || React.createRef<HTMLElement>();

  return (
    <button id={id} {...rest} ref={itemRef} className="item">
      {React.Children}
    </button>
  );
};

export const Item = React.forwardRef<unknown, ItemProps>(
  InternalItem
) as ItemComponent;
