//notifications must survice page load
//responsibilties

//save notification
export const saveNotification = (notification) => {
  //logic for save notification

  // fetch all notifications
  // store in a variable
  let allNotifications = getNotifications();

  // add the new notification
  let totalNotifications = [...allNotifications, notification];
  // convert the list to a string
  let convertedTotalNotifications = JSON.stringify(totalNotifications);
  // store it bck to local storage
  localStorage.setItem("notifications", convertedTotalNotifications);
};

//fetch all notification
export const getNotifications = () => {
  const fetchedData = localStorage.getItem("notifications");
  if (!fetchedData) return [];
  else return JSON.parse(fetchedData);
};

//update read or unread
export const markAsRead = (notificationId) => {
  let getAllNotifications = getNotifications();
  let updatedNotificationList = getAllNotifications.map(
    (notification, index) => {
      if (notification.id === notificationId) {
        return { ...notification, read: true };
      }
      return notification;
    },
  );
  localStorage.setItem(
    "notifications",
    JSON.stringify(updatedNotificationList),
  );
};
