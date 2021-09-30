import React from "react";

type ButtonType =
  | "primary"
  | "secondary"
  | "outlined"
  | "danger"
  | "warning"
  | "success"
  | "pink"
  | "purple";

interface ButtonProps {
  id?: string;
  block?: boolean;
  disabled?: boolean;
  type?: ButtonType;
  className?: string;
  children?: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

function getType(props: ButtonProps) {
  let className;
  switch (props.type) {
    case "primary":
      className = "button button-primary";
      break;
    case "secondary":
      className = "button button-secondary";
      break;
    case "outlined":
      className = "button button-outlined";
      break;
    case "danger":
      className = "button button-danger";
      break;
    case "warning":
      className = "button button-warning";
      break;
    case "success":
      className = "button button-success";
      break;
    case "purple":
      className = "button button-purple";
      break;
    case "pink":
      className = "button button-pink";
      break;
    case undefined:
      className = "button";
      break;
    default:
      className = "button";
  }

  const cls = {
    className: `${className} ${
      props.className !== undefined ? props.className : ""
    } ${props.block !== undefined && props.block ? "button-blocked" : ""}`,
  };
  return cls;
}

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props,
  ref
) => {
  const { block, type, ...rest } = props;
  const buttonRef = (ref as any) || React.createRef<HTMLElement>();
  const classNames = getType(props);

  return (
    <button {...rest} {...classNames} ref={buttonRef}>
      {props.children}
    </button>
  );
};

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton);
export { Button };
