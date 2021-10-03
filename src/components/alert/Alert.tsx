import React from "react";

type AlertProps = {
  type?: "default" | "primary" | "warning" | "success" | "error";
  children?: React.ReactNode;
};

const InternalAlert = (props: AlertProps) => {
  const { type, children, ...rest } = props;

  return (
    <div className="gu-alert" {...rest}>
      {children}
    </div>
  );
};

const Alert = InternalAlert;
export { Alert };
