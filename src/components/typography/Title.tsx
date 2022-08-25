import React from "react";

interface TitleProps {
  key?: string;
  title: string | any;
  subTitle?: string | any;
  titleStyle?: React.StyleHTMLAttributes<any>;
  subTitleStyle?: React.StyleHTMLAttributes<any>;
  bold?: boolean;
  avatar?: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLDivElement>): void;
}

const getClassName = (props: TitleProps) => {
  let cls = "title";
  if (props.bold && props.bold !== undefined) {
    cls = cls + " title-bold";
  }

  return cls;
};

const isAvatarExist = (props: TitleProps) => {
  if (props.avatar !== undefined) {
    return <span style={{ marginRight: 5 }}>{props.avatar}</span>;
  }
};

const InternalTitle: React.ForwardRefRenderFunction<unknown, TitleProps> = (
  props,
  ref
) => {
  const titleRef = (ref as any) || React.createRef<HTMLElement>();
  const { key, subTitleStyle, titleStyle, bold, subTitle, title, ...rest } =
    props;

  return (
    <div key={key} ref={titleRef} {...rest} style={{ display: "flex" }}>
      {isAvatarExist(props)}
      <div>
        <span className={getClassName(props)} style={titleStyle}>
          {title}
        </span>
        <br />
        <small className="small-title" style={subTitleStyle}>
          {subTitle}
        </small>
      </div>
    </div>
  );
};

const Title = React.forwardRef<unknown, TitleProps>(InternalTitle);

export { Title };
