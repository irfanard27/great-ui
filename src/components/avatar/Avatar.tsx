import React from "react";

type ShapeType = "radius" | "box" | "circle";
type AvatarSizes = "xsmall" | "small" | "default" | "large" | "super-large";
type AvatarColors = string | "red" | "blue" | "yellow" | "green" | "purple";

interface AvatarProps {
  key?: string | any;
  children?: React.ReactNode;
  shape?: ShapeType;
  color?: AvatarColors;
  size?: AvatarSizes;
}

const getClassName = (props: AvatarProps) => {
  let cls = "avatar";
  switch (props.shape) {
    case "box":
      cls = cls + " avatar-box";
      break;
    case "circle":
      cls = cls + " avatar-circle";
      break;
    default:
  }

  switch (props.size) {
    case "large":
      cls = cls + " avatar-lg";
      break;
    case "small":
      cls = cls + " avatar-sm";
      break;
    case "xsmall":
      cls = cls + " avatar-xsm";
      break;
    case "super-large":
      cls = cls + " avatar-super-lg";
      break;
    default:
  }

  switch (props.color) {
    case "red":
      cls = cls + " avatar-red";
      break;
    case "blue":
      cls = cls + " avatar-blue";
      break;
    case "yellow":
      cls = cls + " avatar-yellow";
      break;
    case "green":
      cls = cls + " avatar-green";
      break;
    default:
  }

  return { className: cls };
};

const InternalAvatar: React.ForwardRefRenderFunction<unknown, AvatarProps> = (
  props,
  ref
) => {
  const avatarRef = (ref as any) || React.createRef<HTMLElement>();
  const { key, ...rest } = props;

  return (
    <span key={key} {...getClassName(props)} {...rest} ref={avatarRef}>
      {props.children}
    </span>
  );
};

const Avatar = React.forwardRef<unknown, AvatarProps>(InternalAvatar);
export { Avatar };
