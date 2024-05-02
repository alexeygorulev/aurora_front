import { Notification } from './types';
import Message from './Message';
import { store as alertsStore } from 'components/atoms/Alerts';

export function addNotification(notification: Notification): void {
  const {
    type,
    container = 'topRight',
    message = '',
    duration = 5000,
    dismiss = { click: false, showIcon: true, pauseOnHover: true },
  } = notification;

  alertsStore.addNotification({
    type,
    container,
    message: Message(message),
    dismiss: { ...dismiss, duration },
  });
}
