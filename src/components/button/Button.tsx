import React from "react";
import { Spacing } from "../spacing/Spacing";
import { AiOutlineLoading } from "react-icons/ai";

type ButtonType =
  | "primary"
  | "secondary"
  | "outlined"
  | "danger"
  | "warning"
  | "success"
  | "pink"
  | "purple"
  | "grey";

type ButtonSizes =
  | "default"
  | "large"
  | "small"
  | "super-large"
  | "super-small";

interface ButtonProps {
  id?: string;
  block?: boolean;
  disabled?: boolean;
  type?: ButtonType;
  className?: string;
  children?: React.ReactNode;
  shadow?: boolean;
  size?: ButtonSizes;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  loading: boolean;
  icon: React.ReactNode;
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
    case "grey":
      className = "button button-grey";
      break;
    case undefined:
      className = "button";
      break;
    default:
      className = "button";
  }

  switch (props.size) {
    case "large":
      className = `${className} button-lg`;
      break;
    case "super-large":
      className = `${className} button-super-lg`;
      break;
    case "small":
      className = `${className} button-sm`;
      break;
    case "super-small":
      className = `${className} button-super-sm`;
      break;
    default:
  }

  const cls = {
    className: `${className} ${
      props.className !== undefined ? props.className : ""
    } ${props.block !== undefined && props.block ? "button-blocked" : ""} ${
      props.shadow !== undefined && props.shadow ? "button-shadow" : ""
    }`.trim(),
  };
  return cls;
}

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props,
  ref
) => {
  const { block, shadow, type, loading, ...rest } = props;
  const buttonRef = (ref as any) || React.createRef<HTMLElement>();
  const classNames = getType(props);

  const isLoading = () => {
    if (loading) {
      return {
        style: {
          cursor: "not-allowed",
        },
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
        },
      };
    }
  };
  return (
    <button {...rest} {...classNames} ref={buttonRef} {...isLoading()}>
      <Spacing>
        {!loading ? (
          props.icon
        ) : (
          <span className="circular-loading">
            <AiOutlineLoading />
          </span>
        )}
        {props.children}
      </Spacing>
    </button>
  );
};

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton);

export { Button };
