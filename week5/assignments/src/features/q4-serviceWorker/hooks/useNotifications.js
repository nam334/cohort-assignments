import { useEffect, useState } from "react";
import { saveNotification, getNotifications } from "../services/storageService";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const storedNotifications = getNotifications();
    setNotifications(storedNotifications);
  }, []);
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
        const notification = event.data;

        console.log("Notification received:", notification);

        // save notification in localStorage
        saveNotification(notification);

        // update React state
        setNotifications((prev) => [...prev, notification]);
      });
    }
  }, []);
  return notifications;
};
