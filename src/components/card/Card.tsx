import React from "react";

type CardProps = {
  bordered?: boolean;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  extra?: React.ReactNode;
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
      <div className="gu-card-header">
        {title && (
          <div className="gu-card-title">
            <div>{title}</div>
          </div>
        )}
        {props.extra && <div className="gu-card-extra">{props.extra}</div>}
      </div>

      <div className="gu-card-content">{props.children}</div>
    </div>
  );
};

const Card = InternalCard;
export { Card };
