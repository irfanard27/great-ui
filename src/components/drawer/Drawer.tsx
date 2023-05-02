import React, { useEffect } from "react";
import { HiXMark } from "react-icons/hi2";
interface DrawerProps {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  title?: string;
  width?: number;
}

const setVisibilty = (open: boolean) => {
  const el = document.querySelector(".drawer-overlay");
  if (open) {
    el?.classList.remove("drawer-hide");
    el?.classList.add("drawer-show");
    openDrawerTransition(el?.querySelector(".drawer") as HTMLElement);
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  } else {
    closeDrawerTransition(el?.querySelector(".drawer") as HTMLElement);
    el?.classList.remove("drawer-show");
    el?.classList.add("drawer-hide");
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }
};

const openDrawerTransition = (el: HTMLElement) => {
  el.style.right = "0";
  el.style.transition = "right 0.3s";
  el.style.visibility = "visible";
};

const closeDrawerTransition = (el: HTMLElement) => {
  el.style.right = -el.clientWidth + "px";
  el.style.transition = "right 0.3s linear";
};

const InternalDrawer: React.ForwardRefRenderFunction<unknown, DrawerProps> = (
  props,
  ref
) => {
  const { children, onClose, title } = props;

  useEffect(() => {
    setVisibilty(props.open);
  }, [props.open]);

  return (
    <div className="drawer-overlay">
      <div className="drawer" style={{ width: props.width || 350 }}>
        <div className="drawer-header">
          <div className="drawer-title">{title}</div>
          <div
            className="drawer-close"
            style={{ cursor: "po" }}
            onClick={onClose}
          >
            <HiXMark />
          </div>
        </div>
        <div className="drawer-body">{children}</div>
      </div>
    </div>
  );
};

const Drawer = React.forwardRef<unknown, DrawerProps>(InternalDrawer);
export { Drawer };
