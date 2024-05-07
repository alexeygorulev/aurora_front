import { addNotification } from 'application/Alerts';

interface ApiErrorData {
  message?: string | string[];
  error?: string | string[];
}

interface FetchBaseQueryError {
  status: number;
  data?: ApiErrorData;
}

interface SerializedError {
  name?: string;
  message?: string;
  stack?: string;
}

export type ErrorType = FetchBaseQueryError | SerializedError | Error;

export function createErrorNotification(isError: boolean, error: ErrorType) {
  if (isError && error) {
    if ('status' in error && 'data' in error) {
      const fetchError = error as FetchBaseQueryError;

      if (Array.isArray(fetchError.data?.message) && fetchError.data) {
        fetchError?.data.message.forEach((message) => addNotification({ type: 'error', message }));
      }

      if (typeof fetchError.data?.message === 'string') {
        const errorMessage = fetchError.data?.message || 'Произошла ошибка';
        addNotification({ type: 'error', message: errorMessage });
      }
    } else if ('message' in error) {
      addNotification({ type: 'error', message: error.message || 'Произошла неизвестная ошибка' });
    } else {
      addNotification({ type: 'error', message: 'Произошла неизвестная ошибка' });
    }
  }
}
