import { createContext } from 'react';

interface LayoutContextType {
  token: string | null;
  backFromResetPassword: () => void;
}

export const LayoutContext = createContext<LayoutContextType>({
  token: null,
  backFromResetPassword: () => null,
});
