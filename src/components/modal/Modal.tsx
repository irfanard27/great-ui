import React, { useEffect } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

type ModalProps = {
  open: boolean;
  close?: () => void;
  title?: string | React.ReactNode;
  children: React.ReactNode;
  width?: number;
  bordered?: boolean;
  closable?: boolean;
  style?: React.CSSProperties;
};

const getModalHeaderClasses = (props: ModalProps) => {
  let classes = "modal-header";
  if (props.bordered === false) {
    classes = classes + " no-border";
  }

  return classes;
};

// eslint-disable-next-line react-hooks/exhaustive-deps
const setVisibilty = (props: ModalProps) => {
  const el = document.querySelector(".modal-overlay");

  if (props.open) {
    el?.classList.remove("hidden");
    el?.classList.add("show");
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  } else {
    el?.classList.add("hidden");
    el?.classList.remove("show");
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }
};

const InternalModal: React.ForwardRefRenderFunction<unknown, ModalProps> = (
  props,
  ref
) => {
  useEffect(() => {
    setVisibilty(props);
  }, [props, props.open]);

  return (
    <>
      <div className="modal-overlay hidden">
        <div className="modal" style={{ width: props.width, ...props.style }}>
          <div className={getModalHeaderClasses(props)}>
            <div className="modal-title">
              <div>{props.title}</div>
            </div>
            <div className="modal-close" onClick={props.close}>
              <HiOutlineXMark />
            </div>
          </div>

          <div className="modal-body">{props.children}</div>
        </div>
      </div>
    </>
  );
};

const Modal = React.forwardRef<unknown, ModalProps>(InternalModal);
export { Modal };
