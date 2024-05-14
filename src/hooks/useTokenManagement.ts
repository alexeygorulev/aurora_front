import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useTokenManagement() {
  const [temporaryToken, setTemporaryToken] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const previousToken = localStorage.getItem('temporaryToken');

    if (token) {
      localStorage.setItem('temporaryToken', token);
      setTemporaryToken(token);
    } else if (previousToken) {
      setTemporaryToken(previousToken);
    }
  }, [location]);

  return { temporaryToken, setTemporaryToken };
}
