import { addNotification } from 'application/Alerts';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useEmailConfirmationNotification() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('checkEmail')) {
      setTimeout(() => {
        addNotification({ type: 'success', message: 'Ваш email успешно подтвержден' });
      }, 100);
    }
  }, [location]);
}
