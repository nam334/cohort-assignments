import React from "react";
import { useNotifications } from "../hooks/useNotifications";
import NotificationItem from "./NotificationItem";

const NotificationCenter = () => {
  const notifications = useNotifications();
  return (
    <>
      {notifications.map((n) => (
        <NotificationItem key={n.id} notification={n} />
      ))}
    </>
  );
};

export default NotificationCenter;
