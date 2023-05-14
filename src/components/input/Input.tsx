import React from "react";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: "text" | "number" | "password" | "email";
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  initialValue?: string;
  value?: string;
  suffix?: React.ReactNode;
  preffix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const inputRef = (ref as any) || React.createRef<HTMLInputElement>();

  return (
    <input
      {...props}
      ref={inputRef}
      className="input"
      defaultValue={props.initialValue}
    />
  );
});

export { Input };
