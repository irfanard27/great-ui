import React from "react";
import { Button, Notification } from "../../great-ui";

export default function DemoNotification() {
  const openNotification = () => {
    Notification({
      message: "This is Notification Testing for you",
      title: "Success",
      type: "success",
      onOpen: () => console.log("Notification Opened"),
      onClose: () => console.log("Notification Closed"),
    });
  };

  const openErrNotification = () => {
    Notification({
      message: "This is Notification Testing for you",
      title: "Error",
      type: "error",
      onOpen: () => console.log("Notification Opened"),
      onClose: () => console.log("Notification Closed"),
    });
  };

  const openWarningNotification = () => {
    Notification({
      message: "This is Notification Testing for you",
      title: "Waning for you",
      type: "warning",
      onOpen: () => console.log("Notification Opened"),
      onClose: () => console.log("Notification Closed"),
    });
  };

  const openInfoNotification = () => {
    Notification({
      message: "This is Notification Testing for you",
      title: "New Announcement",
      type: "info",
      onOpen: () => console.log("Notification Opened"),
      onClose: () => console.log("Notification Closed"),
    });
  };
  return (
    <div>
      <h1>Notification</h1>

      <div>
        {" "}
        <Button onClick={openNotification}>Success Notification</Button>
        <Button onClick={openErrNotification}>Error Notification</Button>
        <Button onClick={openWarningNotification}>Warning Notification</Button>
        <Button onClick={openInfoNotification}>Info Notification</Button>
      </div>
    </div>
  );
}
