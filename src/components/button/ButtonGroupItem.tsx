import React from "react";

type ItemProps = {
  id?: string;
  type?: string;
  style?: React.CSSProperties;
  key?: number;
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
  const { id, type, key, ...rest } = props;
  const itemRef = (ref as any) || React.createRef<HTMLElement>();

  return (
    <button id={id} key={key} {...rest} ref={itemRef} className="item">
      {React.Children}
    </button>
  );
};

export const Item = React.forwardRef<unknown, ItemProps>(
  InternalItem
) as ItemComponent;
