import React, { useMemo } from 'react';
import Layout from 'components/molecules';
import Alerts from 'components/atoms/Alerts';
import { useGetUserProfileDataQuery } from 'api/store';
import Loader from 'components/atoms/Loader';
import { Navigate, Routes, Route } from 'react-router-dom';
import { routes } from './routing';
import { LayoutContext } from './context';
import Auth from './Auth';
import ResetPassword from './Auth/ResetPassword';
import { useTokenManagement } from 'hooks/useTokenManagement';
import { useEmailConfirmationNotification } from 'hooks/useEmailConfirmationNotification';

export default function Application() {
  const { data: userProfile, error, isLoading } = useGetUserProfileDataQuery();
  const { temporaryToken, setTemporaryToken } = useTokenManagement();
  useEmailConfirmationNotification();

  const setDefaultToken = () => {
    localStorage.removeItem('temporaryToken');
    setTemporaryToken(null);
  };

  const context = useMemo(
    () => ({
      token: temporaryToken,
      backFromResetPassword: setDefaultToken,
    }),
    [temporaryToken],
  );

  if (isLoading) {
    return <Loader size="xl" isCentred />;
  }
  const isResetPassword = location.pathname.includes('reset-password') && temporaryToken;
  const authLocation = isResetPassword ? '/authentication/reset-password' : '/authentication';
  const shouldRedirectToAuth = !userProfile || Boolean(error) || isResetPassword;

  return (
    <>
      <Navigate to={shouldRedirectToAuth ? authLocation : '/'} replace />
      <Layout>
        <LayoutContext.Provider value={context}>
          <Routes>
            {routes.map((route: any) => (
              <Route
                key={route.id}
                path={route.path}
                element={
                  <React.Suspense fallback={null}>
                    <route.component />
                  </React.Suspense>
                }
              />
            ))}
            <Route path="/authentication" element={<Auth />}>
              <Route path="reset-password" element={<ResetPassword />} />
            </Route>
          </Routes>
        </LayoutContext.Provider>
      </Layout>
      <Alerts />
    </>
  );
}
