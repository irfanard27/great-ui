import React, { forwardRef } from "react";

type ItemProps = {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  items?: Array<ItemProps>;
  key: string;
};

interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
  style?: React.CSSProperties;
  items: Array<ItemProps>;
  layout?: "vertical" | "horizontal";
  defaultActiveKey?: string;
}

const Menu = forwardRef<HTMLUListElement, MenuProps>((props, ref) => {
  const { items } = props;
  const menuRef = (ref as any) || React.createRef<HTMLUListElement>();
  return (
    <ul className="menu" ref={menuRef} {...props}>
      {items &&
        items.map((item) => {
          return <li key={item.key}>{item.label}</li>;
        })}
    </ul>
  );
});

export { Menu };
