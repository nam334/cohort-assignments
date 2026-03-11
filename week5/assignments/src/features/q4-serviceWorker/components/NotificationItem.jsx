import React from "react";

const NotificationItem = ({ notification }) => {
  return (
    <div>
      <p>{notification.message}</p>
      <small>{new Date(notification.timestamp).toLocaleString()}</small>
    </div>
  );
};

export default NotificationItem;
