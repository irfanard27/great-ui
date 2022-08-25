import React from "react";

type CardProps = {
  bordered?: boolean;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const isBordered = (props: any) => {
  const cls =
    !props.bordered && props.bordered === undefined
      ? "gu-card-borderless"
      : "gu-card";

  return {
    className: `${cls} ${
      props.className !== undefined ? props.className : ""
    }`.trimEnd(),
  };
};

const InternalCard = (props: CardProps) => {
  const { title, bordered, className, ...rest } = props;

  const getClassName = isBordered(props);

  return (
    <div {...rest} {...getClassName}>
      {title !== undefined ? <div className="gu-card-title">{title}</div> : ""}
      <div className="gu-card-content">{props.children}</div>
    </div>
  );
};

const Card = InternalCard;
export { Card };
