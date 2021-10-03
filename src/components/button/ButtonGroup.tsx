import React from "react";
import { Item } from "./ButtonGroupItem";

type ButtonGroupProps = {
  className?: string;
  type?: "outlined" | "default";
  style?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;
};

interface ButtonGroupComponent extends React.ExoticComponent<ButtonGroupProps> {
  Item: typeof Item;
}

const InternalButtonGroup = (props: ButtonGroupProps) => {
  const { type, ...rest } = props;
  const types = (() => {
    switch (props.type) {
      case "outlined":
        return { className: "button-group-outlined " + props.className };
      case undefined:
        return { className: "button-group " + props.className };
      default:
        return {};
    }
  })();

  return <span {...rest} {...types} />;
};

const ButtonGroup = React.forwardRef<unknown, ButtonGroupProps>(
  InternalButtonGroup
) as ButtonGroupComponent;

ButtonGroup.Item = Item;

export { ButtonGroup };
