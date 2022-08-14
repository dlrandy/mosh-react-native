import * as Notifications from "expo-notifications";
const showNotification = (notification) => {
  Notifications.scheduleNotificationAsync(notification);
};

export { showNotification };
