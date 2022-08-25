import React from "react";

interface ItemProps {
  id?: string;
  type?: string;
  style?: React.CSSProperties;
  key?: string;
  children?: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

const InternalItem = (props: ItemProps) => {
  const { id, type, key, ...rest } = props;
  return (
    <button id={id} key={key} {...rest} className="item">
      {props.children}
    </button>
  );
};

export const Item = InternalItem;
