import ReactDOMServer from "react-dom/server";
import {
  HiOutlineXMark,
  HiOutlineCheck,
  HiExclamationCircle,
  HiCheckCircle,
  HiXCircle,
  HiShieldExclamation,
} from "react-icons/hi2";

interface NotificationProps {
  title?: string;
  message?: string;
  duration?: number;
  type: NotificationType;
  onOpen?: () => void;
  onClose?: () => void;
}
type NotificationType = "default" | "success" | "error" | "warning" | "info";

export const Notification = (props: NotificationProps) => {
  renderNotification(props);
};

function renderNotification(p: NotificationProps) {
  var duration = p.duration || 2000;
  const body = document.getElementsByTagName("body")[0];

  const notification = document.createElement("div") as HTMLElement;
  notification.classList.add("notification");
  notification.innerHTML = `
  <div class="notification-body">
    <div class="notification-icon">
    ${ReactDOMServer.renderToStaticMarkup(getNotificationIcon(p.type))}
    </div>

    <div class="notification-content">
      <div class="notification-header">
        <div class="notification-title">${p.title}</div>

      </div>

      <div class="notification-message">${p.message}</div>
    </div>

  </div>
  ${ReactDOMServer.renderToStaticMarkup(
    <div className="notification-close">
      <HiOutlineXMark />
    </div>
  )}
  `;

  body.appendChild(notification as Node);
  openNotification(notification as HTMLElement, p.onOpen);
  const t = removeNotification(
    notification as HTMLElement,
    duration,
    p.onClose
  );
  eventListener(notification, t, p.onClose);
}

function openNotification(el: HTMLElement, onOpen: any) {
  setTimeout(() => {
    el.classList.remove("hide");
    el.classList.add("show");
    onOpen && onOpen();
  }, 100);
  //eventListener(el);
}

function removeNotification(
  el: HTMLElement,
  duration: number,
  onClose: any = () => {}
) {
  const t = setTimeout(() => {
    el.classList.remove("show");
    el.classList.add("hide");

    setTimeout(() => {
      el.remove();
    }, 100);
    onClose();

    el.removeEventListener("mouseover", () => {});
    el.removeEventListener("mouseleave", () => {});
    el.querySelector(".notification-close")?.removeEventListener(
      "click",
      () => {}
    );
  }, duration);

  return t;
}

function eventListener(el: HTMLElement, timeoutId?: any, onClose?: any) {
  var isClicked = false;

  el.addEventListener("mouseover", (ev) => {
    clearTimeout(timeoutId);
  });

  el.querySelector(".notification-close")?.addEventListener("click", (ev) => {
    isClicked = true;
    removeNotification(el, 100, onClose);
  });

  el.addEventListener("mouseleave", (ev) => {
    if (!isClicked) {
      removeNotification(el, 1000, onClose);
    }
  });
}

function getNotificationIcon(type: NotificationType): JSX.Element {
  var icon: JSX.Element = <HiOutlineCheck />;

  switch (type) {
    case "success":
      icon = <HiCheckCircle className="success-icon" />;
      break;
    case "error":
      icon = <HiXCircle className="error-icon" />;
      break;
    case "warning":
      icon = <HiExclamationCircle className="warning-icon" />;
      break;
    case "info":
      icon = <HiShieldExclamation className="info-icon" />;
      break;
  }

  return icon;
}
